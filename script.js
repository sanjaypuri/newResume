function toggleMenu(){
  const myMenu = document.getElementById("menu")
  if(myMenu.style.display === "none"){
    myMenu.style.display = "flex";
  } else {
    myMenu.style.display = "none";
  }
};
function closeMenu(){
  document.getElementById("menu").style.display = "none";
}
