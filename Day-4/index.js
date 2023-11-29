
// Navbar

function nav_list() {
  var navlist = document.getElementById("myLinks");
  if (navlist.style.display === "block") {
    navlist.style.display = "none";
  } else {
    navlist.style.display = "block";
  }
}

// form button

function showForm() {
  var form = document.getElementById("myForm");
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
}

//close button

// function closebutton() {
//   var closebutton = document.getElementById("myForm");
//   if (closebutton.style.display === "block") {
//     closebutton.style.display = "none";
//   } else {
//     closebutton.style.display = "block";
//   }
// }