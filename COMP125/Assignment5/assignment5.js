
"use strict";

 $(document).ready(function() {

    $.validator.addMethod("ageRange", function(value, element) {
      let age = parseInt(value, 10);
      return this.optional(element) || (age >= 18 && age <= 119);
    }, "Age must be between 18 and 119");

    $.validator.addMethod("provinceCA", function(value, element) {
      return this.optional(element) || /^(AB|BC|MN|ON|QC|SK)$/i.test(value);
    }, "Please enter QC, ON, MN, SK, AB or BC");

    $.validator.addMethod("postCode", function(value, element) {
        return this.optional(element) || 
            /^[ABCDEFGHIJKLMNOPQRSTUVWXYZ]\d[ABCDEFGHIJKLMNOPQRSTUVWXYZ]( )?\d[ABCDEFGHIJKLMNOPQRSTUVWXYZ]\d$/i.test(value);
    }, "Please specify a valid Canadian postal code.");

    $.validator.addMethod("emailWithDot", function(value, element) {
        var emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return this.optional(element) || emailRegEx.test(value);
    }, "Please enter a valid email address with a domain dot (e.g., .com)");

    $("#signin").validate({
        rules: {
          FirstName: { required: true },
          LastName: { required: true },
          Address: { required: true },
          City: { required: true },
          PostalCode: { 
            required: true,
            postCode: true
            },
          Province: { 
            required: true,
            provinceCA: true
            },
          Age: { 
            required: true,
            number: true,
            ageRange: true
            },
          Password1: { required: true },
          Password2: { 
            required: true,
            equalTo: "#inputPassword1"
            },
          Email: {
            required: true,
            email: true,
            emailWithDot: true
          }
        },
        messages: {
          FirstName: { required: "Jquery message: Please enter your first name" },
          LastName: { required: "Jquery message: Please enter your last name" },
          Address: { required: "Jquery message: Please enter your address" },
          City: { required: "Jquery message: Please enter your city" },
          PostalCode: { 
            required: "Jquery message: Please enter your postal code",
            postCode: "Jquery message: format must be A0A0A0 or A0A 0A0" },
          Province: { 
            required: "Jquery message: Please enter your province",
            provinceCA: "Jquery message: one of QC, ON, MN, SK, AB, BC"},
          Age: { 
            required: "Jquery message: Please enter your age",
            number: "Jquery message: age should be a number",
            ageRange: "Age should be equal to or more than 18 and less than 120"
            },
          Password1: { required: "Jquery message: Please enter password" },
          Password2: { 
            required: "Jquery message: Field required",
            equalTo: "Passwords don't match"
            },
          Email: {
            required: "Jquery message: Please enter your email",
            email: "Jquery message: Please enter a valid email address with @",
            emailWithDot: "Jquery message: Email address should contain a dot"
          }
        },
        submitHandler: function(form) {
            window.alert("Thank you for providing your information successfully, it will be now sent for processing.");
            form.submit();
            }
        });
    });

