import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/Actions';

class ReduxDemo extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     count: store.getState()
        // }
    }

    componentDidMount() {
        // store.subscribe() 方法是用来监听 store 中 state 值的，如果 state 被改变，它就会被触发，所以这个方法接收的是一个函数。
        // store.subscribe(() => this.setState({
        //     count: store.getState()
        // }));
    }

    onIncrement = () => {
        // store.dispatch(actions.increment());
        this.props.dispatch(actions.increment());
    }

    onDecrement = () => {
        // store.dispatch(actions.decrement());
        this.props.dispatch(actions.decrement());
    }

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <h1>{this.props.hello}</h1>
                <div onClick={this.onIncrement}>
                    add
                </div>
                <div onClick={this.onDecrement}>
                    reduce
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.reduxDemoReducer,
        hello: state.reduxDemoReducer2
    };
}

export default connect(mapStateToProps)(ReduxDemo);