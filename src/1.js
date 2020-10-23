function reverse (n) {
   arr = []
   if (n<0){
      newN=n.toString().slice(1,n.length)
      console.log(newN)
      for (i=0;i<newN.length;i++){
         arr.push(+newN.charAt(i))
      }
      return '-'+arr.reverse().join('');
   }else
  newN = n.toString();
for (i=0;i<newN.length;i++){
   arr.push(+newN.charAt(i))
}
return arr.reverse().join('');
  
     
   }
   n= 53320;
   console.log(reverse(n))
   