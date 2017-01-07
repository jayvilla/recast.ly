class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentVideo: window.fakeVideoData[0],
      videoList: window.fakeVideoData,
      initialLoad: true
    };
    console.log(window.YOUTUBE_API_KEY);
    props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      q: 'react',
      maxResults: 5,
      type: 'video'
    }, this.updateVideoList.bind(this));
  }

  updateVideoList(videoList) {
    this.setState({videoList});
    if (this.state.initialLoad) {
      this.setState({initialLoad: false, currentVideo: videoList[0]});
    }
  }
  onVideoClick(currentVideo) {
    this.setState({currentVideo});
  }

  render() {
    return (
      <div>
        <Nav changeVideoList={this.updateVideoList.bind(this)} searchYouTube={this.props.searchYouTube}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList changeVideo={this.onVideoClick.bind(this)} videos={this.state.videoList}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
