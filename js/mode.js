import BaseError from './base';

// 过滤自身服务器上报时发生错误
const urlWhiteList = [
  '//api.b1anker.com/msg',
  '//api.b1anker.com/d.gif/',
  '//api.b1anker.com/form/push',
];

export default class AjaxError extends BaseError {
  constructor() {
    super('ajax');
  }

  start() {
    this.patch();
  }

  patch() {
    if (!XMLHttpRequest && !window.ActiveXObject) {
      return;
    }
    // patch
    const XHR = XMLHttpRequest || window.ActiveXObject;
    const open = XHR.prototype.open;
    let METHOD = '';
    let URL = '';
    try {
      XHR.prototype.open = function (method, url) {
        // 保存请求方法和请求链接
        METHOD = method;
        URL = url;
        open.call(this, method, url, true);
      };
    } catch (err) {
      console.log(err);
    }

    const send = XHR.prototype.send;
    const self = this;
    XHR.prototype.send = function (data = null) {
      // 获取刚刚暂存的请求链接
      const CURRENT_URL = URL;
      try {
        this.addEventListener('readystatechange', () => {
          if (this.readyState === 4) {
            if (this.status !== 200 && this.status !== 304) {
              // 不上报自身的报错，如上报服务器出错等
              if (urlWhiteList.some(url => CURRENT_URL.includes(url))) {
                return;
              }
              const name = this.statusText;
              const reponse = this.responseText;
              const url = this.responseURL;
              const status = this.status;
              const withCredentials = this.withCredentials;
              self.send({
                name,
                reponse,
                url,
                status,
                withCredentials,
                data,
                method: METHOD,
              });
            }
          }
        }, false);
        send.call(this, data);
      } catch (err) {
        console.log(err);
      }
    };
  }
}
