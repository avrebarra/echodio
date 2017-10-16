var chunk = []
var mediaStream
var mediaRecorder

function recorderInit(getUserMedia, audioElement) {
    getUserMedia({ audio: true }).then(function (stream) {
        mediaStream = stream;
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (e) => {
            chunks.push(e.data);
        }

        mediaRecorder.onstop = function (e) {
            let blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' })
            let audioURL = window.URL.createObjectURL(blob)
            chunks = [];

            audioElement.src = audioURL;
            audioElement.play();
        }
    }, function (err) {
        console.log('The following error occured: ' + err);
    })
}

function recorderStart() { mediaRecorder.start() }

function recorderStop() { mediaRecorder.stop() }

function recorderWipe() { mediaStream.stop() }
