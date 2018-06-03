$(document).ready(function(){
    $('.error').hide();
    $('.response').hide();
  
    $("#send").click(function(){
      // validate and process form here
      $('.error').hide();
      $('.response').hide();
      
      // Validate the name
  	  var name = $("input#name").val();
  		if (name == "") {
        $("label#name_error").show();
        $("input#name").focus();
        return false;
      }
      
      // Validate the phone
      var phone = $("input#phone").val();
  		if (phone == "") {
        $("label#phone_error").show();
        $("input#phone").focus();
        return false;
      }
      
      var data = $("#form").serialize();

      $.ajax({
        type: "post",
        url: "mail.php",
        data: data,
        success: function(data){
          $('#results').html(data);
          $('.rsvp').hide();
          $('.title').hide();
          $('.response').show();
        }
      });
      return false;
    });
});