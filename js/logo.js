    window.onscroll = function(){

   if(window.scrollY >= 130) { 
      document.getElementById("logo").src="./images/OnBoard_Black.png";

       let logo = document.getElementById("logo");
       logo.className = "black-logo";
       $(".header-nav li a ").css({"color": "#333"});


   }else {
      document.getElementById("logo").src="./images/OnBoard_White-300x42.png";
       logo.className = "";
       $(".header-nav li a ").css({"color": "white"});
    }

};