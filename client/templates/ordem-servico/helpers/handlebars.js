Template.registerHelper('pluralize', function(n, thing) {
  // Pluralizador bastante estúpido
  if (n === 1) {
    return '1 ' + thing;
  } else {
    return n + ' ' + thing + 's';
  }
});