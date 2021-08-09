interface PARAMS {
  url: string,
  params: any,
  callback: string,
}

function jsonp(obj: PARAMS) {
  // var {url, params, callback} = obj;
  // return new Promise((resolve, reject) => {
  //   let script = document.createElement('script');
  //   window[callback] = function(data:any) {
  //     resolve(data);
  //     document.body.removeChild(script);
  //   }
  //   params = {...params, callback};
  //   let arrs = [];
  //   for(let key in params) {
  //     arrs.push(`${key}=${params[key]}`)
  //   }
  //   script.src=`${url}?${arrs.join('&')}`;
  //   document.body.appendChild(script);
  // })
}

export default jsonp;