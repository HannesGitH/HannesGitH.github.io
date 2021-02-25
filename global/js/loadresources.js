function loadRes(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(`failed to load ${ url } : ${request.statusText}`));
      }
    };
    request.onerror = function() {
        reject(Error('Network-Error'));
    };
    request.send();
  });
}