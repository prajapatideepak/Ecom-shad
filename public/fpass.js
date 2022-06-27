$(document).ready(function () {

    // for password content
    var upparcase = new RegExp('[A-Z]');
    var number = new RegExp('[0-9]');
    var opass = $("#opass");

    $("#opass,#npass,#cnpass").keyup(function () {
        var fpassword = $(this).html()
        var Password = $(this).val()


        if (Password.match(upparcase)) {

            $(".letter").css("color", "green");
            $("#wrong_letter").css("display", "none");

            $("#correct_letter").css("display", "block", "color", "green");
        } else {
            $(".letter").css("color", "red");
            $("#wrong_letter").css("display", "block", "color", "red");
            $("#correct_letter").css("display", "none");
        }
        if (Password.match(number)) {
            $(".number").css("color", "green");
            $("#wrong_number").css("display", "none");
            $("#correct_number").css("display", "block", "color", "green");
        } else {
            $(".number").css("color", "red");
            $("#wrong_number").css("display", "block", "color", "red");
            $("#correct_number").css("display", "none");

        }

        if (Password.length < 8) {
            $(".charactors").css("color", "red");
            $("#wrong_charactor").css("display", "block", "color", "red");
            $("#correct_charactor").css("display", "none");
           
        } else {
            $(".charactors").css("color","green");
            $("#correct_charactor").css("display", "block", "color","green");
            $("#wrong_charactor").css("display", "none");
        }

        if (Password.length > 8) {
            $(".charactors").css("color", "red");
            $("#wrong_charactor").css("display", "block", "color", "red");
            $("#correct_charactor").css("display", "none");
           
        } else {
            $(".charactors").css("color","green");
            $("#correct_charactor").css("display", "block", "color","green");
            $("#wrong_charactor").css("display", "none");
        }


        if (Password.length >= 8) {
            $(".charactors").css("color","green");
            $("#correct_charactor").css("display", "block", "color","green");
            $("#wrong_charactor").css("display", "none");
        } else {
            $(".charactors").css("color", "red");
            $("#wrong_charactor").css("display", "block", "color", "red");
            $("#correct_charactor").css("display", "none");
        }









    });

    // for show/hide password

    var old_password = $("#opass")
    $("#old-eye").click(function () {
        if (old_password.prop('type') == "password") {
            $(this).addClass("fa-eye-slash");
            old_password.attr("type", "text")
        } else {
            $(this).removeClass("fa-eye-slash");
            old_password.attr("type", "password")

        }
    });

    var new_password = $("#npass")
    $("#new-eye").click(function () {
        if (new_password.prop('type') == "password") {
            $(this).addClass("fa-eye-slash");
            new_password.attr("type", "text")
        } else {
            $(this).removeClass("fa-eye-slash");
            new_password.attr("type", "password")

        }
    });

    var con_password = $("#cnpass")
    $("#con-eye").click(function () {
        if (con_password.prop('type') == "password") {
            $(this).addClass("fa-eye-slash");
            con_password.attr("type", "text")
        } else {
            $(this).removeClass("fa-eye-slash");
            con_password.attr("type", "password")

        }
    });







    $("#forgot-form").validate({


        rules: {

            opass: {
                required: true,
                maxlength: 8

            },

            npass: {
                required: true,
                maxlength: 8
            },

            cnpass: {
                required: true,
                equalTo: "#npass",
                maxlength: 8



            },

        },

        highlight: function (element) {
            $(element).addClass("c1");
        },


        unhighlight: function (element) {
            $(element).removeClass("c1");
        },

        messages: {

            opass: {
                required: "Please Enter Old Password",
                maxlength: "password length Only 8 Charactors "

            },

            npass: {
                required: "Please Enter New Password",
                maxlength: "password length Only 8 Charactors "

            },

            cnpass: {
                required: "Please Enter Conform New Password",
                equalTo: "Both Password Is Not Matched!!",
                maxlength: "password length Only 8 Charactors "




            },






        },

        submitHendler: function (form) {
            form.submit();
        }




    });





});