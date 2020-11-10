import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import Home from './src/pages/Home';

const app = express();
// renderToString 不会对事件做处理
const content = renderToString(<Home />);

app.get('/', function (req, res) {
   res.send(
   `
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
   );
})
app.use(express.static('ssr'));
app.listen(3001, () => {
  console.log('listen:3001')
})