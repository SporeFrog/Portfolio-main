function toggleNav(){
 
  if(document.querySelector("nav").classList.contains("hidden")){
    document.querySelector('nav').classList.remove("hidden");
    document.querySelector('#toggleButton').innerHTML = '<i class="fas fa-arrow-up"></i>';
    // document.querySelector('#toggleButton').style="top:5rem;"
  }else{
    document.querySelector("nav").classList.add("hidden");
    document.querySelector('#toggleButton').innerHTML = '<i class="fas fa-arrow-down"></i>';
    // document.querySelector('#toggleButton').style="top:1rem;"

  }
}

document.querySelector('#toggleButton').addEventListener("click", toggleNav);


