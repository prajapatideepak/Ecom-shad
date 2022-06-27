
// var btn_hambug = document.getElementById('btn_hamburg');

function showmenu() {
    $('#menu').css({ "left": "0", "width": "270px" });
}
$('document').ready(function () {

    $('#close-btn').click(function () {
        $('#menu').css("left", "-272px");
    })

})

function MyFunction() {
    var dropcontent = document.querySelector('.drop-content');
    dropcontent.classList.toggle('dropdown-toggle');
}

//<--------------------   Date Field  -------------------------->

config = {
    enableTime: true,
    dateFormat: "d-m-y",
}
    -
    flatpickr("#fddate,#sddate,#fdate,#sdate,#tdate,#bdate", {});







    // <--------------------  validation  ------------------------->

    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");


    $("#form").validate({


        rules: {

            // form3 details validation 

            bphoto: {
                required: true

            },

            inumber: {
                required: true
            },

            company: {
                required: true
            },

            moname: {
                required: true

            },

            ram: {
                required: true

            },

            pamount: {
                required: true
            },

            fdown: {
                required: true
            },

            fddate: {
                required: true
            },
            sdown: {
            },

            sddate: {

            },
            femi: {
                required: true
            },

            fdate: {
                required: true
            },
            semi: {
                required: true
            },

            sdate: {
                required: true
            },
            temi: {
            },

            tdate: {

            },
            finalamount: {
                required: true

            },

            // form 1 details vALIDATION

            cphoto: {
                required: true,

            },


            fname: {
                required: true,
                minlength: 3,
                lettersonly: true
            },

            mname: {
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
                require: true,



            },

            gender: {
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
                maxlength: 10,
                minlength: 10
            }








        },

       

        messages: {


            // FORM 3 DETAILS VALIDATION


            bphoto: {
                required: "Please upload Bill Photo"

            },

            inumber: {
                required: "Enter Invoice Number"
            },

            company: {
                required: "Please Select Company Name "
            },



            moname: {
                required: "Please Enter Modale Name"

            },

            ram: {
                required: "Please Select RAM"

            },


            pamount: {
                required: "Enter Phone Amount"
            },


            fdown: {
                required: "Please Enter First Down Payment"
            },

            fddate: {
                required: " Select First Down Payment Date"
            },

            femi: {
                required: "Enter First EMI Amount"
            },

            fdate: {
                required: "Select First EMI Date"
            },
            semi: {
                required: "Enter Secound EMI Amount"
            },

            sdate: {
                required: "Select Secound EMI Date"
            },
            temi: {
                required: "Enter Third EMI Amount"

            },

            tdate: {
                required: "Select Third EMI Date"

            },
            finalamount: {
                required: "Enter Final Amount"
            },

            // FORM 1 DETAILS VALIDATION

            cphoto: {
                required: "Please upload Customer Photo"

            },

            fname: {
                required: "Please Enter  First Name",
                minlength: "Please Enter At Least 3 Charactors",
                lettersonly: "Please Enter Only Letters!!",
            },

            mname: {
                lettersonly: "Please Enter Only Letters!!"
            },

            lname: {
                required: "Please Enter  Last Name",
                minlength: "Please Enter At Least 3 Charactors",
                lettersonly: "Please Enter Only Letters!!"
            },

            number: {

                required: "Please Enter  Mobile Number",
                maxlength: "Please Enter Only 10 Digit",
                minlength: "Please Enter Valid Number"
            },

            onumber: {
                minlength: "Please Enter Valid Number",

                maxlength: "Please Enter Only 10 Digit"
            },

            email: {
                required: "Please Enter Email Adress",
                email: "Please Enter Correct Email"
            },

            bdate: {
                required: "Please Select Date ",

            },

            gender: {
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
                maxlength: "Please Enter Only 10 Digit",
                minlength: "Please Enter Valid Number",
            }







        },

        submitHendler: function (form) {
            form.submit();
        }




    });















           



