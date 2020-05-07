import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Router, Route} from 'react-router';
 import Notification from './components/Notification';
 import Task1 from './components/Task1';
 import Settings from './components/Settings';
// import MenuBar from './MenuBar';
// import Navi from './components/Navi';

ReactDOM.render((
  <BrowserRouter>
  <div>
    <Route exact path='/' component={App}/>
    <Route path='/components' component={Settings}/>
    <Route path='/components' component={Notification} />
    <Route path='/components' component={Task1} />
  </div>
  </BrowserRouter>) ,
  document.getElementById('root')
);

//  <Provider store={store}>
//     <Router history={browserHistory}>
//         <Route path="/" component={App}> 
//             {/* <IndexRoute component={MenuBar} /> */}
//             <Route path="/components" component={Settings}/>
//             <Route path="/components" component={Notification}/>
//             <Route path="/components" component={Task1} />
//         </Route>
        
//     </Router>
// </Provider>, document.getElementById('root')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

