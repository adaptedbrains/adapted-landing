import React from 'react';
import { browserHistory, Router } from 'react-router';
import Main from './components/Main';
import ReactGA from 'react-ga';

// const store = configureStore(window.__REDUX_STATE__);

function errorLoading(err) {
    // console.error("Dynamic page loading failed", err);
}

function loadRoute(cb) {
    return module => cb(null, module.default);
}

function gaUpdateOnRouteChange(previousRoute, nextRoute) {
    if (previousRoute.location.pathname !== nextRoute.location.pathname) {
    //   ReactGA.set({ page: base_location.concat(nextRoute.location.pathname) }); // Update the user's current page
    //   ReactGA.pageview(nextRoute.location.pathname); // Record a pageview for the given page
    }
  }
  

export function getRoutes(store) {
    return {
        path: '/', 
        component: Main,
        onChange: (previousRoute, nextRoute) => {
            handleRouteChange(previousRoute, nextRoute, store);
            gaUpdateOnRouteChange(previousRoute, nextRoute);
        },
        indexRoute: {
            getComponent(location, cb) {
                cb(null, require('./containers/Dashboard').default);
            },
        },
        childRoutes: [
            {
                path: 'nurturelabs',
                getComponent(location, cb) {
                    cb(null, require('./containers/redirect').default);
                },
            },
        ],
    };
}

function handleRouteChange(previousRoute, nextRoute, store) {}

function handlePaymentRouteChange(previousRoute, nextRoute, store) {}

export function routes(props = {}) {
    const history = browserHistory;
    // if (props.store) {
    // history = syncHistoryWithStore(browserHistory, props.store);
    // }
    const routes = getRoutes(props.store);
    // ;
    return (
        <Router history={browserHistory} routes={routes} onUpdate={(k) =>{
            window.scrollTo(0, 0)

        }} />
    );
}
