/*
create a function named 'orderTea' that takes one parameter 'teaType'. Inside the function, create another function named  `ConfirmOrder` that returns a message like "Order confirmed for Chai".
Call confirmOrder from within orderTea and return the result
*/

function orderTea(teaType){

    function confirmOrder(teaType){
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder(teaType)
}

let orderConfirmation = orderTea("chai")
console.log(orderConfirmation)