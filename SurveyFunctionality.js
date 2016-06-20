$(document).ready(function(){
    $('#947_4840_4_19194').closest('td').hide();
    
    $('#947_4840_3_19193').on('change', function() {
      if ( this.value == 'Yes') {
        $('#947_4840_4_19194').closest('td').show();
      }
      else {
          $('#947_4840_4_19194').closest('td').hide();
      }
    });
  });





/*
$(document).ready(function(){
    $('#947_5061_9_19577_1').closest('td').css("visibility", "hidden");
    $('#947_5061_9_19577_3').closest('td').css("visibility", "hidden");
    $('#947_5061_9_19577_6').closest('td').css("visibility", "hidden");   
  });
*/
