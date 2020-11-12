import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/Actions';

class ReduxDemoWithMid extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserList();
    }

    render() {
        const {userList} = this.props;
        return (
            <div>
                <h1>redux with middleWare</h1>
                {userList && userList.map((user) => {
                    return <div key={user.name}>
                        <h2>name:{user.name}</h2>
                        <h2>age:{user.age}</h2>
                        <h2>male:{user.male}</h2>
                    </div>
                })}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserList: bindActionCreators(actions.fetchUserList, dispatch)
    }
}

const mapStateToProps = state => {
    return {
        userList: state.reduxDemoWithMid.userList
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemoWithMid);