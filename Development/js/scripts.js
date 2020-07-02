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