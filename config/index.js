require('dotenv').config({path:__dirname+'/../.env'});

let CONFIG = {};

CONFIG.port = process.env.PORT_APP;
CONFIG.base_url_app = process.env.BASE_URL_APP;
CONFIG.wakatime_key = process.env.WAKATIME_KEY;

module.exports = CONFIG;