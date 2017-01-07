var searchYouTube = (options, callback) => {
  // TODO

  options.part = 'snippet';
  $.ajax ({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: options,
    contentType: 'application/json',
    success: function (data) {
      callback(data.items);
    },
    error: function(data) {
      console.log(data);
    }

  });
};

window.searchYouTube = searchYouTube;
