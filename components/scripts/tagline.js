var $, fill;

$ = require('jquery');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('The Most Ccreative minds in Art');

fill;
