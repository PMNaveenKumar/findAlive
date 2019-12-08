const readline = require('readline');
let T;
let N = [];
let count = 0;

function findAlive(n, k) { 
  if (n == 1) {
    return 1; 
  }
  else {
    return (findAlive(n - 1, 2) + 1) % n + 1; 
  }
} 

function returnResults(t, inputAry) {
  let resultAry = [];
   for(i = 1; i <= t; i++) {
      console.log(findAlive(inputAry[i]));
   }
}

function getResult(tInt, NInst)
{
   var t = tInt;
   var nAry = NInst;
   returnResults(t,nAry);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
    if(!T) {
    	T = Number(line);
    }
    if(count < T) {
    	N.push(Number(line));
	count++;
    }
    else {
        N.push(Number(line));
	getResult(T, N);
   	rl.close();
   }
}).on('close',function(){
    process.exit(0);
});