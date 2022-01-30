import * as React from "react";

import { Link } from "react-router-dom";

import evts from "../services/eventcommons";
import * as recorder from "../libs/recorder";
import cfg from "../config";

type Props = {};

enum AppState {
  Idle = 1,
  Recording,
  Playing,
}

// TODO: this is a code smell
let engine: recorder.Recorder;
let recordings: Blob[] = [];
let audioplayer = document.createElement("audio");

export const Home: React.FC<Props> = (props) => {
  // context, vars, and states
  const [readiness, setReadiness] = React.useState<boolean>(false);
  const [appState, setAppState] = React.useState<AppState>(AppState.Idle);

  // helper funcs
  const onSetupComponent = async () => {
    if (!engine) engine = await recorder.NewRecorder();
    if (!readiness) {
      evts.on("echodio.RecordingAdded", onPlayRecordingWithIndex);
      evts.on("echodio.PlaybackEnded", onPlaybackEnded);
      setReadiness(true);
    }
  };

  const onRecord = async () => {
    if (!engine) return evts.emit("error", cfg.errors.ErrRecorderNotReady);

    engine.start({
      onStop: (blob) => {
        // add to recordings
        recordings.push(new Blob([blob], { type: blob.type }));
        recordings = recordings.slice(0, Math.min(10, recordings.length));

        // fire events
        evts.emit("echodio.RecordingAdded", recordings.length - 1);
      },
    });
    setAppState(AppState.Recording);
  };

  const onPlayEcho = async () => {
    if (!engine) return evts.emit("error", cfg.errors.ErrRecorderNotReady);

    engine.stop();
    setAppState(AppState.Playing);
  };

  const onStopEcho = async () => {
    if (!engine) return evts.emit("error", cfg.errors.ErrRecorderNotReady);

    audioplayer.pause();
    audioplayer.currentTime = 0;
    evts.emit("echodio.PlaybackEnded");
  };

  const onPlayRecordingWithIndex = async (index: number) => {
    audioplayer.src = URL.createObjectURL(recordings[index]);
    audioplayer.onended = () => evts.emit("echodio.PlaybackEnded");
    audioplayer.play();
  };

  const onPlaybackEnded = async () => {
    setAppState(AppState.Idle);
  };

  // effects
  React.useEffect(() => {
    onSetupComponent();
  }, [readiness]);

  return (
    <>
      <div className="text-center">
        <br />
        <br />
        <div
          className={
            "flex justify-center mb-3 " +
            (appState == AppState.Recording ? "animate-pulse" : "") +
            (appState == AppState.Playing ? "animate-bounce" : "")
          }
        >
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/parrot_1f99c.png"
            className="drop-shadow-md"
            alt=""
          />
        </div>
        <div className="drop-shadow-xl">
          <div className="font-bold text-6xl mb-2">
            <Link className="text-white" to={`/`}>
              echodio.
            </Link>
          </div>
          <div className="text-2xl text-stone-600">
            record and replay your voice, yeah just that.
          </div>
        </div>
        <br />
      </div>

      <div className="drop-shadow-md">
        {appState == AppState.Idle && (
          <div
            className="py-5 bg-blue-500 hover:animate-pulse active:bg-blue-600 text-white text-center text-xl font-medium cursor-pointer"
            onClick={onRecord}
          >
            Start Recording
          </div>
        )}
        {appState == AppState.Recording && (
          <div
            className="py-5 bg-green-600 hover:animate-pulse active:bg-green-700 text-white text-center text-xl font-medium cursor-pointer"
            onClick={onPlayEcho}
          >
            Stop and Echo
          </div>
        )}
        {appState == AppState.Playing && (
          <div
            className="py-5 bg-red-500 hover:animate-pulse active:bg-red-600 text-white text-center text-xl font-medium cursor-pointer"
            onClick={onStopEcho}
          >
            Stop Echo
          </div>
        )}
      </div>
    </>
  );
};
