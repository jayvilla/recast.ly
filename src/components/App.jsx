class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentVideo: window.fakeVideoData[0],
      videoList: window.fakeVideoData,
      initialLoad: true,
      autoplay: false,
      statistics: {}
    };

  }

  componentWillMount() {
    this.props.searchYouTube({
      key: window.YOUTUBE_API_KEY,
      q: 'react',
      maxResults: 5,
    }, this.updateVideoList.bind(this));
  }
  switchAutoplay () {
    this.setState({autoplay: !this.state.autoplay});
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.autoplay !== nextState.autoplay) {
      return false;
    }
    return true;
  }

  updateCurrentVideoStats(statistics) {
    this.setState({statistics});
  }

  updateVideoList(videoList) {
    this.setState({videoList});
    if (this.state.initialLoad) {
      this.setState({initialLoad: false, currentVideo: videoList[0]});
      this.props.searchYouTubeViews({
        key: window.YOUTUBE_API_KEY,
        id: this.state.currentVideo.id.videoId,
      }, this.updateCurrentVideoStats.bind(this));
    }
  }
  onVideoClick(currentVideo) {
    this.setState({currentVideo});
    this.props.searchYouTubeViews({
      key: window.YOUTUBE_API_KEY,
      id: this.state.currentVideo.id.videoId,
    }, this.updateCurrentVideoStats.bind(this));
  }

  render() {
    return (
      <div>
        <Nav changeVideoList={this.updateVideoList.bind(this)} searchYouTube={this.props.searchYouTube}/>
        <div className="col-md-7">
          <VideoPlayer autoplay={this.state.autoplay} statistics={this.state.statistics} video={this.state.currentVideo}/>
        </div>
        <label>
          Autoplay 
          <input onChange={this.switchAutoplay.bind(this)} type="checkbox" />
          <div />
        </label>
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
