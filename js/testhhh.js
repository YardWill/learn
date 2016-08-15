var ddc = [['1','2','3'],['1','2','3'],['1','2','3'],['1','2','3'],['1','2','3'],['1','2','3'],['1','2','3'],['1','2','3']];


var alen = ddc.length;
var blen = ddc[0].length;

console.log(alen,blen);

var _data = new Array();

for (var i = alen - 1; i >= 0; i--) {
	for (var j = blen - 1; j >= 0; j--) {
		var a = String.fromCharCode(65+j) + (i+1);
		_data.unshift({[a]:{v:ddc[i][j]}});
	}
}
console.log(_data);
// for(var i = 0;i < ddc.length;i++){
//         for(var j = 0;j < ddc[i].length;j++){
//             _data[n] = {v:ddc[i][j],position:String.fromCharCode(65+j) + (i+1)};
//             n++;
//         }
//     }


// var data = _data.reduce(function(pre,next,index){
//         // if(index == 1){
//         //     console.log(index);
//         //     console.log(pre);
//         //     return Object.assign({[pre.position]: {v:pre.v}},pre,{[next.position]: {v:next.v}},{})
//         // }
//         // if(index == 2){
//         //     console.log(index);
//         //     console.log(pre);
//         //     return pre;
//         // }else{
//             console.log(index);
//             console.log(pre);
//             return Object.assign({},index == 1?{[pre.position]: {v:pre.v}}:pre,{[next.position]: {v:next.v}},{})
//         // }
//     })