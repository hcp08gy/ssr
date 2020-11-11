// import _ from 'lodash';

// function component() {
//   var element = document.createElement('div');
//   element.innerHTML = _.join(['Hello', 'webpack'], '');
//   return element;
// }

// document.body.appendChild(component());

// function getComponent() {
//     // 动态导入
//     return import('lodash').then(({ default: _ }) => {
//         const element = document.createElement('div');
   
//         element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   
//         return element;
   
//     }).catch(error => 'An error occurred while loading the component');
// }

// getComponent().then(component => {
//     document.body.appendChild(component);
// })

// 使用async函数实现，与上边的动态导入一致。
// async function getComponent() {
//     const { default: _ } = await import('lodash');

//     const element = document.createElement('div');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
// }

// getComponent().then(component => {
//     document.body.appendChild(component);
// })

import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {Routes}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);