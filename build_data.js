const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const MASTER_JSON = path.join(__dirname, 'data.json');
const INDEX_HTML = path.join(__dirname, 'index.html');

function rebuild() {
  const meta = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'meta.json'), 'utf8'));

  const subjectFiles = ['dsa.json', 'ml.json', 'oops.json', 'deld.json', 'maths.json'];
  const subjects = subjectFiles.map(sf => {
    return JSON.parse(fs.readFileSync(path.join(DATA_DIR, sf), 'utf8'));
  });

  const master = {
    meta,
    subjects
  };

  // 1. Save data.json
  const jsonStr = JSON.stringify(master, null, 2);
  fs.writeFileSync(MASTER_JSON, jsonStr, 'utf8');
  console.log(`Updated ${MASTER_JSON}`);

  // 2. Update index.html
  const html = fs.readFileSync(INDEX_HTML, 'utf8');
  const tagStart = '<script id="study-data" type="application/json">';
  const tagEnd = '</script>';

  const startIdx = html.indexOf(tagStart);
  if (startIdx === -1) {
    console.error('Could not find study-data script tag in index.html');
    return;
  }
  const endIdx = html.indexOf(tagEnd, startIdx);
  if (endIdx === -1) {
    console.error('Could not find closing script tag for study-data');
    return;
  }

  const newHtml = html.substring(0, startIdx + tagStart.length) + '\n' + jsonStr + '\n  ' + html.substring(endIdx);
  fs.writeFileSync(INDEX_HTML, newHtml, 'utf8');
  console.log(`Updated embedded JSON in ${INDEX_HTML}`);
}

rebuild();
