document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
  const mybutton = document.getElementById("my-button");

  const postColor = document.getElementsByClassName("eachPost");
  console.log(postColor)
  //postColor.forEach(post => { post.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` })

  mybutton.addEventListener("click", function () {
    for (let i = 0; i < postColor.length; i++) {
      postColor[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    }
  });

  const menuIcon = document.getElementById("menu-icon");

  menuIcon.addEventListener("click", function () {
    const menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  });


  // function myFunction() {
  //   var x = document.getElementById("myDIV");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // }

});
