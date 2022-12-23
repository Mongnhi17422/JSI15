// // // Shop

// let cartIcon = document.querySelector('#cart-icon');
// let cart = document.querySelector('.cart');
// let Closecart = document.querySelector('#close-cart')

// cartIcon.onclick = () => {
//    cart.classList.add("active");
// };

// Closecart.onclick = () => {
//    cart.classList.romove("active");
// };



// if (document.readyState == 'loading') {
//    document.addEventListener('DOMContentLoaded', ready)
// }
// else {
//    ready ();
// }


// function ready (){
//    var removeCartButtons = document.getElementsByClassName('cart-remove')
//    console.log(removeCartButtons);
//    for (let i = 0; i < removeCartButtons.length; i++) {
//       let button = removeCartButtons[i]
//       button.addEventListener('click', removeCartItem);
//    }
// }

// function removeCartItem(event) {
//    var buttonClicked = event.target;
//    buttonClicked.parentElement.remove();
// }





// // SignUp - Login

// if (!localStorage.userList) {
//    localStorage.userList = JSON.stringify([]);
// }

// let fullname = document.getElementById("fullname");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let signUp = document.getElementById("signUp");

// signUp.addEventListener("click", () => {
//    let userList = JSON.parse(localStorage.userList);
//    for (let i = 0; i<userList.length; i++) {
//       if (userList.fullname == fullname.value || userList.email == email.value) {
//          alert("Tài khoản đã tồn tại");
//          return;
//       }
//    }
//    userList.push({
//       fullname: fullname.value,
//       email: email.value,
//       password: password.value,
//    });
//    localStorage.userList = JSON.stringify(userList);
//    alert("Đăng ký thành công!")
// });


