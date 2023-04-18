function Solution(rangos) {
  
    let cont = 0;
    const result  = rangos.map((X) => {
    const found = rangos.includes(X + 1)
    
    if(found){
      cont++;
    }
      
    })
    return cont
  }
  
  Solution([4, 4, 3, 3, 1, 0])