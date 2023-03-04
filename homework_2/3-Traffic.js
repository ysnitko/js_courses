function updateLight(current) {
    const greenLight = 'green';
    const yellowLight = 'yellow';
    const redLight = 'red';
   
        if (current === greenLight) {
            return(yellowLight);    
       }
          
        else if (current === yellowLight) {
            return(redLight);  
       }
   
        else if (current === redLight) {
           return(greenLight); 
       }
   
   }