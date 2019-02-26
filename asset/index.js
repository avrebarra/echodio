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
const controlButtonElement = document.getElementById('button')
const audioPlayerElement = document.getElementById('player')
const stateDisplayElement = document.getElementById('state-displayer')

const streamRecorder = new StreamToChunkRecorder()
var appState = new State('idle')
var recorderChunks = []

if (!navigator.mediaDevices.getUserMedia) throw new Error('Web recording is not supported/enabled. Please update your browser!')

navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => streamRecorder.attach({ stream }))

appState.onChange(newState => {
  switch (newState) {
    case 'idle':
      audioPlayerElement.pause();
      audioPlayerElement.currentTime = 0;

      stateDisplayElement.innerHTML = 'idle'
      controlButtonElement.innerHTML = 'record'
      break
    case 'recording':
      stateDisplayElement.innerHTML = 'recording...'
      controlButtonElement.innerHTML = 'echo';
      break
    case 'playing':
      stateDisplayElement.innerHTML = 'playing...'
      controlButtonElement.innerHTML = 'stop';
      break
    case 'play-ready':
      appState.change('playing')
      audioPlayerElement.play()
      break
  }
})

audioPlayerElement.addEventListener('ended', () => appState.change('idle'))
controlButtonElement.addEventListener('click', () => {
  switch (appState.now()) {
    case 'idle':
      appState.change('recording')
      streamRecorder.record(e => {
        const blob = new Blob([e.data], { 'type': 'audio/ogg; codecs=opus' });
        const audioURL = window.URL.createObjectURL(blob);
        recorderChunks = [];

        audioPlayerElement.src = audioURL;
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