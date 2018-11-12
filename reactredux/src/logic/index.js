import Plane from './object/Plane';
(function main() {
  // var el;
  // let plane = new Plane('1', el);
  let plane = new Plane('1');
  // plane.el();
  plane.runAndContinue().on('run', function(mile) {
    if(mile%15 === 0) {
      console.log('🌟');
    }
  });
})();
