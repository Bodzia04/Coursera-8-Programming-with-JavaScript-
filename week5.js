// 1) End-of-Course Graded Assessment
// 1) End-of-Course Graded Assessment
// 3) Programming Assignment Little Lemon Receipt Maker

function getPrices (taxBoolean){
  for(let i = 0; i < dishData.length; i++){
    let finalPrice;

    if(taxBoolean){
      finalPrice = dishData[i].price * tax;
    }else if(taxBoolean == false){
      finalPrice = dishData[i].price;
    }else{
      // я не дуже зрозумів що потрібно робити в step 6, такщо покишо залишаю такий код.
      return 'You need to pass a boolean to the getPrices call!';
    }

    console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`);
    
  }
};

function getDiscount(taxBoolean, guests){
  
};