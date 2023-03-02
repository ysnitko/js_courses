function updateLight(current) {  
    const greenLight = 'green';
    const yellowLight = 'yellow';
    const redLight = 'red';
  
      if (current === greenLight) {
          return(greenLight, yellowLight);    
      }
         
       else if (current === yellowLight) {
          return(yellowLight, redLight);  
      }
  
      if (current === redLight) {
          return(redLight, greenLight); 
      }
}