// TODO: Render the `App` component to the DOM
ReactDOM.render(<App searchYouTube={window.searchYouTube} searchYouTubeViews={window.searchYouTubeViews}/>, document.getElementById('app'));

// class Home extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//   }

//   render () {
//     return (<App searchYouTube={window.searchYouTube} searchYouTubeViews={window.searchYouTubeViews}/>);
//   }
// }
// ReactDOM.render((
//   <ReactRouter.Router history={ReactRouter.browserHistory}>
//     <ReactRouter.Route path="/" component={Home} >
//       <ReactRouter.DefaultRoute handler={Home}/>
//       <ReactRouter.NotFoundRoute handler={Home}/>
//     </ReactRouter.Route>
//   </ReactRouter.Router>)
// , document.getElementById('app'));
