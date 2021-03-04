let x=`vfdbv





afbsefb`
x=x.split("\n");
console.log(x);


function removeLargeSpaces(arr){

   let y=[];
   let flag=false;

   for(let i=0;i<arr.length;i++){
      if(arr[i]==="" || arr[i]=="\r"){
         if(flag===true){
            continue;
         }else{
            y.push(arr[i]);
            flag=true;
         }
      }else{
         y.push(arr[i]);
         flag=false;
      }
   }
   return y;

}
x=removeLargeSpaces(x);

console.log(x);