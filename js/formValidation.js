//Hiding All Error Spam
$("#error_name").hide();
$("#error_mail").hide();
$("#error_dob").hide();
$("#error_address").hide();
$("#error_file").hide();
$("#error_ph").hide();
$("#error_uname").hide();
$("#error_pass").hide();
$("#error_repass").hide();

//Creating Variables With False Value
var error_nameV = false;
var error_mailV = false;
var error_dobV = false;
var error_addressV = false;
var error_fileV = false;
var error_phV = false;
var error_unameV = false;
var error_passV = false;
var error_repassV = false;

//FocusOut Function To Check Error
$("#form_name").focusout(function () {
  check_name();
});

$("#form_mail").focusout(function () {
  check_mail();
});

$("#form_dob").focusout(function () {
  check_dob();
});

$("#form_address").focusout(function () {
  check_address();
});

$("#form_file").focusout(function () {
  check_file();
});

$("#form_ph").focusout(function () {
  check_ph();
});

$("#form_uname").focusout(function () {
  check_uname();
});

$("#form_pass").focusout(function () {
  check_pass();
});

$("#form_repass").focusout(function () {
  check_repass();
});

//Function To Check Name
function check_name() {
  var pattern = /^[a-zA-Z]*$/;
  var name = $("#form_name").val();
  if (pattern.test(name) && name !== "") {
    $("#error_name").hide();
    $("#form_name").css("border-bottom", "2px solid #00ff11");
  } else if (name == "") {
    $("#error_name").html("Fill The Form");
    $("#error_name").show();
    $("#form_name").css("border-bottom", "2px solid red");
    error_nameV = true;
  } else {
    $("#error_name").html("Should Contain Only Characters");
    $("#error_name").show();
    $("#form_name").css("border-bottom", "2px solid red");
    error_nameV = true;
  }
}

//Function To Check Mail
function check_mail() {
  var pattern = /^([a-z A-Z 0-9_\-\.])+\@([a-z A-Z 0-9_\-])+\.([a-z A-Z]{2,4}).$/;
  var mail = $("#form_mail").val();
  if (pattern.test(mail) && mail !== "") {
    $("#error_mail").hide();
    $("#form_mail").css("border-bottom", "2px solid #00ff11");
  } else if (mail == "") {
    $("#error_mail").html("Fill The Form");
    $("#error_mail").show();
    $("#form_mail").css("border-bottom", "2px solid red");
    error_mailV = true;
  } else {
    $("#error_mail").html("Invalid Mail ID");
    $("#error_mail").show();
    $("#form_mail").css("border-bottom", "2px solid red");
    error_mailV = true;
  }
}

//Function To Check Date of Birth
function check_dob() {
  var dob = $("#form_dob").val();
  if (dob !== "") {
    $("#error_dob").hide();
    $("#form_dob").css("border-bottom", "2px solid #00ff11");
  } else {
    $("#error_dob").html("Fill The Form");
    $("#error_dob").show();
    $("#form_dob").css("border-bottom", "2px solid red");
    error_dobV = true;
  }
}

//Function To Check Address
function check_address() {
  var address = $("#form_address").val();
  if (address !== "") {
    $("#error_address").hide();
    $("#form_address").css("border-bottom", "2px solid #00ff11");
  } else {
    $("#error_address").html("Fill The Form");
    $("#error_address").show();
    $("#form_address").css("border-bottom", "2px solid red");
    error_addressV = true;
  }
}

//Function To Check File Upload
function check_file() {
  var file = $("#form_file").val();
  if (file !== "") {
    $("#error_file").hide();
    $("#form_file").css("border-bottom", "2px solid #00ff11");
  } else {
    $("#error_file").html("Choose a File");
    $("#error_file").show();
    $("#form_file").css("border-bottom", "2px solid red");
    error_fileV = true;
  }
}

//Function To Check Phone Number
function check_ph() {
  var pattern = /^([0-9_\-]{10,13})+$/;
  var ph = $("#form_ph").val();
  if (pattern.test(ph) && ph !== "") {
    $("#error_ph").hide();
    $("#form_ph").css("border-bottom", "2px solid #00ff11");
  } else if (ph == "") {
    $("#error_ph").html("Fill The Form");
    $("#error_ph").show();
    $("#form_ph").css("border-bottom", "2px solid red");
    error_phV = true;
  } else {
    $("#error_ph").html("Invalid Phone Number");
    $("#error_ph").show();
    $("#form_ph").css("border-bottom", "2px solid red");
    error_phV = true;
  }
}

//Function To Check User Name
function check_uname() {
  var pattern = /^[a-z]*$/;
  var uname = $("#form_uname").val();
  if (pattern.test(uname) && uname !== "") {
    $("#error_uname").hide();
    $("#form_uname").css("border-bottom", "2px solid #00ff11");
  } else if (uname == "") {
    $("#error_uname").html("Fill The Form");
    $("#error_uname").show();
    $("#form_uname").css("border-bottom", "2px solid red");
    error_unameV = true;
  } else {
    $("#error_uname").html("Should Contain Only Small Characters");
    $("#error_uname").show();
    $("#form_uname").css("border-bottom", "2px solid red");
    error_unameV = true;
  }
}

//Function To Check Password
function check_pass() {
  var pass = $("#form_pass").val();
  if (pass !== "") {
    $("#error_pass").hide();
    $("#form_pass").css("border-bottom", "2px solid #00ff11");
  } else {
    $("#error_pass").html("Fill The Form");
    $("#error_pass").show();
    $("#form_pass").css("border-bottom", "2px solid red");
    error_passV = true;
  }
}

//Function To Check Re-Type Password
function check_repass() {
  var repass = $("#form_repass").val();
  var pass = $("#form_pass").val();
  if (pass !== repass) {
    $("#error_repass").html("Password Miss Match");
    $("#error_repass").show();
    $("#form_repass").css("border-bottom", "2px solid red");
    error_repassV = true;
  } else if (repass == "") {
    $("#error_repass").html("Fill The Form");
    $("#error_repass").show();
    $("#form_repass").css("border-bottom", "2px solid red");
    error_repassV = true;
  } else {
    $("#error_repass").hide();
    $("#form_repass").css("border-bottom", "2px solid #00ff11");
  }
}

//Submit Button Validation
$("#form_reg").submit(function () {
  error_nameV = false;
  error_mailV = false;
  error_dobV = false;
  error_addressV = false;
  error_fileV = false;
  error_phV = false;
  error_unameV = false;
  error_passV = false;
  error_repassV = false;

  check_name();
  check_mail();
  check_dob();
  check_address();
  check_file();
  check_ph();
  check_uname();
  check_pass();
  check_repass();

  if (
    error_nameV === false &&
    error_mailV === false &&
    error_dobV === false &&
    error_addressV === false &&
    error_fileV === false &&
    error_phV === false &&
    error_unameV === false &&
    error_passV === false &&
    error_repassV === false
  ) {
    alert("Registration Successfull");
    return true;
  } else {
    alert("Fill The Form Correctly");
    return false;
  }
});
