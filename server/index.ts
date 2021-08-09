import express from 'express';
import getStore from '../redux';
import routes from '../routes';
import { matchRoutes, RouteConfig } from 'react-router-config';
import render from './utils';

const app = express();

app.use(express.static('serverServiceRender'));

app.get('*', function (req, res) {
  const store = getStore();

  //调用matchRoutes用来匹配当前路由(支持多级路由)
  const matchedRoutes = matchRoutes(routes, req.path);
  const promises:any = [];

  matchedRoutes.forEach((item:any) => {
    console.log({xxxxxxxxxxxx3: item.route});
    if(item.route.ssrGetData) {
      promises.push(item.route.ssrGetData(store))
    }
  })
  Promise.all(promises).then(() => {
    //此时该有的数据都已经到store里面去了
    //执行渲染的过程(res.send操作)
    res.send(render(store, req));
  });
})

app.listen(3001, () => {
  console.log('listen:3001')
})