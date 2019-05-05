const request = require('request');

request({
  method: 'POST',
  url: 'https://api.weixin.qq.com/wxa/getwxacode?access_token=7_tysFf_Jh8bAWAYzE0mqaLl35Y0Gcmgidskxc0QMW7W2E7_uAHwXbrnHcrSLOcdsnFNk2bBgb-O9Am-h5uJQwbfbQTaNte1EMMRukUffu2OfrGHE43dWlVgWKTC1lyqG9GEkeT61cp64fPS2KCLXaAAAJSE',
  headers: {
    'content-type': 'application/json'
  },
  data: {
    "path": "pages/channel/channel"
  }
}, (err, res, body) => {
  console.log(err, res, body)
})