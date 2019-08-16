import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {requestGetUser} from "../actions/user-actions";

class UserProfile extends React.Component {
    componentDidMount() {
        this.props.requestGetUser();
    }

    person = (x, i) =>
        <div key={x.id.value}>
            <h1>
                {x.gender}
            </h1>
            <h1>
                {x.name.first}
            </h1>
            <h1>
                {x.name.last}
            </h1>
            <img src={x.picture.medium} />
        </div>;

    render() {
        const { results = [] } = this.props.activeUser;
        return results.length
            ? <h1>
                {results.map(this.person)}
            </h1>
            : <h1>loading...</h1>;
    }
}

const mapStateToProps = state => ({ activeUser: state.user });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestGetUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
