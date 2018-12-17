import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage, EditorPage, NotFoundPage, BlogPage } from 'pages';
const App = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/blog/:category?" component={BlogPage}/>
                <Route path="/about" component={BlogPage}/>
                <Route path="/search/:keyword?" component={BlogPage}/>
                <Route path="/post/:id" component={BlogPage}/>
                <Route path="/tag/:tag" component={BlogPage}/>
                <Route path="/blogEditor/:id?" component={EditorPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
}

export default App;