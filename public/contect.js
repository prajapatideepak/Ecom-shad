




$(document).ready(function () {

   

    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");


    $("#formvalidation").validate({
        rules: {
            fname: {
                required: true,
                minlength: 3,
                lettersonly: true

            },


            number: {
                required: true,
                minlength: 10,
                maxlength:10,
              

            },

            email: {
                required: true,
                email: true
            },

            password: {
                required: true,
                minlength: 8


            },

            cpassword: {
                required: true,
                equalTo: "#password"


            }



        },

        // highlight: function (element) {
        //     $(element).addClass("c1");
        // },


        // unhighlight: function (element) {
        //     $(element).removeClass("c1");
        // },

        messages: {

            fname: {
                required: "Please Enter Your First Name",
                minlength: "Please Enter At Least 3 Charactors",
                lettersonly: "Please Enter Only Letters!!"


            },




            number: {

                required: "Please Enter Your Mobile Number",
                minlength: "Please Enter Correct Number  ",
                maxlength:"Please Enter Only 10 Digit"
            },

            email: {
                required: "Please Enter Your Email ",
                minlength: "Invalid Email"


            },

            password: {

                required: "Please Enter Your Password",
                minlength: "Password Must be 8 Charactors"


            },

            cpassword: {

                required: "Please Enter Your Password",
                equalTo: "Both Password Is Not Matched!!"
            }



        },

        submitHendler: function (form) {
            form.submit();
        }



    });
});
