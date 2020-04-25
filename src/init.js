import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as central from './store/store'
import {Router,Route} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './notify.css'
toast.configure()


export default (App)=>{

     ReactDOM.render(
            <Provider store={central.store}>
                
                    <Router history={central.history}>
                    
                      <Route component={App} />
                   
                    </Router>
                
            </Provider>, 
            document.getElementById('root')
        );

}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
