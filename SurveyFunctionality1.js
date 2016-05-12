$(document).ready(function(){
    $('#947_4840_4_19194').parent().hide();
    console.log('js is working');
    $('#947_4840_3_19193').on('change', function() {
      if ( this.value == 'Yes') {
        $('#947_4840_4_19194').parent().show();
        console.log('i've entered the If');
      }
      else {
      }
    });
  });
