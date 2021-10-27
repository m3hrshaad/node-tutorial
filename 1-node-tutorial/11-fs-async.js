const { readFile, writeFile } = require('fs');
console.log('start');
//read first file
readFile('./content/first.txt', 'utf-8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    //read second file
    readFile('./content/second.txt', 'utf-8', (err, result)=>{
        if(err){
        console.log(err);
        return;
    }
    const second = result;
    //write file
    writeFile('./content/result-async.txt',`Here is the result: ${first}, ${second}`, {flag: 'a'},
    (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        // console.log(result);
        console.log('Done with this task');
    })
    })
})
console.log('start next task');
