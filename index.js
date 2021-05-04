window.addEventListener('scroll',  () => {
  var scrolly = window.scrollY;
  console.log(scrolly);
  const stylebar = document.getElementById("show_bar").style.display;
  console.log(stylebar);
  if(scrolly > 260){
    if(stylebar == "" || stylebar == "none"){
      document.getElementById("show_bar").style.display = "block";
      document.getElementById("select_language").style.display = "none";
    }

  }else if (scrolly < 150 ) {
    if(stylebar == "block"){
      document.getElementById("show_bar").style.display = "none";
      document.getElementById("select_language").style.display = "block";
    }

  }
});
/*   button contact */
function showcontact() {
  document.querySelector(".click_show_icon_contact").style.display = "none" ;
  document.querySelector(".icon_contact").style.display = "block" ;
}
function closecontact() {
  document.querySelector(".click_show_icon_contact").style.display = "block" ;
  document.querySelector(".icon_contact").style.display = "none" ;
}
