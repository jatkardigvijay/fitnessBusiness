const products = [
    {
        id: "dumbell",
        name: "Dumbell - 10kg",
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
        id: "dumbell",
        name: "Dumbell - 10kg",
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
        id: "dumbell",
        name: "Dumbell - 10kg",
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
        id: "dumbell",
        name: "Dumbell - 10kg",
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
        x = x + `<div class="pro" onclick="window.location='productView.html'">
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