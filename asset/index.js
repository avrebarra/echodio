class StreamToChunkRecorder {
  constructor(stream) {
    this.mediaRecorder = stream ? new MediaRecorder(stream) : null
  }

  attach({ stream }) {
    this.mediaRecorder = new MediaRecorder(stream)
  }

  record(writerFunction) {
    if (!this.mediaRecorder) throw new Error("No stream attached!")

    this.mediaRecorder.ondataavailable = writerFunction
    this.mediaRecorder.start()
  }

  stop() {
    this.mediaRecorder.stop()
  }
}

class State {
  constructor(value) {
    this.state = value
    this.listeners = []
  }

  change(value) {
    this.state = value

    // dispatch listeners
    this.listeners.forEach(listenerFunction => {
      listenerFunction(this.state)
    });
  }

  now() {
    return this.state
  }

  onChange(listenerFunction) {
    this.listeners.push(listenerFunction)
  }
}

// MAIN ROUTINE
const AudioPlayer = document.getElementById('player')
const StateDisplayer = document.getElementById('state-displayer')
const ControlButton = document.getElementById('control-button')

const ProgressBar = document.getElementById('progress-bar')
const ButtonText = document.getElementById('button-text')

const streamRecorder = new StreamToChunkRecorder()
var appState = new State('idle')
var recorderChunks = []

if (!navigator.mediaDevices.getUserMedia) throw new Error('Web recording is not supported/enabled. Please update your browser!')

navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => streamRecorder.attach({ stream }))

appState.onChange(newState => {
  switch (newState) {
    case 'idle':
      AudioPlayer.pause();
      AudioPlayer.currentTime = 0;

      ProgressBar.value = 0
      StateDisplayer.innerHTML = 'idle'
      ButtonText.innerHTML = 'record'
      break
    case 'recording':
      ProgressBar.removeAttribute('value')
      StateDisplayer.innerHTML = 'recording...'
      ButtonText.innerHTML = 'echo';
      break
    case 'playing':
      ProgressBar.removeAttribute('value')
      StateDisplayer.innerHTML = 'playing...'
      ButtonText.innerHTML = 'stop';
      break
    case 'play-ready':
      AudioPlayer.play()
      appState.change('playing')
      break
  }
})

AudioPlayer.addEventListener('ended', () => appState.change('idle'))
ControlButton.addEventListener('click', () => {
  switch (appState.now()) {
    case 'idle':
      appState.change('recording')
      streamRecorder.record(e => {
        const blob = new Blob([e.data], { 'type': 'audio/ogg; codecs=opus' });
        const audioURL = window.URL.createObjectURL(blob);
        recorderChunks = [];

        AudioPlayer.src = audioURL;
        appState.change('play-ready')
      })
      break
    case 'recording':
      streamRecorder.stop()
      break
    case 'playing':
      appState.change('idle')
      break
  }
})