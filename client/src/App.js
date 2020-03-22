import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import Checklist from './components/Checklist';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap';

import {Provider} from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <AppNavbar/>
                    <row>
                        <col-sm-6 />
                        <div className="paws-logo">
                            <img src={
                                    require("../src/assets/paws-logo.png")
                                }
                                width="50%"
                                alt="paws-logo"/>
                        </div>
                    </row>
                    <Container>
                        <row/>
                        <col-sm-6/>
                        <ItemModal/>
                        <Checklist/>
                    </Container>
                </div>
                <Footer/>
            </Provider>
        );
    }
}
export default App;
