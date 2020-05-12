import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import globalStyles from "../styles/global-styles";

const fetch = require("node-fetch");

var _ = require("underscore");

// const httpLink = createHttpLink({
//     uri: 'http://13.233.142.4/',
//     headers:{
//         "Session-Token": 'lsjdhfGHDHKUYWEBNBMkuLJHKSDGYUIEBKJHkjhkjhDSBDKBK'
//     },
//     fetch:fetch
//   })

// const client = new ApolloClient({
//   link: httpLink,
//   cache: new InMemoryCache()
// })

class Main extends Component {
    constructor(props) {
        super(props);
        this.deferredPrompt = null;
        this.state = {
            currentRoute: "",
            showInstallPrompt: false
        };
    }

    componentDidMount() {
        window &&
            window.addEventListener("beforeinstallprompt", e => {
                // Prevent the mini-infobar from appearing on mobile
                e.preventDefault();
                // Stash the event so it can be triggered later.
                global.deferredPrompt = e;
                // Update UI notify the user they can install the PWA
                this.setState({
                    showInstallPrompt: true
                });
            });
    }

    componentWillUnmount() {}

    renderChildrens() {
        const { location } = this.props;
        const that = this;
        let width = "80%";
        let marginLeft = "20%";
        let position = "fixed";
        if (location && location.pathname == "/") {
            width = "100%";
            marginLeft = "0%";
            position = "relative";
        }
        return React.Children.map(this.props.children, child => {
            const clonedProps = {
                ...child.props
            };
            return (
                <div style={{ overflow: "hidden" }}>
                    {React.cloneElement(child, clonedProps)}
                </div>
            );
        });
    }

    render() {
        globalStyles();
       // console.log(this.props);
        return (
            <div>
                {this.renderChildrens()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        isMobile: state.utils && state.utils.is_mobile,
        generalData: state.generalData,
    };
}

export default connect(mapStateToProps, actions)(Main);
