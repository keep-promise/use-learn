const fs = require('fs');
const path = require('path');

const env = process.env;

const prod = env.NODE_ENV === 'production';
const appPath = fs.realpathSync(process.cwd());
module.exports = {
  env,
  prod,
  appPath,
  dProtocol: 'https',
  dHost: env.HOST || 'localhost',
  dPort: env.PORT != null ? Number(env.PORT) : 8080,
  demoPath: path.resolve(appPath, './demo')
};
