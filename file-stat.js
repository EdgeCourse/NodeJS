const fs = require('fs');
const path = require('path'); // Add this line to require the path module

function analyzeFileInfo(filePath) {
  try {
    const stats = fs.statSync(filePath); // Get file statistics

    console.log('File Information:');
    console.log(`  File Name: ${path.basename(filePath)}`);
    console.log(`  File Size: ${stats.size} bytes`);

    const birthtime = stats.birthtime.toLocaleString(); // Creation time
    const mtime = stats.mtime.toLocaleString(); // Modification time
    console.log(`  Created: ${birthtime}`);
    console.log(`  Last Modified: ${mtime}`);

    console.log('  File Type:', stats.isFile() ? 'File' : 'Directory');

    if (stats.isFile()) {
      console.log(`  Is Executable: ${stats.mode & 0o111}`); // Check executable permissions
    } else {
      const totalFiles = fs.readdirSync(filePath).length;
      console.log(`  Contains: ${totalFiles} items`);
    }
  } catch (err) {
    console.error('Error analyzing file:', err);
  }
}

// Example usage
const filePath = './serverdemo.js'; 
analyzeFileInfo(filePath);
