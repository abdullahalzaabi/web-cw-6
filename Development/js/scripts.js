let name= ["abdullah" , "khalid" , "noor"];
name.forEach(logger);
    
function logger(value){
console.log(value)
}

let summerdeg = [40, 55 , 33 , 50 ];
console.log(summerDeg.filter(myfunction));
function myfunction (x) {
    return x > 50 
    }
    function getbookbyid (bookId , books) {
        return books.includes(bookId);
        }

        let stillbuying = true;
        let cart = [];
while (stillbuying) {
    let name = prompt ("انتهيت بدلاً من السلعة الجديدة")
    if (name) ! = ("انتهيت")
    let quantity = prompt("الكمية")
    let price = prompt ("السعر")

    let item = {
        name: name,
        quantity: quantity,
        price:price,
       };
       cart.push(item);
    } else { 
        stillbuying=false;
        cart.forEach(printbill)
        console.log("thebill");
        console.log("thebill");
        console.log("quantity");

    
        let endshop ;
let bag = [] ;
while(endshop )
{
    let end =prompt("ادخل انتهيت عند الانتهاء من التسوق");
    if(end="انتهيت")
    {
        let item=prompt("السلعة");
        let price=prompt("السعر");

        let pel={
            end : end ,
            price : price ,
            item : item ,
        };
        bag.push(pel)
    }
    else (endshop = "انتهيت")
    console.log(pel);
}
let stillBuying = true;
let cart = [];
while (stillBuying) {
  let name = prompt("السلعه: اضغط انتهيت عندما تنتهي");
  if (name != "انتهيت") {
    let quantity = prompt("الكميه");
    let price = prompt("السعر");

    let item = {
      name: name,
      quantity: quantity,
      price: price,
    };
    cart.push(item);
  } else {
    stillBuying = false;
    printBill(cart);
  }
}
function printBill(items) {
  let totalPrice = 0;
  console.log("الفاتوره");
  console.log("------------");
  for (let i = 0; i < cart.length; i++) {
    console.log(
      items[i]["quantity"] +
        " " +
        items[i]["name"] +
        " " +
        items[i]["price"] +
        " KD"
    );
    totalPrice += parseFloat(items[i]["price"]);
  }
  console.log("السعر الكلي:" + totalPrice);
  console.log("------------");
}


































