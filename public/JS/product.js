$(document).ready(function () {
    let productId = fetchId();
    // console.log(productId)
    var product1 = Handlebars.compile(document.querySelector("#div3").innerHTML)
    var product2 = Handlebars.compile(document.querySelector(".product_content").innerHTML)
    var dataUrl = "http://127.0.0.1:3000/JSON/product.json";
    var getData = () => {
        fetch(dataUrl)
            .then((response) => response.json())
            .then((data) => {
                Object.getOwnPropertyNames(data).forEach((val) => {
                    if (productId == val) {
                        data[val].forEach((pData) => {
                            $("#div2").append(product1(pData))
                        }),
                        data[val].forEach((pData) => {
                            $("#product_det").append(product2(pData))
                        })
                    }
                })
            })
        }
    getData()

    // const cartItem = () => {
    //     alert('your product added successfully')
    //     console.log(document)
    //     console.log(productId)
    // }
      
})

const fetchId = () => {
    var keyvalues = window.location.search;
    var key = new URLSearchParams(keyvalues);
    var id = key.get('id')
    return id;
}

// var cartItem = () => {
//     alert('your product added successfully')
//     // console.log(window)
//     console.log(document)
//     console.log(productId)
//     // console.log(e.target.id)
//     // console.log(document.body)
// }

var getId = (event) => {
    let cartId = event.target.getAttribute("id");   

    window.location.href="../HTML/cartItem.html?id="+cartId+"";
    // console.log(window.location.href=cartId+"")
    
}