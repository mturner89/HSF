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
