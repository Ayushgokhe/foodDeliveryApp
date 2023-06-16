var generate = () => {
    var capchaValue = getNumber() + getUpperCase() + getLowerCase() + getUpperCase() + getNumber()

    document.querySelector("#container1").innerHTML = capchaValue
    document.querySelector("#container1").style["text-decoration"] = 'line-through'
    

    html2canvas(document.getElementById('container1'), {
        onrendered: function (canvas) {
            var screenshot = canvas.toDataURL('image/png');
            document.querySelector('#cptImage').setAttribute('src', screenshot);
            document.querySelector("#container1").style.display = 'none'
        },
    });
}

var getNumber = () => {
    var max = 10
    var randomValue = Math.floor(Math.random() * max);
    return randomValue.toString();
}

var getLowerCase = () => {
    var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    var randomValue = Math.floor(Math.random() * (lowerCase.length));
    return lowerCase[randomValue];
}

var getUpperCase = () => {
    var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    var randomValue = Math.floor(Math.random() * (upperCase.length));
    return upperCase[randomValue];
}

