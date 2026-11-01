
let api = "https://fakestoreapi.com/products";

fetch(api).then((success) => {

    console.log(success);

    return success.json();

})

.then((jsData) => {

    jsData.forEach((c, i, t) => {

        console.log(c);

        let div = document.createElement("div");

        div.innerHTML =  ` <h2>Product ID: ${c.id}</h2>

            <img src="${c.image}" alt="Product Image">

            <h3>${c.title.slice(0, 50)}...</h3>

            <p>${c.description.slice(0, 100)}...</p>

            <h2 class="price">$ ${c.price}</h2>`;

        let apiTag = document.querySelector(".api");

        apiTag.append(div);

    });

})

.catch((error) => {

    let apiTag = document.querySelector(".api");

    apiTag.innerHTML = error;

    apiTag.style.color = "red";

});
