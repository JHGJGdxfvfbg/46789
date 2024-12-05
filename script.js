const URL = 'https://api.npoint.io/8758bff9f8042ca8f3aa/';

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