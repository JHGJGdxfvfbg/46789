const URL = 'https://api.npoint.io/8758bff9f8042ca8f3aa/';

let basketList = [];
let products = [];

function addProducts(data) {
    products = data;
}

$.ajax(URL + "/products", {
    dataType: "json",
    success: (result) => {
        addProducts(result);

        $.each(result, (index, element) => {
            $(".container").append(
                `<div class="product">
                    <h3>${element.name}</h3>
                    <img src="${element.image_url}">
                    <p>Description: ${element.discription}</p>
                    <p>Price: ${element.price}грн</p>
                    <button onclick="addProductToBasket(${element.id})">Buy</button>
                </div>`
            );
        });
    },
});

function addProductToBasket(id) {
    basketList.push(
        products.find((product) => {
            return product.id == id;
        })
    )

    reDrawBasket();
}

function reDrawBasket() {
    $(".list").html('');

    let totalPrice = 0;

    $.each(basketList, (index, element) => {
        $(".list").append(`
            <p>${element.name} | ${element.price}грн</p>
        `);
        totalPrice += element.price;
    });

    $(".list").append(`
        <h2>Total Price: ${totalPrice}</h2>    
    `);
}