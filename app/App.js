import localForage from 'localforage';
import React, { Component, Fragment } from 'react';
import { hydrate } from 'react-dom';
import Helmet from 'react-helmet/lib/Helmet';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { setAuthorizationToken } from './config/axios';
import { routes } from './Routes';
import ReactGA from 'react-ga';
import configureStore from './store/configureStore';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toolbox/lib/input/theme.css';
// import 'shards-ui/dist/css/shards.min.css';
// import registerServiceWorker from './registerServiceWorker';

// Import CSS reset and Global Styles
import './styles/global-styles';

/* if (!constants.isProd) {
    require('preact/devtools');
} */
const store = configureStore(window.__REDUX_STATE__);

class App extends Component {
    constructor(appProps) {
        super(appProps);
        this.state = { rehydrated: false };
    }

    componentWillMount() {
        persistStore(
            store,
            {
                storage: localForage,
                blacklist: [
                    "utils"
                  ]
            },
            () => {
                //const { user } = store.getState();
                //setAuthorizationToken(user);
                console.log(store.getState())
                this.setState({
                    rehydrated: true,
                });
                                
            },
        );
    }
    
  componentDidMount() {
    //ReactGA.initialize("UA-146171272-3");
  }

    render() {
        if (!this.state.rehydrated) return null;
        return (
            <Fragment>
                <Helmet>
                    <title>Nurture Labs</title>
                </Helmet>
                <Provider store={store}>{routes()}</Provider>
            </Fragment>
        );
    }
}

hydrate(<App />, document.getElementById('app'));

// registerServiceWorker();
