import React from 'react';
import express from 'express';
import { render } from './utils';

const app = express();

app.use(express.static('ssr'));

app.get('*', function (req, res) {
   res.send(render(req));
})

app.listen(3001, () => {
  console.log('listen:3001')
})