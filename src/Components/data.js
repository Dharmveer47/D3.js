
let data= [];
let helper = [];
for(let i=0; i<30; i++){
    for(let j=i; j<i+1; j++){
        helper.push( { hour: 100*i, index: 1,  Traffic:  Math.floor(Math.random() * 600), })
    }
    data.push(helper)
}
console.log(data);