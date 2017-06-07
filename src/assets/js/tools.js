function pasNum (num){
  return Number.parseFloat(num/10000).toFixed(1)+'万'
}

function getTop12(arr){
    return arr.sort((a,b)=>{
        return b.n - a.n
    }).slice(0,12)
}
function getMusicTime(num){
    // 计算
    var i=0,s=parseInt(num);
    if(s>60){
        i=parseInt(s/60);
        s=parseInt(s%60);
        if(i > 60) {
            i = parseInt(i%60);
        }
    }
    // 补零
    var zero=function(v){
        return v<10?"0"+v:v;
    };
    return [zero(i),zero(s)].join(":");
}
function formTime(num){
    return num.split(':')[0]*60+num.split(':')[1]*1
}
export default{
    pasNum,
    getTop12,
    getMusicTime,
    formTime
}