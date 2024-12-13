// 675b1a8ee1db924442971b09

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://marketplace-20d0.restdb.io/rest/products",
    "method": "GET",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "675b1a8ee1db924442971b09",
        "cache-control": "no-cache"
    }
};
let basketList = [];
let products = [];
let sizeOfBasket = 0;

setInterval(() => {
    if (basketList.length === 0) {
        $(".list").html('');
        $(".list").html(
            '<h1>No ready products</h1>'
        );
    }
}, 10);

function addProducts(data) {
    products = data;
}

$.ajax(settings).done(function (result) {
    addProducts(result);
    $.each(result, (index, element) => {
        $(".container").append(
            `<div class="product">
                    <h3>${element.name}</h3>
                    <img src="${element.photo_url}">
                    <p>Description: ${element.discription}</p>
                    <p>Price: ${element.price}грн</p>
                    <button onclick="addProductToBasket('${element._id}')">Buy</button>
                </div>`
        );
    });
});

function addProductToBasket(id) {
    basketList.push(
        products.find((product) => {
            return product._id == id;
        })
    )

    reDrawBasket();
}

function reDrawBasket() {
    $(".list").html('');

    let totalPrice = 0;

    $.each(basketList, (index, element) => {
        $(".list").append(`
            <li id="${index}"><p>${element.name} | ${element.price}грн <button class="delete-product" onclick="deleteReadyProduct(${index})">Delete</button></p></li>
        `);
        totalPrice += element.price;
        sizeOfBasket += 1;
    });

    $(".list").append(`
        <h2>Total Price: ${totalPrice}</h2>    
    `);
}

function deleteReadyProduct(id) {
    $(`#${id}`).remove();

    basketList.splice(id, 1);
    console.log(basketList);

    reDrawBasket();
}