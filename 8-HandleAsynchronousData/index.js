let a=20
let b=0;

console.log(a);
setTimeout(()=>{
    b=30;
},2000);
console.log(a+b);

//Handling above time of Situation with the help of PROMISE object where response can be inappropriate.
// fetch method itself return promise response where we can get response directly with .then function.


/*---------------- PROMISE-------------------------------
  -)  It is a object which will handle asynchornous way of getting response without data
   inappropriate.

  -) It takes 2 argument inside it. 
        🥇 Resolve - If response is coming without any issue
        🥇 Reject  - If their is any Issue.
*/

let c=20;
let d=0;

let waitingForResponse=new Promise((resolve,reject)=>{
   setTimeout(()=>{
       resolve(30);
   },2000)
})
waitingForResponse.then((data)=>{
    console.log(a+data)
})
// with the help of this way we will resolve the Issue of inconsistent response.