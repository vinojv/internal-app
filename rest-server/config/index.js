var path = require('path');
var rootDir = process.cwd();

module.exports = {
    "rootPath": rootDir,

	"server": {
        "host": "0.0.0.0",
        "port": 5000,
        "baseURL": "/api"
    },

    "datasource": {
        "type": "MongoDB",
        "location": "localhost",
        "port": "27017",
        "database": "RZTManager"
    },

    "models": {
        "path": path.join(rootDir, 'models')
    },

    "controllers": {
        "path": path.join(rootDir, 'controllers')
    },

    "session": {
        "secret": 'razorthink-deployer',
        "collection": 'sessions'
    }

};
