const URL = 'https://jsonhost.com/json/ebbaececb8443b2670dc53e130b240e1';

$.ajax(URL + "/products", {
    dataType: "json",
    success: (result) => {
        $.each(result, (index, element) => {
            $(".container").append(
                `<div class="product">
                    <h3>${element.name}</h3>
                    <p>Description: ${element.discription}</p>
                    <img src="${element.image_url}">
                </div>`
            );
        });
    },
});