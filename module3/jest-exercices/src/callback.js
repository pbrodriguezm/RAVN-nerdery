const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function fetchAPI(url, callback) {
  let req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.onreadystatechange = function (event) {
    if (req.readyState === 4) {
      if (req.status === 200) {
        callback(null, JSON.parse(req.responseText));
      } else {
        const error = new Error(`URL invalidate ${url}`);
        return callback(error, null);
      }
    }
  };

  req.send();
}

module.exports = fetchAPI;
