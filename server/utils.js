import React from 'react';
import routes from '../routes';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

export default function render(store, req) {
  // renderToString 不会对事件做处理
    // 构建服务端的路由
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path}>
          <div>
            {routes.map((route) => {
              return <Route {...route} />
            })}
          </div>
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
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script src="index.js"></script>
    </html>
    `
}