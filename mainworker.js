// main.js (Main Thread)
const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker('./worker.js');

  worker.postMessage({ task: 'calculate', data: [1, 2, 3] });

  worker.on('message', (result) => {
    console.log('Result:', result); // Output: Result: 6
  });
}


