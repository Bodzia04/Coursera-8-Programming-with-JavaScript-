// 1) End-of-Course Graded Assessment
// 1) End-of-Course Graded Assessment
// 3) Programming Assignment Little Lemon Receipt Maker

function getPrices (taxBoolean){
  for(let i = 0; i < dishData.length; i++){
    let finalPrice;
    const tax = 1.90;

    if(taxBoolean){
      finalPrice = Math.floor(dishData[i].price * tax);
    }else if(taxBoolean == false){
      finalPrice = Math.floor(dishData[i].price);
    }else{
      // я не дуже зрозумів що потрібно робити в step 6, такщо покишо залишаю такий код.
      return 'You need to pass a boolean to the getPrices call!';
    }

    console.log(`Dish: ${dishData[i].name} Price: $${finalPrice}`);
    
  }
};

function getDiscount(taxBoolean, guests){
  const prices = getPrices(taxBoolean);

  if(typeof guests === 'number'){
    let discount = 0;

    if(guests > 0 && guests < 30){
      if(guests < 5){
        discount = 5;
      }else if(guests >= 5){
        discount = 10;
      }
      console.log('Discount is: $' + discount);
    }
  }else{
    console.log('The second argument must be a number between 0 and 30');
  } 
};

const dishData = [
  {
    name: 'Pasta',
    price: 29
  },
  {
    name: 'Pizza',
    price: 49
  }
]
getDiscount(true, 2) 
getDiscount(false, 10)