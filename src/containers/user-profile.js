import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {requestGetUser} from "../actions/user-actions";

class UserProfile extends React.Component {

    showUserDetails(user) {
        return (
            <div>
                <h3>{user.name}</h3>
                <p>Website <i>{user.address && user.address.city}</i>, email is: <i>{user.email}</i></p>
            </div>
        );
    }

    render() {
        const {data = []} = this.props.activeUser;
        return (
            <div>
                {this.showUserDetails(data)}
            </div>
        );
    };
}

const mapStateToProps = state => ({activeUser: state.activeUser});

const mapDispatchToProps = dispatch =>
    bindActionCreators({requestGetUser}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
