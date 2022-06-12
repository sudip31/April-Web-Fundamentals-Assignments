let arr=[12,34,13,11,15,54,66,3]
let temp;
for(let i=0;i<arr.length;i++){
 for (let j = i+1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      // arr[0] = arr[i];
         
      temp    =arr[i]; 
      arr[i]  =arr[j]; 
      arr[j]  =temp;
    }
  }
}
  let s = parseInt(prompt("enter n_th highest number position"))
  console.log(arr[s])



