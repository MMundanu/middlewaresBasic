const fs = require('fs');
const path = require('path');


module.exports = (req, res, next) => {
    fs.appendFileSync(path.join(__dirname, '..', 'logs', 'userLogs.txt'), '\nel usuario entró a la ruta ' + req.url, 'utf-8');
    next()
}