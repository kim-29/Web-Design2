$(document).ready(function(){
    $('header .menu i').click(function(){
        $(this).toggleClass('fa-times');
        $('header .navbar').toggleClass('active');
    })
    
    $('header .login').click(function(){
        $('.login-form').addClass('active');
    })
    
    $('.login-form i').click(function(){
        $('.login-form').removeClass('active');
    })
    
    $(window).on('load scroll',function(){
        $('header .menu i').removeClass('fa-times');
        $('header .navbar').removeClass('active');
        $('.login-form').removeClass('active');
        
        $('section').each(function(){
        let top = $(window).scrollTop();
        let height = $(this).height();
        let offset= $(this).offset().top;
        let id = $(this).attr('id');
        if(top >= offset && top < height + offset){
            $('.navbar ul li a').removeClass('active');
            $('.navbar').find('[href="#'+id+'"]').addClass('active');
        }
    })
    })
    
    
})