$('button').hover(
  function() {
    $(this).addClass('hover');
  },
  function() {
    $(this).removeClass('hover');
  }
);
var quote = "";
var author = "";

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "n99jWCnXqRmshf75alI4HHvmja42p1l21RFjsnSVMIw2BUPQlT"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
    success: function(response) {
      var respond = JSON.parse(response);
      quote = respond.quote;
      author = respond.author;
      $(".quoteHere").text(quote);
      $(".author").text(author);
    }
  });
}

$(".getQuote").click(function() {
  getQuote();
});
getQuote();
$('.twitter').on('click', function() {
  makeTwitterPage('https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" ' + author));
});
function makeTwitterPage(url){
  window.open(url, 'Share', 'width=700, height=500, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=1');
}