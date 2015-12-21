# fps-profiler

> simple frame rate profiler for browsers

## usage

```html
<html>
  ...
  <!-- 1. include the scripts at the bottom of your body -->
  <script src="//raw.githubusercontent.com/bcherny/browser-profiler/master/index.js"></script>
  <script src="//raw.githubusercontent.com/bcherny/fps-profiler/master/index.js"></script>

  <!-- 2. set up the profiler -->
  <script>
    window.meanFrameTimeProfiler = new Profiler('MEAN_FRAME_TIMES')
    window.maxFrameTimeProfiler = new Profiler('MAX_FRAME_TIMES')
    window.myFrameTimeBench = new FrameTimeBench()
  </script>

  <!-- 3. profile an operation -->
  <script>
    window.myFrameTimeBench.start()
    doSomeOperation()
    window.myFrameTimeBench.stop()
    window.meanFrameTimeProfiler.done(window.myFrameTimeBench.getResults()[0].mean)
    window.maxFrameTimeProfiler.done(window.myFrameTimeBench.getResults()[0].max)
  </script>
</body>
</html>
```

after 20 runs, your results will be logged out to the console:

```text
MEAN_FRAME_TIMES completed 20 runs! {
  stats: {
    mean: 50.02,
    stdev: 4.65
  },
  times: [
    55.24,
    47.91,
    ...
  ]
}
MAX_FRAME_TIMES completed 20 runs! {
  stats: {
    mean: 81.67,
    stdev: 6.23
  },
  times: [
    83.20,
    79.15,
    ...
  ]
}
```

## tips for getting consistent profile results

- [ ] close devtools
- [ ] disable all Chrome extensions (or run in incognito and ensure that all extensions are disabled)
- [ ] ensure that your tab is running in its own window, without other tabs open (see why [here](https://www.chromium.org/developers/design-documents/compositor-thread-architecture))
- [ ] avoid interacting with your machine while the Profiler is running