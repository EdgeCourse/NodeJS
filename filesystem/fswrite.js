const fs = require('fs');

function writeLog(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp}: ${message}\n`;
  const logFilePath = './my_log.txt'; 

  // Asynchronous version
  fs.writeFile(logFilePath, logEntry, { flag: 'a' }, (err) => { // 'a' = append
    if (err) {
      console.error('Error writing to log:', err);
    } else {
      console.log('Log entry written successfully.');
    }
  });


}

// Example usage
writeLog('Application started.');
writeLog('another line.');

