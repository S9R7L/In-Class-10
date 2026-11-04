let sound
// adding global slider
let slider

async function setup() {
  // set the size of the canvas to the available space
  createCanvas(windowWidth, windowHeight);

  // use the p5 DOM to create paragraph
  // this is added to webpage, can be highlighted
  // has css styling applied
  let p = createP('added this paragraph HTML with p5')
  p.center()
  p.style('background-color', 'red')

  sound = await loadSound('break.mp3')
  sound.play()
  sound.loop()

  slider = createSlider(0, 10, 1, 0.5)
  slider.position(20, 40)
  slider.changed(newSliderValue)
}

function draw() {
  background(220);

  // this is drawn on the canvas, cannot be highlighted
  // also does not have the css styling on the <p>
  text('this is p5 text', 20, 20)
}

// under draw function
function newSliderValue() {
  print(slider.value())
  sound.rate(slider.value())
}