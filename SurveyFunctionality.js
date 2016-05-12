$(document).ready(function(){
    $('#947_4840_4_19194').parent().hide();
    
    $('#947_4840_3_19193').on('change', function() {
      if ( this.value == 'yes') {
        $('#947_4840_4_19194').parent().show();
      }
      else {
      }
    });
  });
