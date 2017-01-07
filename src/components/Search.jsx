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
  }
  onSearchChange() {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, maxResults: 5}, this.props.changeVideoList);
  }
  render () {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" onChange={this.onSearchChange.bind(this)} type="text" />
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
