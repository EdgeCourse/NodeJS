// worker.js (Worker Thread)
const { parentPort } = require('worker_threads');

parentPort.on('message', (message) => {
  if (message.task === 'calculate') {
    const sum = message.data.reduce((acc, num) => acc + num, 0);
    parentPort.postMessage(sum);
  }
});