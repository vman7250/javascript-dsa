// my version
function stringSearch(str,str2){
    let m = ''
    let count = 0
    for(let i = 0 ; i < str.length; i++ ) {
      
      if(str[i] == str2[count]){
      
      if(count <= str2.length-1){
        
        m += str[i]
        
        count++}
      
     }
       
    }
        
    if ( m === str2 ) return 'The word exists'
    else return 'The word does not exist'
        
  }
        
  
  
  console.log(stringSearch('hello world haha','hahaha'))