import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/Actions';

class ReduxDemoWithMid extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 如果已经有用户数据，即服务端已经请求到用户数据，客户端不再发起请求
        if(!this.props.userList) {
            this.props.fetchUserList();
        }
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

const exportReduxDemoWithMid = connect(mapStateToProps, mapDispatchToProps)(ReduxDemoWithMid);

// 给组件绑定接口请求方法，用于服务端请求接口注入redux
exportReduxDemoWithMid.ssrGetData = (store) => {
    return store.dispatch(actions.fetchUserList());
}

export default exportReduxDemoWithMid;