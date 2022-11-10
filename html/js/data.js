const products = [
    {
        id: "dumbell",
        name: "Dumbell - 10kg working ",
        description: "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
        price: "€65",
        image: [
            "images/DBS.png",
            "images/plates.png",

        ]

    },
    {
        id: "olympicbar",
        name: "Olympic Bar",
        description: "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
        price: "€65",
        image: [
            "images/plates.png",

        ]

    },
    {
        id: "dumbell1",
        name: "Dumbell1 - 20kg",
        description: "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
        price: "€65",
        image: [
            "images/DBS.png",
            "images/plates.png",

        ]

    },
    {
        id: "olympicbar",
        name: "Olympic Bar",
        description: "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
        price: "€65",
        image: [
            "images/plates.png",

        ]

    },
    {
        id: "dumbell1",
        name: "Dumbell1 - 10kg",
        description: "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
        price: "€65",
        image: [
            "images/DBS.png",
            "images/plates.png",

        ]

    },
    {
        id: "olympicbar",
        name: "Olympic Bar",
        description: "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
        price: "€65",
        image: [
            "images/plates.png",

        ]

    },
    {
        id: "dumbell1",
        name: "Dumbell1 - 10kg",
        description: "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
        price: "€65",
        image: [
            "images/DBS.png",
            "images/plates.png",

        ]

    },
    {
        id: "olympicbar",
        name: "Olympic Bar",
        description: "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
        price: "€65",
        image: [
            "images/plates.png",

        ]

    }
]


function allProducts() {
    a = document.getElementById("shopContainer")
    let x = ""
    products.map((item) => {
        x = x + `<div class="pro" id="${item.id}" onclick="productOnClick(this.id)" >
        <img src=${item.image[0]} alt="">
        <div class="des">
            <h5>${item.name}</h5>
            <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>${item.price}</h4>
        </div>
    </div>`
    })
    a.innerHTML = x
}

function productOnClick(x) {
    localStorage.setItem("id", x)
    window.location = 'productView.html'
}

function singleProduct(details) {
    details = document.getElementById("single-pro-details")
    imageDetails = document.getElementById("single-pro-image")
    id = localStorage.getItem("id")
    products.map((x) => {
        if (id === x.id) {
            details.innerHTML = `<h4>${x.name}</h4>
            <h2>${x.price}</h2>
            <input type="number" value="1" min="1">
            <button class="normal">Add To Cart</button>
            <h4>Product Details</h4>
            <span>${x.description}
            </span>`
            a = ""
            x.image.map((i) => {
                a = a + `<div class="small-img-col" onclick="changeImage('${i}')">
                <img src="${i}" width="100%" class="small-img" alt="">
            </div>`
            })
            imageDetails.innerHTML = `<img src="${x.image[0]}" width="100%" id="MainImg" alt="">

            <div id="small-img-group" class="small-img-group">
            ${a}
            </div>
            `


        }
    })
}

function changeImage(x) {
    imgD = document.getElementById("MainImg")
    imgD.src = x
}
