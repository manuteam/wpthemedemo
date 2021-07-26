import * as React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './templates/home';
import Documentation from "./templates/documentation";
import Pricing from "./templates/pricing";
import Post from './templates/post';
import Page from './templates/page';

const App = () => (
    <div id="page-inner" className="App">
        <Switch>
            <Route exact path={rootSettings.path} component={Home}/>
            <Route exact path={rootSettings.path + 'documentation'} component={Documentation}/>
            <Route exact path={rootSettings.path + 'pricing'} component={Pricing}/>
            <Route exact path={rootSettings.path + 'posts/:slug'} component={Post}/>
            <Route exact path={rootSettings.path + ':slug'} component={Page}/>
        </Switch>
    </div>
);

// Routes
const routes = (
    <Router>
        <Route path="/" component={App}/>
    </Router>
);

render(
    (routes), document.getElementById('root')
);

export default function Main() {
    return (
        routes
    )
}