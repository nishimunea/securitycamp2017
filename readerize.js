(function() {
  var uri = {
    spec: location.href,
    host: location.host,
    prePath: location.protocol + '//' + location.host,
    scheme: location.protocol.substr(0, location.protocol.indexOf(':')),
    pathBase: location.protocol + '//' + location.host + location.pathname.substr(0, location.pathname.lastIndexOf('/') + 1)
  };
  return new Readability(uri, document.cloneNode(true)).parse();
})();
