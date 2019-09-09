window.lib = (function () {

  var MIN = 1;
  var MAX = 1000;
  var LIVES = 10;
  var random = getRandomNumber(MIN, MAX);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  function checkCount() {

    --LIVES;

    LIVES <= 0 ? confirmNewGame() : start();
  };

  function confirmNewGame() {

    if (confirm('Попробовать ещё?')) {
      LIVES = 10;
      random = getRandomNumber(MIN, MAX);
      start();
    };
  };

  var start = function() {

    let x = prompt ('Введите число', '');

			if (x != null) {
				if (x > random) {
					alert ('Меньше! Осталось попыток: ' + (LIVES - 1));
					checkCount();
				} else if (x < random) {
					alert ('Больше! Осталось попыток: ' + (LIVES - 1));
					checkCount();
				} else if (!isNumeric(x)) {
					alert ('Введите число. Осталось попыток: ' + (LIVES - 1));
					checkCount();
				} else if (x == random) {
					alert ('Павильно');
					confirmNewGame();
				}
			};
  };

  return {
    start: start
  };

})();
