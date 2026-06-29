function order(food, price){
let msg=`Hello myHotel, I'd like to order ${food} worth KSh ${price}`;
window.open(`https://wa.me/254711906157?text=${encodeURIComponent(msg)}`);
}