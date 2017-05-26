function pasNum (num){
  return Number.parseFloat(num/10000).toFixed(1)+'万'
}

function getTop12(arr){
    return arr.sort((a,b)=>{
        return b.n - a.n
    }).slice(0,12)
}
export default{
    pasNum,
    getTop12
}