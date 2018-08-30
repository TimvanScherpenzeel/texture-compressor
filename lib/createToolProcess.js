// Native
const { spawn } = require('child_process');

const createToolProcess = (toolPath, toolFlags = [], toolDirectoryPath) => new Promise((resolve, reject) => {
    console.log(`Using flags: ${toolFlags}`);

    const child = spawn(toolPath, toolFlags, {
      env: {
        PATH: toolDirectoryPath || process.env,
      },
    });

    child.stdout.on('data', data => console.log(`Output: ${data}`));

    child.once('exit', (code) => {
      if (code !== 0) {
        console.error(`Compression tool exited with error code ${code}`);
        reject();
      } else {
        resolve();
      }
    });
  });

module.exports = createToolProcess;
