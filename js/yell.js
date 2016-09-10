$(function() {



    $('.yellbutton').on('click', function(){
    var yellVal = $('.yellbox').val();
    var resetYell = $('.yellbox').val("");

      // add input content to list on click
      $('ul').prepend( "<li>" + yellVal + "</li>" )
      //clear input field
      (resetYell)

    })

// end of document ready function...
})
