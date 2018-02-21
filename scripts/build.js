const exec = require("child_process").exec;

process.chdir('front_end');
return exec('npm install & npm run build');