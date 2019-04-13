/*function name(){
    //var nav=document.querySelector(".list-of-bar");
    //nav.classList.toggle("bar-active");
    $(document).ready(function() { 
        $('.list-of-bar').addClass('bar-active');
        $('.bar-active').slideToggle();
        
        
       var c= $('.list-of-bar').css('display');
        console.log(c);
        console.log($('.list-of-bar').attr('class'));

            
     })
}
        

$(window).resize(function(){
    if($(window).width()>=653 ||$(window).matchMedia('(max-width: 767px)').matches)
    {console.log('hey')
    $('.list-of-bar').removeClass('bar-active');
    console.log($('.list-of-bar').attr('class'));
    var c= $('.list-of-bar').css('display');
        console.log(c);
      var avai=$('.list-of-bar').css('display');
    if(avai=='none')
    {
        $('.list-of-bar').css('display','flex')
    }    

    }
    else{
        document.querySelector("#menu-icon").addEventListener("click",name) 
    }
})
*/

function name(){
  $(document).ready(function() { 
        $('.list-of-bar').slideToggle();
   })
}
   function menufunction(){
        $('.list-of-bar').css('display','none');
        document.querySelector("#menu-icon").addEventListener("click",name); 

    }
    if(window.matchMedia('(max-width: 653px)').matches)
        {   
            menufunction();
    }
    $(window).resize(function(){
    if($(window).width()>=653)
        { $('.list-of-bar').css('display','flex');
            $('.myvideo').css({'width':'auto','height':'auto'});
        }  
    else
    {
        menufunction();
    }     
})
