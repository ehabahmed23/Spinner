process.stdout.write('spinner2\n');
const spinner2 =  ['|', '/', '-', '\\','|', '/', '-', '\\','|'];

let time = 0;
for (const ind in spinner2){
   setTimeout(() => {
     process.stdout.write(`\r${spinner2[ind]}   `);
   },time);
   time+=200;

}

setTimeout(() => {
  console.log('');
}, 2000);