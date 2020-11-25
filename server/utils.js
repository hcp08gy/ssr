import React from 'react';
import Routes from '../routes';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import getStore from '../redux/Store';

export default function render(req) {
    // renderToString 不会对事件做处理
    // 构建服务端的路由
    const content = renderToString(
      <Provider store={getStore()}>
        <StaticRouter location={req.path}>
          {Routes}
        </StaticRouter>
      </Provider>

    );
    return `
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="index.js"></script>
    </html>
   `
}