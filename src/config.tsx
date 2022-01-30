const CONFIG = {
  appName: "Echodio",
  appDescription: "Mirror your voice!",
  appFaviconURL:
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/314/speaker-high-volume_1f50a.png",
  subDirPath: process.env.SUB_DIR_PATH || "",
  errors: {
    ErrRecorderNotReady: {
      title: "Recorder Not Ready",
      message: "Recorder is not ready or not setup properly",
    },
  },
};

export default CONFIG;
