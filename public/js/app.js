document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.



  // menu icon event listener
  const menuIcon = document.getElementById("menu-icon");
  menuIcon.addEventListener("click", function () {
    const menu = document.getElementById("menu");
    if (menu.style.display === "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  });

  const mybutton = document.getElementById("my-button");

  const postColor = document.getElementsByClassName("eachPost");
  mybutton.addEventListener("click", function () {
    for (let i = 0; i < postColor.length; i++) {
      postColor[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    }
  });

});
