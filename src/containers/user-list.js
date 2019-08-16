import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {requestGetUser, requestGetUserList} from "../actions/user-actions";


class UserList extends React.Component {
    componentDidMount() {
        this.props.requestGetUserList();
    }

    showList(users) {
        return users.map((user) => {
            return (
                <li onClick={() => {this.props.selectUser(user)}} key={user.id}>{user.name}</li>
            );
        })
    }

    render() {
        const {data = []} = this.props.users;
        return (
            <ol>
                {this.showList(data)}
            </ol>
        )
    };
}

const mapStateToProps = state => ({ users: state.user });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestGetUserList, selectUser: requestGetUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
