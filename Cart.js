
/*Jay Allen
// CIS131-101 Web Site Development II
Exam 1
September 24, 18 -->
*/
var shoppingCart = 
{
    firstName: "Lou",
    lastName:  "Tennant",
    item: ["Rubber Duck", "Stitch Erase", "pen"],
    cost:[15.95, 1.95, 4.05],

        fullName: function()
    {
        return this.firstName + " " + this.lastName;
    }
};
console.log("Name: " + shoppingCart.fullName());
console.log("Items Purchased:");


    // for-in loop here
var totPurchase = 0;

for (var i=0, len=shoppingCart.item.length; i<len; i++) 
    {
    // loop
        // console.log("i = "+ i);
        console.log(shoppingCart.item[i] + " $" +
        shoppingCart.cost[i]);
        totPurchase = totPurchase + 
            shoppingCart.cost[i]; 
    }
console.log("Total Purchase: $" + totPurchase);
