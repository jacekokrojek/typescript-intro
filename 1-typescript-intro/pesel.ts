const GeneratePESEL = ()=>{
    let year = Math.floor(Math.random() * (1900 - 2021 + 1)) + 2021;
    let yearStr = year.toString();
    let yearFinal  = yearStr.slice(1, 3)  
    let month = Math.floor(Math.random() * 12) + 1;
    let month31 = [1,3,5,7,8,10,12]
    let month30 = [4,6,9,11]
    let day;
    if(month31.find(el => el = month) ){
         day = 1
    }else if(month30.find(el => el =month)){
        day = 31
    }else {
        day = 29
    }

    let x1 =    Math.floor(Math.random() * 9) + 1;
    let x2 =    Math.floor(Math.random() * 9) + 1;
    let x3 =    Math.floor(Math.random() * 9) + 1;
    let x4 =    Math.floor(Math.random() * 9) + 1;

    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( let i = 0; i < 1; i++ ) {
    let   c = characters.charAt(Math.floor(Math.random() * characters.length))
    const pesel = `${yearFinal}-${month}-${day}-${x1}-${x2}-${x3}-${x4}-${c}`
    return console.log(`Pesel jest: ${pesel}`);
    }
}
//GeneratePESEL();
export{GeneratePESEL};