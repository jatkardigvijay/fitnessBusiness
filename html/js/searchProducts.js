// function searchProduct() {
//     console.log('111');
//     let productName = document.getElementById('search').value
//     input = productName.toLowerCase();
//     let x = document.getElementsByClassName('pro');

//     for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style = "display: none";
//         }
//         else {
//             x[i].style = "display: block";
//         }
//     }
// }

// Search

function searchProduct() {
    let productName = document.getElementById('search').value
    input = productName.toLowerCase();
    let x = document.getElementsByClassName('product-container');
    for (i = 0; i < x.length; i++) {
        if (!x[i].id.toLowerCase().includes(input)) {
            x[i].style = "display: none";
        }
        else {
            x[i].style = "display: block";
        }
    }
}