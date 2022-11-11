const products = [
    {
        id: "dumbell",
        name: "Dumbell - 10 kg (Sold in pairs only)",
        description: "These are the authentic hex dumbells which are covered from all sides with hexagonal shaped rubber so that they do not roll even if fall. The grip, is made such that sweating won't cause any such problems like sliding from hands. They can be used for multiple body part workouts.",
        price: "€65",
        image: [
            "images/dumbells/dumbell10kg3.png",
            "images/dumbells/dumbell10kg1.png",
            "images/dumbells/dumbell10kg4.png",
            "images/dumbells/dumbell10kg5.png"
        ]

    },
    {
        id: "olympicbar",
        name: "Olympic Bar - 20 kg",
        description: "Particular for lifts/deadlifts until 100kgs, squats, barbell bench press. This bar is composed of high quality carbon steel. Collars are given free along with this bar.",
        price: "€90",
        image: [
            "images/olympicbars/olympicbar2.png",
            "images/olympicbars/olympicbar1.png",
            "images/olympicbars/olympicbar3.png",
            "images/olympicbars/olympicbar4.png"
        ]

    },
    {
        id: "yogamat",
        name: "Yogamat (Pilates mat)",
        description: "With this great freebody exercise, an astute quality Yoga mat gives a feeling of relaxtion and stress reduction. Moreover, it is easy for cleaning and doing the maintainance this mat.",
        price: "€15",
        image: [
            "images/yogamats/yogamat1.png",
            "images/yogamats/yogamat2.png",
            "images/yogamats/yogamat3.png",
            "images/yogamats/yogamat4.png"
        ]

    },
    {
        id: "indoorCyclingBike",
        name: "G6 Indoor Cycling Bike",
        description: "This indoor cycling bike makes your static cycling experience much better with the facilities it includes along with it. It is integrated with the IT system, making it more easy to save and track the fitness journey and steadily progress in the same along with speed and the calorie burned as the staple facilities being provided. The product also has 20% improved seating than the earlier one, which is in turn comfortable for the user.",
        price: "€315",
        image: [
            "images/indoorcyclingbike/indoorcyclingbike1.png",
            "images/indoorcyclingbike/indoorcyclingbike2.png",
            "images/indoorcyclingbike/indoorcyclingbike3.png",
            "images/indoorcyclingbike/indoorcyclingbike4.png"
        ]

    },
    {
        id: "legpressmachine",
        name: "Seated Leg Press",
        description: "Standing or seating, the legs are always to be strong. Ideal leg press machine for the gym beginners, preparing for the next level leg workout (smith machine, Animal Plate Load Leg Press, etc.). The machine has a QR code(opens the application and has relevant videos) makes the user do the exercises without the need of trainer. Glutes, Quadriceps are the major muscles which are targetted.",
        price: "€10,650",
        image: [
            "images/legpressmachine/legpress1.png",
            "images/legpressmachine/legpress2.png",
            "images/legpressmachine/legpress3.png",
            "images/legpressmachine/legpress4.png"

        ]

    },
    {
        id: "treadmill",
        name: "Olympic Bar",
        description: "",
        price: "€65",
        image: [
            "images/plates1.png",

        ]

    },
    {
        id: "dumbell1",
        name: "Dumbell1 - 10kg",
        description: "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
        price: "€65",
        image: [
            "images/DBS.png",
            "images/plates1.png",

        ]

    },
    {
        id: "olympicbar11",
        name: "Olympic Bar",
        description: "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
        price: "€65",
        image: [
            "images/plates1.png",
        ]
    }
]

//Display the details of the Products using JSON 

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
            
            <div class="quantityContainer">
            <button id="incrDecr" onclick="decrement()">-</button>
            <input id="prInput" inputmode=”numeric” type="number" value="0" min=1 max=100>
            <button id="incrDecr" onclick="increment()" >+</button>
            </div>

            <button class="cart-button" onclick="openModal();">Reserve</button>
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
            </div>`
        }
    })
}

function changeImage(x) {
    imgD = document.getElementById("MainImg")
    imgD.src = x
}

function increment() {
    document.getElementById('prInput').stepUp();
 }
 function decrement() {
    document.getElementById('prInput').stepDown();
 }


