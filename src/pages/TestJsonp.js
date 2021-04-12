import React from 'react';
import jsonp from '../utils/jsonp';

class TestJsonp extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount() {
        jsonp({
            url: 'http://localhost:3000/say',
            params: {wd: 'hello server'},
            callback: 'show'
        }).then((data) => {
            console.log(data);
            this.setState({
                jsonpRes: data
            })
        })
    }
    render() {
        return (
            <div>
                <h1>test jsonp</h1>
                <p>{this.state.jsonpRes}</p>
            </div>
        )
    }
}

export default TestJsonp;