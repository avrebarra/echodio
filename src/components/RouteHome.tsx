import * as React from "react";

import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import evts from "../services/eventcommons";
import * as recorder from "../libs/recorder";
import cfg from "../config";

type Props = {};

enum AppState {
  Idle = 1,
  Recording,
  Playing,
}

let engine: recorder.Recorder;
const recordings: Blob[] = [];

export const Home: React.FC<Props> = (props) => {
  // context, vars, and states
  const [readiness, setReadiness] = React.useState<boolean>(false);
  const [appstate, setAppState] = React.useState<AppState>(AppState.Idle);

  // helper funcs
  const fxSetup = async () => {
    if (!engine) engine = await recorder.NewRecorder();
  };
  const fxRunRecord = async () => {
    if (!engine) return evts.emit("error", cfg.errors.ErrRecorderNotReady);
    engine.start({
      onStop: (blob) => {
        recordings.push(new Blob([blob], { type: blob.type }));
      },
    });
    setAppState(AppState.Recording);
  };
  const fxRunEcho = async () => {
    if (!engine) return evts.emit("error", cfg.errors.ErrRecorderNotReady);
    engine.stop();
    // player start
    setAppState(AppState.Playing);
  };
  const fxStopEcho = async () => {
    if (!engine) return evts.emit("error", cfg.errors.ErrRecorderNotReady);
    // player stop
    setAppState(AppState.Idle);
  };

  // effects
  React.useEffect(() => {
    fxSetup();
  }, [readiness, appstate]);

  return (
    <>
      <div className="text-center">
        <br />
        <div className="flex justify-center mb-3">
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/parrot_1f99c.png"
            alt=""
          />
        </div>
        <div className="font-bold text-5xl mb-2">
          <Link className="" to={`/`}>
            Echodio
          </Link>
        </div>
        <div className="text-2xl">Mirror your voice~</div>
        <br />
      </div>

      <div className="flex justify-center">
        {appstate == AppState.Idle && (
          <Button size={"lg"} colorScheme="blue" onClick={fxRunRecord}>
            Start Recording
          </Button>
        )}
        {appstate == AppState.Recording && (
          <Button size={"lg"} colorScheme="green" onClick={fxRunEcho}>
            Echo
          </Button>
        )}
        {appstate == AppState.Playing && (
          <Button size={"lg"} colorScheme="red" onClick={fxStopEcho}>
            Stop
          </Button>
        )}
      </div>
    </>
  );
};
