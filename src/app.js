import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './Redux/store/index';
import {AppHeader} from './appHeader';
import {AppContent} from './appContent';
import {AppFooter} from './appFooter';

export class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <AppHeader />
                <AppContent />
                <AppFooter />
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('.wrapper')
)