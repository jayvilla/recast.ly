// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" onChange={} type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  debounceYoutube () {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, maxResults: 5, type: 'video', videoembeddable: true, q: this.state.value}, this.props.changeVideoList);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    _.debounce(this.debounceYoutube.bind(this), 500)();
  }
  render () {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" value={this.state.value} onChange={this.handleChange.bind(this)} type="text" />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
