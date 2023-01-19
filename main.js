'use strict';

const fs = require('node:fs');

const data = fs.readFileSync('free_company_dataset.csv', 'utf8');

console.log(data.length)
