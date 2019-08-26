function convertMonth (month) {
  if (month.search('ь') != -1) {
    return month = month.replace('ь', 'я');
  } else {
    return month = month + 'а';
  };
};

function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
    return number + titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
};

function showDate() {
  
  var date = new Date();

  var year = date.getFullYear() + ' года,';

  var month = convertMonth(date.toLocaleString('ru', { month: 'long' }));

  var weekday = date.toLocaleString('ru', { weekday: 'long' });

  var day = date.getDate();

  var hours = declOfNum(date.getHours(), [' час', ' часа', ' часов']);

  var minutes = declOfNum(date.getMinutes(), [' минута', ' минуты', ' минут']);

  var seconds = declOfNum(date.getSeconds(), [' секунда', ' секунды', ' секунд']);

  console.log('Сегодня ' + day + ' ' + month + ' ' + year + ' '
  + weekday + ', ' + hours + ' ' + minutes + ' ' + seconds);
};

setInterval(showDate, 1000);
