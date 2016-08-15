
var aData = [['1','2','3'],['4','5','6'],['7','8','9'],['10','11','12']];
    
var _data = new Array();
    var n = 0;

    for(var i = 0;i < aData.length;i++){
        for(var j = 0;j < aData[i].length;j++){
            _data[n] = {v:aData[i][j],position:String.fromCharCode(65+j) + (i+1)};
            n++;
        }
    }

    var data = _data.reduce((prev, next) => Object.assign({}, prev, {[next.position]: {v: next.v}}), {});

    var output = Object.assign(data);
    var outputPos = Object.keys(output);
    var ref = outputPos[0] + ':' + outputPos[outputPos.length - 1];
    var wb = {
        SheetNames: ['mySheet'],
        Sheets: {
            'mySheet': Object.assign({}, output, { '!ref': ref })
        }
    };
    console.log(__dirname);
    var tmp_path = path.join('/root/server/public/excel/', path.basename(req.body.name+'.xlsx'));
    xlsx.writeFile(wb, tmp_path);