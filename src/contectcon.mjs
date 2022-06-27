// import express from 'express';
const express = require('express');
var app = express();
import { createConnection, createPool } from "mysql";
import bodyParser from "body-parser";
import path from 'path';
import { Result } from 'postcss';
const __dirname = path.resolve();
const fileUpload = ('express-fileupload');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


var pool = createPool({
    connectionLimit: 30, // default = 10
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'customer_details'
});

app.get("/", function (req, res) {
    res.send("/home");
});



app.get("/register", function (req, res) {
    res.render(__dirname + 'register');
});

app.get("/login", function (req, res) {
    res.render(__dirname + '/login');
})

app.get("/contact", function (req, res) {
    res.sendFile(__dirname + '/contect.html');
})

app.get("/form1", function (req, res) {
    res.sendFile(__dirname + '/form1.html');
})

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/form2", function (req, res) {
    res.sendFile(__dirname + '/form2.html');
})

app.get("/form3", function (req, res) {
    res.sendFile(__dirname + '/form3.html');
})

app.get("*", function (req, res) {
    res.send("404 error page oops");
})








// <------ display customers ----->

app.get("/pending", function (req, res) {
    pool.getConnection(function (err, connection) {
        connection.query("SELECT basic_details.id,basic_details.cphoto,basic_details.fname,basic_details.number,phone_details.fddate,phone_details.inumber,phone_details.moname,phone_details.pamount,phone_details.finalamount,phone_details.fdown FROM basic_details,phone_details WHERE basic_details.id=customer_id", function (err, results) {
            // connection.query("SELECT * FROM basic_details",function (err, results) {
            connection.release();
            if (err) throw err


            console.log(err)

            res.render("pending", { data: results });

        });
    });

});

app.get("/paidup", function (req, res) {
    pool.getConnection(function (err, connection) {
        connection.query("SELECT basic_details.id,basic_details.cphoto,basic_details.fname,basic_details.number,phone_details.fddate,phone_details.inumber,phone_details.moname,phone_details.pamount,phone_details.finalamount,phone_details.fdown FROM basic_details,phone_details WHERE basic_details.id=customer_id", function (err, results) {
            // connection.query("SELECT * FROM basic_details",function (err, results) {
            connection.release();
            if (err) throw err


            console.log(err)

            res.render("paidup", { data: results });

        });
    });

});

app.get("/deskbord", function (req, res) {
    pool.getConnection(function (err, connection) {
        connection.query("SELECT basic_details.id,basic_details.cphoto,basic_details.fname,basic_details.number,phone_details.fddate,phone_details.inumber,phone_details.moname,phone_details.pamount,phone_details.finalamount,phone_details.fdown FROM basic_details,phone_details WHERE basic_details.id=customer_id", function (err, results) {
            // connection.query("SELECT * FROM basic_details",function (err, results) {
            connection.release();
            if (err) throw err


            console.log(err)

            res.render("deskbord", { data: results });

        });
    });

});



app.get("/allcustomer", function (req, res) {

    pool.getConnection(function (err, connection) {
        connection.query("SELECT basic_details.id,basic_details.cphoto,basic_details.fname,basic_details.number,phone_details.fddate,phone_details.inumber,phone_details.moname,phone_details.pamount,phone_details.finalamount,phone_details.fdown FROM basic_details,phone_details WHERE basic_details.id=customer_id", function (err, results) {
            // connection.query("SELECT * FROM basic_details",function (err, results) {
            connection.release();
            if (err) throw err


            console.log(err)

            res.render("allcustomer", { data: results });

        });
    });
});

// <----------------------------------  edit customer ------------------------------------>

app.get('/edit/:id', function (req, res) {

    var id = req.params.id;
    pool.getConnection(function (err, connection) {

        connection.query("select * from  basic_details JOIN phone_details ON basic_details.Id = phone_details.customer_id  WHERE basic_Details.id = ? ", [id], function (err, results) {
            if (err) throw err
            console.log((err));
            
            res.render("edit", { data: results[0] });
            
        });
    });
});


















// <------------------------- Insert into database  ---------------------->

// login form

app.post('/register', function (req, res) {
    var prophoto = req.body.prophoto;
    var fname = req.body.fname;
    var number = req.body.number;
    var username = req.body.username;
    var pass = req.body.pass;
    var conpass = req.body.conpass;


    pool.getConnection(function (err, connection) {
        connection.query("INSERT INTO admin_register(prophoto,fname,number,username,pass,conpass) VALUES('" + prophoto + "','" + fname + "','" + number + "','" + username + "','" + pass + "','" + conpass + "')", function (err, results) {
            connection.release();
            if (err) throw err;

            console.log(err);
            res.redirect('login');
        });

    });
});

app.post('/login', function (req, res) {
    var email = req.body.email;
    var password = req.body.password;


    pool.getConnection(function (err, connection) {
        connection.query("INSERT INTO login(email,password) VALUES('" + email + "','" + password + "')", function (err, rows) {
            connection.release();
            if (err) throw err;

            console.log(rows.length);
            res.send(JSON.stringify(rows));
        });
        if (err) throw err;
        console.log("Connection success");
    });
});




// contect from

app.post('/contact', function (req, res) {
    var fname = req.body.fname;
    var number = req.body.number;
    var email = req.body.email;
    var message = req.body.message;

    pool.getConnection(function (err, connection) {
        connection.query("INSERT INTO contect(fname,number,email,message) VALUES('" + fname + "','" + number + "','" + email + "','" + message + "')", function (err, results) {
            connection.release();
            if (err) throw err;

            console.log(err);
            res.send("contect");
        });
    });
});


// basic_details

