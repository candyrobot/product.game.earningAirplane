/**
 *
    - {int} speed
    - {int} earningPower
    - earn()
    - runAndContinue()
    - `_run()`
    - stop()
    - merge(anotherPlane)

 */
export default class Plane {

  constructor(
    arg,
    option = {}
  ) {
    this._mile = 0;
    this._lv = 0;
    this._speed = 0;
    this._earningPower = 0;

    this._timer = null;
  }

  runAndContinue() {
    let _run = function() {};
    let _eventName = '';

    this._timer = setInterval(()=> {
      this.run();
      _run(this._mile);
    }, 100);

    return { on: function(eventName, fn) { _run = fn; _eventName = eventName } };
  }

  run() {
    this._mile++;
    console.log(this._mile);
  }

  stop() {
    clearInterval(this._timer);
  }

}
