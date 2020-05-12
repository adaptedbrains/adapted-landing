//@flow

import React from "react";
import { browserHistory } from "react-router";



class redirect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dashboardList: [],
            loader: true
        };
    }
    componentWillReceiveProps() {}

    componentWillUnmount() {}

    componentDidMount() {
        browserHistory.push({
            pathname: "/"
        });
        console.log("mounted");
    }

    render() {
        return null;
    }
}

export default redirect;
