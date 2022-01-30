const CONFIG = {
  appName: "Echodio",
  appDescription: "Mirror your voice!",
  appFaviconURL:
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/291/parrot_1f99c.png",
  subDirPath: process.env.DISABLE_GITHUB_SUBDIR_PATH ? "" : "echodio",
  errors: {
    ErrRecorderNotReady: {
      title: "Recorder Not Ready",
      message: "Recorder is not ready or not setup properly",
    },
  },
};

export default CONFIG;
