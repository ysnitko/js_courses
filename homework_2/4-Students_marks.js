function finalGrade (exam, projects) {
    let final = 0;

    if (exam >= 90 || projects>= 10) {
        final = 100;
        return(final);   
    }

    else if 
        (exam >= 75 || projects >= 5) {
            final = 90;
            return(final);
        }

    else if 
        (exam >= 50 || projectt >= 2) {
            final = 75;
            return(final);  
        }
        
    else {
        final = 0;
        console.log(final);
        return(final);  
    }
}