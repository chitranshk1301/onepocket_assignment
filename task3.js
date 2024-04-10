const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const wordCount = data.trim().split(/\s+/).length;
  console.log('Total word count:', wordCount);
});