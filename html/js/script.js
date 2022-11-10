const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// popup

function openModal() {
    let x = document.getElementById("modalContainer");
    if (x.className === "modal-container") {
        x.className += " clicked-modal";
    } else {
        x.className = "modal-container";
    }
}


function confirmAlert() {

    Swal.fire({
        title: 'Do you want to reserve the item?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Reserve',
        denyButtonText: `Don't Reserve`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Reserved!', '', 'success')
            let x = document.getElementById("modalContainer");
            if (x.className === "modal-container") {
                x.className += " clicked-modal";
            } else {
                x.className = "modal-container";
            }
        } else if (result.isDenied) {
            Swal.fire('Item Not reserved', '', 'info')
            let x = document.getElementById("modalContainer");
            if (x.className === "modal-container") {
                x.className += " clicked-modal";
            } else {
                x.className = "modal-container";
            }
        }
    })
}


// validations

// function validationFunction() {
//     // Get the value of the input field with id="numb"
//     let x = document.getElementById("firstName").value;
//     // If x is Not a Number or less than one or greater than 10
//     let text;
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Input not valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }

function validationFunction() {
    var flag = false;
    let form = document.getElementById('form')
    let email = document.getElementById('emailID').value
    let phone = document.getElementById('phone').value
    let fillDetails = document.getElementById('fillDetails')
    let text = document.getElementById('text')
    let phoneValid = document.getElementById('phoneValid')
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^\d{10}$/;

    if (email == '' || phone=='' && fillDetails.textContent === '' ) {
       
        fillDetails.innerHTML = "Please fill in all details"
        fillDetails.style.color = '#ff0000'
    }
    else {
        fillDetails.innerHTML="";
        if (phone.match(phonePattern)) {
            form.classList.add('valid');
            form.classList.remove('invalid');
            phoneValid.innerHTML = "Your Phone Number in valid";
            phoneValid.style.color = '#00ff00';
            fillDetails.innerHTML = "";
            flag = true;
        } else if(!phone.match(phonePattern) && phone !== "" ) {
            form.classList.remove('valid');
            form.classList.add('invalid');
            phoneValid.innerHTML = "Please Enter Valid Phone Number";
            phoneValid.style.color = '#ff0000';
            flag = false;
        }

        if (email.match(pattern)) {
            form.classList.add('valid')
            form.classList.remove('invalid')
            text.innerHTML = "Your Email Address in valid";
            text.style.color = '#00ff00';
            fillDetails.innerHTML = ""
            flag = true;
        } else if (!email.match(pattern)) {
            form.classList.remove('valid')
            form.classList.add('invalid')
            text.innerHTML = "Please Enter Valid Email Address";
            text.style.color = '#ff0000';
            flag = false;
        }

        if(flag===true)
        {
            confirmAlert();
            form.reset();
            phoneValid.innerHTML = '';
            text.innerHTML = '';
            fillDetails.innerHTML = '';
        }
    
        if (email == '') {
            form.classList.remove('valid')
            form.classList.remove('invalid')
            text.innerHTML = ""
            text.style.color = '#00ff00'
        }
    }
}