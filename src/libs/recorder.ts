type Recorder = {
  start: (opts: RecordingOptions) => void;
  stop: () => void;
};

type RecordingOptions = {
  onStop: (blob: Blob) => void;
};

export const NewRecorder = async (): Promise<Recorder> => {
  const constraints = { audio: true };
  const mediastream = await navigator.mediaDevices.getUserMedia(constraints);

  // recorder state
  let latestBlob: Blob;
  let latestOpts: RecordingOptions;

  // setup recorder
  const mediaChunks: BlobPart[] = [];
  const mediaRecorder = new MediaRecorder(mediastream, {
    mimeType: "audio/m4a",
  });
  mediaRecorder.ondataavailable = (e) => {
    mediaChunks.push(e.data);
  };
  mediaRecorder.onstop = () => {
    latestBlob = new Blob(mediaChunks, { type: "audio/m4a" });
  };

  // build recorder wrapper
  return {
    start: (opts: RecordingOptions) => {
      if (mediaRecorder.state != "inactive") mediaRecorder.stop(); // ensure inactive
      latestOpts = opts; // set current active opts
      mediaRecorder.start();
    },
    stop: () => {
      mediaRecorder.stop();
      latestOpts.onStop(latestBlob); // trigger callback
    },
  };
};
