function rentalCarCost(d) {
    let rentalCost = 40;
    
    if ( d >= 7) {
        rentalCost = rentalCost * d - 50;
    }

    else if (3 <= d  && d <= 6 ) {
        rentalCost = rentalCost * d - 20;
    }

    else {
        rentalCost = rentalCost * d;
    }
    
    return(rentalCost);
}