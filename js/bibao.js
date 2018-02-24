function cr() {
    var re = new Array();

    for(var i = 0; i < 10; i++){
        re[i] = function(){
            const a = 1;
            return i;
        }
    }
    return re
}

console.log(cr()[1]());