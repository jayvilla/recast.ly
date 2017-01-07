var searchYouTube = (options, callback) => {
  // TODO

  options.part = 'snippet';
  options.type = 'video';
  options.videoembeddable = true;
  // $.ajax ({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   method: 'GET',
  //   data: options,
  //   contentType: 'application/json',
  //   success: function (data) {
  //     callback(data.items);
  //   },
  //   error: function(data) {
  //     console.log(data);
  //   }

  // });
  var searchParams = new URLSearchParams();
  for (let x in options) {
    searchParams.append(x, options[x]);
  }
  var myInit = {
    method: 'GET',
    headers: (new Headers()).append('Content-Type', 'application/json')
  };
  fetch('https://www.googleapis.com/youtube/v3/search?' + searchParams.toString(), myInit).then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        callback(data.items);
      });
    } else {
      console.log('Network response was not ok.');
    }
  });
};


var searchYouTubeViews = (options, callback) => {
  options.part = 'statistics';
  var searchParams = new URLSearchParams();
  for (let x in options) {
    searchParams.append(x, options[x]);
  }
  var myInit = {
    method: 'GET',
    headers: (new Headers()).append('Content-Type', 'application/json')
  };
  fetch('https://www.googleapis.com/youtube/v3/videos?' + searchParams.toString(), myInit).then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        callback(data.items[0].statistics);
      });
    } else {
      console.log('Network response was not ok.');
    }
  });
};

window.searchYouTube = searchYouTube;
window.searchYouTubeViews = searchYouTubeViews;
