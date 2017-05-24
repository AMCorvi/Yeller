$(function() {



    var yell = function(event){
        var yellVal = $('.yellbox').val();

        if( yellVal !== "" && (event.which === 13 || event.type === 'click')){
           
          $(advice).css({display: "none"});
          // add input content to list on click
          $('ul').prepend( "<li>" + yellVal + "</li>" )
          //clear input field
          return $('.yellbox').val("");


        } else if (yellVal === "" && (event.which === 13 || event.type === 'click') )
            return $(advice).css({display: 'block'})
        }

    $('.yellbutton').on('click', yell )
    $(".yellbox").on('keydown', yell)

// end of document ready function...
})
