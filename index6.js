//capitalize the title


var capitalizeTitle = function(title) {
    const b=title.split(' ')
    const cs=[]
    for(let i=0;i<b.length;i++){
       if(b[i].length>2){
        const c=b[i].charAt(0).toUpperCase()+b[i].slice(1).toLowerCase()
        cs.push(c)
       }else{
        cs.push(b[i])
       }
    }
    return cs.join(' ')
};

const title = 'First leTTeR of EACH Word';
console.log(capitalizeTitle(title));