app.post('/form1', function (req, res) {
    var cphoto = req.body.cphoto;
    var fname = req.body.fname;
    var mname = req.body.mname;
    var lname = req.body.lname;
    var number = req.body.number;
    var onumber = req.body.onumber;
    var email = req.body.email;
    var bdate = req.body.bdate;
    var gender = req.body.gender;
    var rfname = req.body.rfname;
    var rlname = req.body.rlname;
    var rnumber = req.body.rnumber;

    pool.getConnection(function (err, connection) {
        connection.query("INSERT INTO basic_details(cphoto,fname,mname,lname,number,onumber,email,bdate,gender,rfname,rlname,rnumber) VALUES('" + cphoto + "','" + fname + "','" + mname + "','" + lname + "','" + number + "','" + onumber + "','" + email + "','" + bdate + "','" + gender + "','" + rfname + "','" + rlname + "','" + rnumber + "')", function (err, results) {
            connection.release();
            if (err) throw err;

            console.log(err);
            res.redirect('/form2')
        });
    });
});


// document_details

app.post('/form2', function (req, res) {

    var pphoto = req.body.pphoto;
    var fadhar = req.body.fadhar;
    var badhar = req.body.badhar;
    var pan = req.body.pan;
    var check = req.body.check;
    var lbill = req.body.lbill;

    pool.getConnection(function (err, connection) {

        connection.query("INSERT INTO document_details(pphoto,fadhar,badhar,pan,check,lbill) VALUES('" + pphoto + "','" + fadhar + "','" + badhar + "','" + pan + "','" + check + "','" + lbill + "')", function (err, results) {
            connection.release();
            if (err) throw err;

            console.log(console);
            // res.send('/form3');
        });
    });
});

// phone_details

app.post('/form3', function (req, res) {
    var bphoto = req.body.bphoto;
    var inumber = req.body.inumber;
    var company = req.body.company;
    var moname = req.body.moname;
    var ram = req.body.ram;
    var pamount = req.body.pamount;
    var fdown = req.body.fdown;
    var fddate = req.body.fddate;
    var sdown = req.body.sdown;
    var sddate = req.body.sddate;
    var femi = req.body.femi;
    var fdate = req.body.fdate;
    var semi = req.body.semi;
    var sdate = req.body.sdate;
    var temi = req.body.temi;
    var tdate = req.body.tdate;
    var finalamount = req.body.finalamount;

    pool.getConnection(function (err, connection) {
        connection.query("INSERT INTO phone_details(bphoto,inumber,company,moname,ram,pamount,fdown,fddate, sdown,sddate,femi,fdate,semi, sdate,temi,tdate,finalamount) VALUES('" + bphoto + "','" + inumber + "','" + company + "','" + moname + "','" + ram + "','" + pamount + "','" + fdown + "','" + fddate + "','" + sdown + "','" + sddate + "','" + femi + "','" + fdate + "','" + semi + "','" + sdate + "','" + temi + "','" + tdate + "','" + finalamount + "')", function (err, results) {
            connection.release();
            if (err) throw err

            console.log(err);
            res.redirect('/deskbord2')

        });
    });
});


// <--------------- ADD New Customer -------------->

app.get('/add/:id', function (req, res) {
    res.render("addnew");
});



app.get('/addnew', function (req, res) {
    var bphoto = req.body.bphoto;
    var inumber = req.body.inumber;
    var company = req.body.company;
    var moname = req.body.moname;
    var ram = req.body.ram;
    var pamount = req.body.pamount;
    var fdown = req.body.fdown;
    var fddate = req.body.fddate;
    var sdown = req.body.sdown;
    var sddate = req.body.sddate;
    var femi = req.body.femi;
    var fdate = req.body.fdate;
    var semi = req.body.semi;
    var sdate = req.body.sdate;
    var temi = req.body.temi;
    var tdate = req.body.tdate;
    var finalamount = req.body.finalamount;

    pool.getConnection(function (err, connection) {
        connection.query("INSERT INTO phone_details(bphoto,inumber,company,moname,ram,pamount,fdown,fddate, sdown,sddate,femi,fdate,semi, sdate,temi,tdate,finalamount) VALUES('" + bphoto + "','" + inumber + "','" + company + "','" + moname + "','" + ram + "','" + pamount + "','" + fdown + "','" + fddate + "','" + sdown + "','" + sddate + "','" + femi + "','" + fdate + "','" + semi + "','" + sdate + "','" + temi + "','" + tdate + "','" + finalamount + "')", function (err, results) {
            connection.release();
            if (err) throw err

            console.log(err);
            res.redirect('deskbord2')

        });
    });
});



// <--------------------------------------- Sraech customer ---------------------------------------------->

app.get("/search_1", function (req, res) {

    var number = req.query.number;
    pool.getConnection(function (err, connection) {
        connection.query("SELECT * FROM basic_details JOIN phone_details ON basic_details.id = phone_details.customer_id WHERE number LIKE '%" + number + "%'  ", function (err, results) {
            connection.release();
            if (err) throw err

            res.render("deskbord2", { data: results });

            console.log(err)


        });
    });

});



app.get("/search", function (req, res) {

    var number = req.query.number;
    var moname = req.query.moname;

    pool.getConnection(function (err, connection) {
        connection.query("SELECT * FROM basic_details JOIN phone_details ON basic_details.id = phone_details.customer_id WHERE number LIKE '%" + number + "%' ", function (err, results) {
            connection.release();
            if (err) throw err

            res.render("allcustomer", { data: results });

            console.log(err)
        });


    });

});


































app.listen(2000, () => {
    console.log("Serevr runing at port : 2000 ")
});








