function FrameTimeBench () {
  this.state = {
    active: false,
    lastTime: null,
    times: [],
    results: []
  }
}

FrameTimeBench.prototype.frame = function () {
  if (this.state.lastTime) {
    this.state.times.push(
      Math.round(window.performance.now() - this.state.lastTime)
    )
  }
  this.state.lastTime = window.performance.now()
  if (this.state.active) {
    window.requestAnimationFrame(this.frame.bind(this))
  }
}

FrameTimeBench.prototype.start = function () {
  this.state.active = true
  this.frame()
}

FrameTimeBench.prototype.stop = function () {
  this.state.active = false
  this.state.results.push({
    mean: window.Profiler.mean(this.state.times),
    stddev: window.Profiler.sampleStdev(this.state.times),
    max: Math.max.apply(Math, this.state.times),
    min: Math.min.apply(Math, this.state.times),
    times: this.state.times
  })
}

FrameTimeBench.prototype.getResults = function () {
  return this.state.results
}