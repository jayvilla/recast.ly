var searchYouTube = (options, callback) => {
  // TODO
  // var queryString = '?';
  // for (var x in options) {
  //   queryString = queryString + x + '=' + options[x] + '&';
  // }
  // queryString = queryString.substring(0, queryString.length - 1);
  // queryString = 'https://www.googleapis.com/youtube/v3/search' + queryString;
  // console.log(queryString);
  options.part = 'snippet';
  $.ajax ({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    method: 'GET',
    data: options,
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
      callback(data);
    },
    error: function(data) {
      console.log('error data');
      console.log(data);
    }

  });
};

window.searchYouTube = searchYouTube;
