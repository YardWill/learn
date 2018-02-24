const xlsx = require('xlsx');
const fs = require('fs');

const op = ['B', 'F', 'G'];
const lastData = [];

const workbook = xlsx.readFile('2.xlsx');

workbook.SheetNames.forEach((e) => {
    const sh = workbook.Sheets[e];
    const d = [];
    for (let i = 1; i < 43; i += 1) {
        const a = {
            reviewId: sh[op[0] + (i + 1)] && sh[op[0] + (i + 1)].v,
            price: sh[op[1] + (i + 1)] && sh[op[1] + (i + 1)].v,
            costPrice: sh[op[2] + (i + 1)] && sh[op[2] + (i + 1)].v,
        };
        d.push(a);
    }
    lastData.push(d);
});

fs.writeFileSync('2.json', JSON.stringify(lastData, null, '\t'));
