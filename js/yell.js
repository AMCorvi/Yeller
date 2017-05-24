$(function() {



    var yell = function(event){
        var yellVal = $('.yellbox').val();

        if( yellVal !== "" && (event.which === 13 || event.type === 'click')){
           
          $(advice).css({display: "none"});
          // add input content to list on click
          $('ul').prepend( "<li>" + yellVal + " <button class='delbutton'>x</button></li>"  )
          //clear input field
          return $('.yellbox').val("");


        } else if (yellVal === "" && (event.which === 13 || event.type === 'click') )
            return $(advice).css({display: 'block'})
    }


    var deleteyell = function(){
       $(this).parent().remove() 
    }

    $('.yellbutton').on('click', yell )
    $(".yellbox").on('keydown', yell)
    $('ul').on('click',".delbutton",deleteyell)

// end of document ready function...
})
