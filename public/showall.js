$(document).ready(function () {



    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");









    $("#form").validate({


        rules: {

            // form 1

            cphoto: {
                required: true,
            },

            fname: {
                required: true,
                minlength: 3,
                lettersonly: true
            },

            miname: {
                lettersonly: true
            },

            lname: {
                required: true,
                minlength: 3,
                lettersonly: true
            },

            number: {
                required: true,
                minlength: 10,
                maxlength: 10,


            },
            onumber: {
                minlength: 10,
                maxlength: 10,

            },

            email: {
                required: true,
                email: true
            },

            bdate: {
                require: true

            },

            "gender[]": {
                require: true,

            },

            rfname: {
                required: true,
                minlength: 3,
                lettersonly: true
            },

            rlname: {
                required: true,
                minlength: 3,
                lettersonly: true
            },

            rnumber: {
                required: true,
                maxlength: 10
            },


            // form 2

            pphoto: {
                required: true,

            },

            fadhar: {
                required: true,

            },

            badhar: {
                required: true,

            },

            pan: {
                required: true,

            },

            //  form 3


            bphoto: {
                required: true

            },

            inumber:{
                required:true
            },

            company: {
                required: true
            },

            mname: {
                required: true

            },

            ram: {
                required: true,

            },

           pamount:{
            required:true
           },

            fdown: {
                required: true
            },

            fddate: {
                required: true
            },
            sdown: {
                required: true
            },

            sddate: {
                required: true
            },
            femiamount: {
                required: true
            },

            femidate: {
                required: true
            },
            semiamount: {
                required: true
            },

            semidate: {
                required: true
            },
            temiamount: {
            },

            temidate: {

            },
            famount: {
                required: true

            },

            fdate: {
                required: true
            },

        },

        // highlight: function (element) {
        //     $(element).addClass("c1");
        // },


        // unhighlight: function (element) {
        //     $(element).removeClass("c1");
        // },

        messages: {

            //form 1

            cphoto: {
                required: "Please upload file."

            },

            fname: {
                required: "Please Enter  First Name",
                minlength: "Please Enter At Least 3 Charactors",
                lettersonly: "Please Enter Only Letters!!"


            },

            miname: {
                lettersonly: "Please Enter Only Letters!!"


            },

            lname: {
                required: "Please Enter  First Name",
                minlength: "Please Enter At Least 3 Charactors",
                lettersonly: "Please Enter Only Letters!!"


            },


            number: {

                required: "Please Enter  Mobile Number",
                maxlength: "Please Enter Only 10 Digit",
                minlength:"Please Enter Valid Number"

            },

            onumber: {
                minlength:"Please Enter Valid Number",
                maxlength: "Please Enter Only 10 Digit"

            },

            email: {
                required: "Please Enter Email Adress",
                email: "Please Enter Correct Email"
            },


            bdate: {
                required: "Please Select Date ",


            },

            "gender[]": {
                required: "Please Select Gender"
            },

            rfname: {
                required: "Please Enter  First Name",
                minlength: "Please Enter At Least 3 Charactors",
                lettersonly: "Please Enter Only Letters!!"
            },

            rlname: {
                required: "Please Enter  First Name",
                minlength: "Please Enter At Least 3 Charactors",
                lettersonly: "Please Enter Only Letters!!"

            },

            rnumber: {
                required: "Please Enter  Mobile Number",
                maxlength: "Please Enter Only 10 Digit"
            },


            // form 2

            pphoto: {
                required: "Please upload Passport Photo"

            },

            fadhar: {
                required: "Please upload Adhar Card Front Side"

            },

            badhar: {
                required: "Please upload Adhar Card Back Side"

            },

            pan: {
                required: "Please upload PAN Card"

            },


            // form 3

            bphoto: {
                required: "Please upload Bill Photo"

            },

            inumber:{
                required:"Enter Invoice Number"
            },

            company:{

                required:"Please Select Company Name ",

            } ,


            mname: {
                required: "Please Enter Modale Name"

            },

            ram: {
                required: "Please Select RAM"

            },

           pamount:{
                required:"Enter Phone Amount"
           },

            fdown: {
                required: "Please Enter First Down Payment"
            },

            fddate: {
                required: " Select First Down Payment Date"
            },
            sdown: {
                required: "Please Enter Secound  Down Payment"
            },

            sddate: {
                required: " Select Secound Down Payment Date"
            },
            femiamount: {
                required: "Enter First EMI Amount"
            },

            femidate: {
                required: "Select First EMI Date"
            },
            semiamount: {
                required: "Enter Secound EMI Amount"
            },

            semidate: {
                required: "Select Secound EMI Date"
            },
            temiamount: {
            },

            temidate: {
            },
            famount: {
                required: "Enter Final Amount"
            },

            fdate: {
                required: "Select Final Date"
            },






        },

        submitHendler: function (form) {
            form.submit();
        }




    });
});





















