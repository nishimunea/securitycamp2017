document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.executeScript(null, {file: 'readerize.js'}, function(results) {
    var view = document.getElementById('format').innerHTML;
    view = view.replace( /%TITLE%/g , results[0]['title']) ;
    view = view.replace( /%CONTENT%/g , results[0]['content']) ;
    document.body.innerHTML = view;
  });
});
