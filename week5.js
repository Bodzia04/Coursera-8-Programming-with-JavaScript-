// 1) End-of-Course Graded Assessment
// 1) End-of-Course Graded Assessment
// 3) Programming Assignment Little Lemon Receipt Maker

function getPrices(taxBoolean){
  for(let i = 0; i < dishData.length; i++){
    let finalPrice;
    const tax = 1.9;

    if(taxBoolean){
      finalPrice = dishData[i].price * tax;
    }else if(taxBoolean == false){
      finalPrice = dishData[i].price;
    }else{
      console.log('You need to pass a boolean to the getPrices call!');
      return;
    }
    console.log(`Dish: ${dishData[i].name} Price: $${finalPrice.toFixed(2)}`);
  }
};

function getDiscount(taxBoolean, guests){
  getPrices(taxBoolean);

  if(typeof guests === 'number' && guests > 0 && guests < 30){
    const discount = guests < 5 ? 5 : 10;
    console.log('Discount is: $' + discount);
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
];

getDiscount(true, 2);
getDiscount(false, 10);