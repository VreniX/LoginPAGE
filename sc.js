jQuery(document).ready(function($){
    $(".not-registered").click(function(){
      $("#register").show();
      $("#login").hide();
    });
    
    
    $(".forgot-password a").click(function(){
      $("#forgot-password").show();
      $("#register").hide();
      $("#login").hide();
    });
    
    
    $(".already-registered").click(function(){
      $("#login").show();
      $("#register").hide();
      $("#forgot-password").hide();
    })
  });