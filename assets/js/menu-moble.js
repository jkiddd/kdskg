
        $(function(){
         $('.button__humberger, .nav').on('click', function(){
                 $('.nav').toggleClass('nav__activ');             
             });
     });     
 // на закрытие в пустом окне 
     $(document).click(function(event) {
         if ($(event.target).closest(".nav__humberger").length ) return;
         $('.nav').removeClass('nav__activ');
         event.stopPropagation();
     });