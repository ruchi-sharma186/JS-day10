
// let str = "indian";
// let vowels = 0; 

// for (let i of str){
//     if(i=="a" || i == "i" || i =="e"|| i =="o" || i =="u") {
//     vowels++;
//     }
// }
// console.log(vowels);


let arr = [ 4, 8, 7, 54, 55, 7, 2, 22, 1, 7, 11]
let even = 0;
let odd = 0;
evenNum=[];
oddNum=[];
 for(let j of arr) {
    if(j%2==0){

        even++
    }   
    else{
        odd++
        }
    }
    console.log(even);
    console.log(odd);


//count  zero and one
let arr1 = [0, 1, 1, 1, 1, 0, 0, 0, 1]
let zero =0;
let one  = 0;
 for(let i of arr1){
    if( i == 1){
        one++;
    }else {
        zero++;
    }
}
console.log(one, zero);

