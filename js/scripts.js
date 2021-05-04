
$(function(){
    //active class 
    $('.menus div .title').on('click', function(){
        $(this).addClass('active').parent('div').siblings().children('.title').removeClass('active')
        console.log('clicked basically');
    })



    //search input 
    let storage=''
    $('.search input').on('focus', function(){ //when focus
        storage=this.getAttribute('placeholder') //store attr in var storage
        $(this).attr('placeholder','') // empty placehoder 
        $(this).css({
            border:'1px solid #339AF0' //add border
        })
        $('.search i').addClass('hide') //hide search icon
  
    }).on('blur', function(){ //when blur 
        $(this).attr('placeholder',storage) //set arrt
        $('.search i').removeClass('hide') //show icon search
        $(this).css({
            border:'1px solid #111' //remove active border
        })
    })


    //toggel navbar in small screens 
    $('.burger').on('click', function(){
        $('.my_row').slideToggle()
    })
})