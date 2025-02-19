const xmlFlow = require('xml-flow');
const fs = require('fs');

const inputFilePath = 'path/to/large.xml';
const outputFilePath = 'path/to/output.json';

const stream = fs.createReadStream(inputFilePath);
const xml = xmlFlow(stream);

const result = [];

xml.on('tag:elementName', (element) => {
  // Process each specific element
  result.push(element);
});

xml.on('end', () => {
  fs.writeFileSync(outputFilePath, JSON.stringify(result, null, 2));
  console.log('Finished converting XML to JSON');
});