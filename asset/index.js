// UI Elements
var button = document.getElementById('button');
var player = document.getElementById('player');

var state = 'standby';
var blob;
var chunks = [];

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        var mediaRecorder = new MediaRecorder(stream);

        button.onclick = function () {
            switch (state) {
                case 'standby':
                    mediaRecorder.start();

                    button.innerHTML = 'Stop';
                    state = 'recording';
                    break;
                case 'recording':
                    mediaRecorder.stop();

                    button.innerHTML = '...';
                    state = 'resounding';
                    break;
            }
        }

        player.addEventListener('ended', function () {
            button.innerHTML = 'Record';
            state = 'standby';
        });

        mediaRecorder.onstop = function (e) {
            resound();
        }

        mediaRecorder.ondataavailable = function (e) {
            chunks.push(e.data);
        }
    }, function (err) {
        console.log('The following error occured: ' + err);
    });

} else {
    console.log('getUserMedia not supported on your browser!');
}

function resound() {
    blob = new Blob(chunks, { 'type': 'audio/ogg; codecs=opus' });
    var audioURL = window.URL.createObjectURL(blob);

    chunks = [];

    player.src = audioURL;
    player.play();
}
