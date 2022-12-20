const {parse} = require('csv-parse'); 
const fs= require('fs');
const habi= [];


// this function checks if planet is habitable
function isHabitable(planet){
    return planet['koi_disposition']==='CONFIRMED'
    && planet['koi_insol'] >0.36 && planet['koi_insol'] <1.11
    && planet['koi_prad']<1.6;
    

}

//reading the data as a stream first using fs system, this gives us our data in dytes and all 
//so we need to parse them.
 fs.createReadStream('Keplar_data.csv')
 .pipe(parse({
    comment: '#',
    columns: true,
 }))
 .on('data',(data)=>{
    if(isHabitable(data)){
        habi.push(data);}
    
 })
 //incase anything went wrong with our nasa data
 .on('err',(err)=>{
    console.log(err);
 })
 .on('end',()=>{
   console.log(habi.map((planet)=>{
    return planet['kepler_name'];
   }))
    console.log(`${habi.length} This is the lenght of habitable planets found !`);
 })