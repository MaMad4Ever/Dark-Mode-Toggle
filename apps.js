var night_mode_button = document.querySelector(".toggle-input");

night_mode_button.addEventListener("change", function (){
  if (night_mode_button.checked){
    document.body.style.background = '#000000';;
  }else {
    document.body.style.background = 'white';
  }
})