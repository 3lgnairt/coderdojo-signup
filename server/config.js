var express     = require('express');
var bodyParser  = require('body-parser');
var middle      = require('./middleware');

/*
 * Global env variables
*/
function config(app, express) {
  app.set('port', process.env.PORT || 5000);
  app.set('base url', process.env.URL || 'http://localhost');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(middle.cors);
  app.use(express.static(__dirname + '/../dist'));
  app.use(middle.logError);
  app.use(middle.handleError);

  app.passcodeRequired = process.env.PASSCODE_REQUIRED === 'true';
  app.maxBwNinjas = parseInt(process.env.MAX_BW_NINJAS) || 15;
  app.maxNonBwNinjas = parseInt(process.env.MAX_NON_BW_NINJAS) || 15;
  app.bwPasscode = process.env.BW_PASSCODE || 'bankwest';
  app.externalPasscode = process.env.EXTERNAL_PASSCODE || 'external';

}
//This comment is useless
function envConfig() {
    return {
        isGirlsDojo: process.env.GIRLS_DOJO === 'true',
        passcodeRequired: process.env.PASSCODE_REQUIRED === 'true',
        eventInfo: {
            name: process.env.EVENT_NAME || 'Coder Dojo Bankwest',
            date: process.env.EVENT_DATE || 'TBC',
            dateShort: process.env.EVENT_DATE_SHORT || 'TBC'
        }
    }
}

module.exports.envConfig = envConfig;
module.exports.config = config;
