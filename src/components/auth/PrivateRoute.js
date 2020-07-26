import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Firebase from "../Firebase/Firebase";
import { FirebaseContext } from '../Firebase';

const getClaims = async () => {
    return (await Firebase.auth.currentUser
        .getIdTokenResult(true)
        .catch(err => console.log(err)))
        .claims;
}

export default class PrivateRoute extends Component {
    static contextType = FirebaseContext;

    constructor(props) {
        super(props);
        this.state = {
            claim: null,
        };
    }

    async componentDidMount() {
        const { claimKey } = this.props;
        const claim = await getClaims()
            .catch((e) => console.log(e));
        this.setState({ claim: claim[claimKey] });
    }

    render() {
        console.log(this.context)

        const { component: RouteComponent, ...rest } = this.props;
        const { claim } = this.state;

        if (claim === null) return "Loading screen";

        return (
            <Route
                {...rest} 
                render={ props => {
                    return claim ?
                    <RouteComponent {...props}/> : 
                    <Redirect to={"/"} />;
                }}
            />
        );
    }
}