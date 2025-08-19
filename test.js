window.onload = init;
var context;
var bufferLoader;

function init() {
  context = new AudioContext();

  bufferLoader = new BufferLoader(
    context, 
    ["test.mp3"], 
    finishedLoading
  );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
  var source = context.createBufferSource();
  source.buffer = bufferList[0];
  source.connect(context.destination);
  source.noteOn(0);
}
