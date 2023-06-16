
$(document).ready(function () {

    var product1 = Handlebars.compile(document.querySelector(".slide1").innerHTML)
    var product2 = Handlebars.compile(document.querySelector(".slide2").innerHTML)
    var product3 = Handlebars.compile(document.querySelector("#order_part").innerHTML)


    var dataUrl = "http://127.0.0.1:3000/JSON/homepage.json"


    var getData = () => {
        fetch(dataUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                data.Dish.forEach((pData) => {
                    $("#sec1").append(product1(pData))
                }),
                    data.Brand.forEach((pData) => {
                        $("#sec2").append(product2(pData))
                    }),
                    data.Order.forEach((pData) => {
                        $("#order_sec").append(product3(pData))
                    })
            })
        // document.querySelector(".slide1").style.display = 'flex'
        // document.querySelector(".slide2").style.display = 'flex'
        // document.querySelector("#order_part").style.display = 'flex'

    }
    getData()
})

var left = () => {
    var left = document.querySelector("#sec1")
    left.scrollBy(-204, 0);
}

var right = () => {
    var right = document.querySelector("#sec1")
    right.scrollBy(204, 0);
}

var left1 = () => {
    var left1 = document.querySelector("#sec2")
    left1.scrollBy(-204, 0);
}

var right1 = () => {
    var right1 = document.querySelector("#sec2")
    right1.scrollBy(204, 0);
}





var getId = (event) => {
    let productId = event.target.getAttribute("id");   

    window.location.href="../HTML/product.html?id="+productId+"";
}

