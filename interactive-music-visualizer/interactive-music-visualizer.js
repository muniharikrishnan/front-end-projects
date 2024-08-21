const fileInput = document.getElementById('fileInput');
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let analyser, source;

fileInput.addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
        const audio = document.createElement('audio');
        audio.src = URL.createObjectURL(file);
        audio.controls = true;
        document.body.appendChild(audio);

        const reader = new FileReader();
        reader.onload = function() {
            audioContext.decodeAudioData(reader.result, function(buffer) {
                if (source) {
                    source.stop();
                }
                source = audioContext.createBufferSource();
                source.buffer = buffer;
                analyser = audioContext.createAnalyser();
                source.connect(analyser);
                analyser.connect(audioContext.destination);
                source.start();
                visualize();
            });
        };
        reader.readAsArrayBuffer(file);
    }
}

function visualize() {
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);
    
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const barWidth = (width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    function draw() {
        requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);
        ctx.fillStyle = '#111';
        ctx.fillRect(0, 0, width, height);
        
        ctx.fillStyle = '#0f0';
        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];
            ctx.fillRect(x, height - barHeight / 2, barWidth, barHeight / 2);
            x += barWidth + 1;
        }
        x = 0;
    }

    draw();
}
