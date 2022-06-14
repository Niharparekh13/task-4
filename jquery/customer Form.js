$(document).ready(function(){
    $('#form').validate({
      rules: {

        firstname:{
            required: true,
            minlength: 3,
            letters_only : true,
          },
          lastname:{
            required: true,
            minlength: 3,
            letters_only : true,
          },
              staddress:{
                required: true,
                minlength: 3,
                letters: true,
              },
                  city:{
                    required: true,
                    minlength: 3,
                    letters_only: true,
                  },
                      state:{
                        required: true,
                        minlength: 3,
                        letters_only: true,
                      },
                          zipcode:{
                      required: true,
                      minlength: 3,
                      zipcode: true,
                          },
                          phonenumber:{
                            required: true,
                            minlength: 3,
                            phonenumber: true,
                          },
                          email:{
                            required: true,
                            minlength: 3,
                            email: true,
                          },
                          feedback:{
                            required: true,
                          minlength: 3,
                          letters: true,
                          },
                          suggestion:{
                            required: true,
                            minlength: 3,
                            letters: true,
                          },
                          gender:{
                            required: true,
                          },
                      
                
                        
                         
                  },
                  errorPlacement: function(error, element) {
                    if ( element.attr('name') == 'gender' ) {
                        error.insertAfter("#others");
                    }
                    else { 
                        error.insertAfter( element);
                    }
                }
                });
              });
                $.validator.addMethod('latters_only', function (value) { 
                    return /^[a-zA-Z]*$/.test(value); 
                }, 'The field can only contains letters');
                $.validator.addMethod('staddress', function (value) { 
                    return /^[\w',-\\/.\s]*$/.test(value); 
                }, 'Invalid Address');
                $.validator.addMethod('zipcode', function (value) { 
                    return /[0-9]{6}$/.test(value); 
                }, 'Invalid Zip-code');
                $.validator.addMethod('phonenumber', function (value) { 
                    return /\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/.test(value); 
                }, 'Phone Number should be of given format');
                
              