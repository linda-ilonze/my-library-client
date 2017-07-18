import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import './index.css';
import App from './App';
import Login from './components/Login/Login';
import Register from './components/Register';
import AddBook from './components/Book/AddBook';
import BookDetails from './components/Book/BookDetails';

ReactDOM.render(   
    <Provider store={store}>
           <BrowserRouter> 
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path="/addbook" component={AddBook} />
                <Route path="/book" component={BookDetails} />
            </Switch>
        </BrowserRouter> 
       </Provider>

    , document.getElementById('root'));
registerServiceWorker();
