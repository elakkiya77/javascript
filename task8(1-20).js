//Display only the product title inside an <h1> tag.

let api = "https://fakestoreapi.com/products";

fetch(api)
.then((response) => {
    return response.json();
})
.then((products) => {
    products.forEach((product) => {
        let h1 = document.createElement("h1");
        h1.innerHTML = product.title;
        document.querySelector(".products").appendChild(h1);
    });
});


//Display the product ID and title inside an <h2> tag.
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let h2 = document.createElement("h2");
        h2.innerHTML = product.id + " - " + product.title;
        document.querySelector(".products").appendChild(h2);
    });
});


// Display the first 30 characters of each product title.
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let p = document.createElement("p");
        p.innerHTML = product.title.slice(0, 30);
        document.querySelector(".products").appendChild(p);
    });
});


//Display the first 100 characters of each product description.
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let p = document.createElement("p");
        p.innerHTML = product.description.slice(0, 100);
        document.querySelector(".products").appendChild(p);
    });
});

//Display each product's image inside a <div>.
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let div = document.createElement("div");
        div.innerHTML = `<img src="${product.image}">`;
        document.querySelector(".products").appendChild(div);
    });
});


//Display the product title, description, and image inside a single <div>.
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let div = document.createElement("div");

        div.innerHTML = `
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <img src="${product.image}" width="200">
        `;

        document.querySelector(".products").appendChild(div);
    });
});

//Display each product's price inside a <p> tag.
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let p = document.createElement("p");
        p.innerHTML = "$" + product.price;
        document.querySelector(".products").appendChild(p);
    });
});


//Display each product's category inside an <h3> tag.
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let h3 = document.createElement("h3");
        h3.innerHTML = product.category;
        document.querySelector(".products").appendChild(h3);
    });
});

//Display the product title in uppercase.
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let h2 = document.createElement("h2");
        h2.innerHTML = product.title.toUpperCase();
        document.querySelector(".products").appendChild(h2);
    });
});

//Display the product title and its total character count
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let p = document.createElement("p");
        p.innerHTML = product.title + " - Characters: " + product.title.length;
        document.querySelector(".products").appendChild(p);
    });
});

//Display the first 5 products only.
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product, index) => {
        if (index < 5) {
            let h2 = document.createElement("h2");
            h2.innerHTML = product.title;
            document.querySelector(".products").appendChild(h2);
        }
    });
});

//Display products with their IDs, titles, and prices
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let div = document.createElement("div");

        div.innerHTML = `
            <p>ID: ${product.id}</p>
            <h2>${product.title}</h2>
            <p>Price: $${product.price}</p>
        `;

        document.querySelector(".products").appendChild(div);
    });
});

//Display each product's image with a width of 200px
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let img = document.createElement("img");
        img.src = product.image;
        img.width = 200;

        document.querySelector(".products").appendChild(img);
    });
});


//Add a separate <div> for each product and give it a class name of "card"
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h2>${product.title}</h2>
            <p>$${product.price}</p>
        `;

        document.querySelector(".products").appendChild(div);
    });
});


//Display the product title and description, limiting the description to 50 characters.
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let div = document.createElement("div");

        div.innerHTML = `
            <h2>${product.title}</h2>
            <p>${product.description.slice(0, 50)}</p>
        `;

        document.querySelector(".products").appendChild(div);
    });
});


//Display all product titles in the browser console and on the webpage.
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        console.log(product.title);

        let h2 = document.createElement("h2");
        h2.innerHTML = product.title;
        document.querySelector(".products").appendChild(h2);
    });
});

//Display each product's title and category inside the same <div>.
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let div = document.createElement("div");

        div.innerHTML = `
            <h2>${product.title}</h2>
            <h3>${product.category}</h3>
        `;

        document.querySelector(".products").appendChild(div);
    });
});


//Display a message inside .api when the API data is successfully loaded.
fetch(api)
.then((response) => response.json())
.then((products) => {
    document.querySelector(".api").innerHTML =
        "API data loaded successfully";

    products.forEach((product) => {
        let h2 = document.createElement("h2");
        h2.innerHTML = product.title;
        document.querySelector(".products").appendChild(h2);
    });
});


//Display "Loading..." inside .api before fetching the API data.
document.querySelector(".api").innerHTML = "Loading...";

fetch(api)
.then((response) => response.json())
.then((products) => {
    document.querySelector(".api").innerHTML = "Data loaded successfully";

    products.forEach((product) => {
        let h2 = document.createElement("h2");
        h2.innerHTML = product.title;
        document.querySelector(".products").appendChild(h2);
    });
});

//Use .finally() to display "API request completed" after the request finishes.
fetch(api)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        let h2 = document.createElement("h2");
        h2.innerHTML = product.title;
        document.querySelector(".products").appendChild(h2);
    });
})
.catch((error) => {
    document.querySelector(".api").innerHTML = "API error";
})
.finally(() => {
    document.querySelector(".api").innerHTML = "API request completed";
});
