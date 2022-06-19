const input = [ 1, -5, 2, 10, -30, 29, 50];
let sum = 0;
for(i=0;i<input.length;i++){
    console.log(input[i])
    if(input[i]>=0){
        sum = sum+input[i];
    }
}
console.log(sum)