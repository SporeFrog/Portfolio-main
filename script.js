function toggleNav(){
 
  if(document.querySelector("nav").classList.contains("hidden")){
    document.querySelector('nav').classList.remove("hidden");
    document.querySelector('#toggleButton').innerHTML = '<i class="fas fa-arrow-up"></i>';
  }else{
    document.querySelector("nav").classList.add("hidden");
    document.querySelector('#toggleButton').innerHTML = '<i class="fas fa-arrow-down"></i>';
  }
}

document.querySelector('#toggleButton').addEventListener("click", toggleNav);


