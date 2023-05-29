const fs = require('fs');
const path = require('path');

const b3dmFilePath = 'D:/Desktop/house3dtiles/house/0/0/0.b3dm';
const outputGlbFilePath = path.join(path.dirname(b3dmFilePath), 'output.glb');

fs.readFile(b3dmFilePath, (err, filebuffer) => {
  if (err) {
    console.error('Error reading b3dm file:', err);
    return;
  }

  const _headstr = filebuffer.toString('utf8', 0, 4);
  const _version = filebuffer.readUInt32LE(4);
  const _bytelen = filebuffer.readUInt32LE(8);
  const _featureTableJSONByteLength = filebuffer.readUInt32LE(12);
  const _featureTableBinaryByteLength = filebuffer.readUInt32LE(16);
  const _batchTableJSONByteLength = filebuffer.readUInt32LE(20);
  const _batchTableBinaryByteLength = filebuffer.readUInt32LE(24);

  const glbStartIndex = 28 + _featureTableJSONByteLength + _featureTableBinaryByteLength + _batchTableJSONByteLength + _batchTableBinaryByteLength;
  const glbBuffer = filebuffer.slice(glbStartIndex);

  fs.writeFile(outputGlbFilePath, glbBuffer, (err) => {
    if (err) {
      console.error('Error writing glb file:', err);
      return;
    }
    console.log('Glb file extracted and saved as:', outputGlbFilePath);
  });
});