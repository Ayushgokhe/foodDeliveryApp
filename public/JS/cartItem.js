// var cartItem = (e) => {
//     alert('your product added successfully')
//     // console.log(window)
//     console.log(document)
//     console.log(productId)
//     // console.log(e.target.id)
//     // console.log(document.body)
// }

const cart_Id = () => {
    var keyvalues = window.location.search;
    var key = new URLSearchParams(keyvalues);
    var id = key.get('id')
    return id;

}

let cartId = cart_Id()
console.log(cartId)