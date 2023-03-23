//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
require("dotenv").config()
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { getAllCountries } = require("../api/src/routes/controllers.js")
// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  await getAllCountries()
  server.listen(process.env.PORT, () => {
    console.log('%s listening at', process.env.PORT ); // eslint-disable-line no-console
  });
});
