// file-utils.js
const fs = require('fs');
const path = require('path');

module.exports = {
  listDirectoryContents: (directoryPath) => {
    try {
      const files = fs.readdirSync(directoryPath);
      for (const file of files) {
        const fullPath = path.join(directoryPath, file);
        const stats = fs.statSync(fullPath);
        const type = stats.isDirectory() ? 'Directory' : 'File';
        console.log(`${type}: ${file}`);
      }
    } catch (err) {
      console.error('Error reading directory:', err);
    }
  },
};
