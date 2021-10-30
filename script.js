function toggleNav(){
 
  if(document.querySelector(".navContainer").classList.contains("hidden")){
    document.querySelector(".navContainer").classList.remove("hidden");
     document.querySelector(".toggler").innerHTML = '<i class="fas fa-arrow-up"></i>';
  }else{
    document.querySelector(".navContainer").classList.add("hidden");
    document.querySelector(".toggler").innerHTML = '<i class="fas fa-arrow-down"></i>';
  }
}


document.querySelector(".toggler").addEventListener("click", toggleNav);