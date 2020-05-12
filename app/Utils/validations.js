import isAlpha from "validator/lib/isAlpha";
import isEmail from "validator/lib/isEmail";
import isNumeric from "validator/lib/isNumeric";
import toDate from "validator/lib/toDate";

class Validations {
  constructor() {
    this.errors = {
      city: null,
      className: null,
      dob: null,
      email: null,
      otp: null,
      newdivision: null,
      emailForPopUp: null,
      lastname: null,
      name: null,
      full_name: null,
      password: null,
      phone: null,
      query: null,
      relationship: null,
      second_password: null
    };
  }

  validate(fieldName, fieldValue) {
    console.log(fieldValue + " " + fieldName);
    if (
      fieldValue == null ||
      fieldValue == undefined ||
      !fieldValue.trim().length
    ) {
      let errorMessageFieldName = fieldName;
      if (fieldName == "lastname") {
        errorMessageFieldName = "last name";
      }
      if (fieldName == "countryCode") {
        errorMessageFieldName = "country code";
      }
      if (fieldName == "className") {
        errorMessageFieldName = "class";
      }
      if (fieldName == "full_name") {
        errorMessageFieldName = "full name";
      }
      if (fieldName == "newdivision") {
        errorMessageFieldName = "division";
      }
      if (fieldName == "emailForPopUp") {
        errorMessageFieldName = "email";
      }
      if (fieldName == "otp") {
        errorMessageFieldName = "otp";
      }
      this.errors[fieldName] = `Please enter your ${errorMessageFieldName}`;
      return this.errors;
    } else {
      this.errors[fieldName] = null;
    }
    switch (fieldName) {
      case "relationship":
      case "name":
        if (!isAlpha(fieldValue)) {
          this.errors[fieldName] =
            "Space and special characters (like @,#,$,%) are not allowed";
        } else {
          this.errors[fieldName] = null;
        }
        break;
      case "lastname":
        var regex = /^[a-zA-Z][a-zA-Z\. ]*$/;
        if (!regex.test(fieldValue)) {
          this.errors[fieldName] =
            "Special characters (like @,#,$,%) are not allowed";
        } else {
          this.errors[fieldName] = null;
        }
        break;
      case "full_name":
        var regex = /^[a-zA-Z][a-zA-Z\. ]*$/;
        if (!regex.test(fieldValue)) {
          this.errors[fieldName] =
            "Special characters (like @,#,$,%) are not allowed";
        } else {
          this.errors[fieldName] = null;
        }
        break;
      case "city":
        var regex = /^[a-zA-Z ]*$/;
        if (!regex.test(fieldValue && fieldValue.trim())) {
          this.errors[fieldName] =
            "Special characters (like @,#,$,$) and numbers are not allowed";
        } else {
          this.errors[fieldName] = null;
        }
        break;
      case "dob":
        this.errors[fieldName] = !toDate(fieldValue)
          ? "Please enter a valid date of birth"
          : null;
        break;
      case "className":
        if (fieldValue.toString().trim().length) {
          this.errors[fieldName] = null;
        }
        break;
      case "school":
        if (fieldValue.trim().length) {
          this.errors[fieldName] = null;
        }
        break;
      case "email":
        if (!isEmail(fieldValue)) {
          this.errors[fieldName] =
            "Please enter your email id in the format abcd@example.com";
        } else {
          this.errors[fieldName] = null;
        }
        break;
      case "emailForPopUp":
        if (!isEmail(fieldValue)) {
          this.errors[fieldName] =
            "Please enter your email id in the format abcd@example.com";
        } else if (fieldValue.toLowerCase().indexOf("nurturelabs.co") >= 0) {
          this.errors[fieldName] = "Sorry, please use your personal email";
        } else {
          this.errors[fieldName] = null;
        }
        break;
      case "division":
      case "phone":
        if (
          !isNumeric(fieldValue) ||
          fieldValue == "0000000000" ||
          fieldValue == "9999999999"
        ) {
          this.errors[fieldName] = "Please enter a valid phone number";
        } else if (fieldValue[0] == "0") {
          this.errors[fieldName] = "Phone number can not start from 0";
        } else {
          this.errors[fieldName] = null;
        }
        break;
      case "second_password":
      case "password":
        if (fieldValue.indexOf(" ") !== -1) {
          this.errors[fieldName] =
            "Your password should contain a minimum of 6 characters. Please do not use spaces in the password.";
        } else if (fieldValue.length < 6) {
          this.errors[fieldName] =
            "Your password should contain a minimum of 6 characters. Please do not use spaces in the password.";
        } else {
          this.errors[fieldName] = null;
        }
        break;
      case "confirmPassword":
        if (fieldValue.indexOf(" ") !== -1) {
          this.errors[fieldName] =
            "Your password should contain a minimum of 6 characters. Please do not use spaces in the password.";
        } else if (fieldValue.length < 6) {
          this.errors[fieldName] =
            "Your password should contain a minimum of 6 characters. Please do not use spaces in the password.";
        } else {
          this.errors[fieldName] = null;
        }
        break;
      case "query":
        if (fieldValue.trim().length) {
          this.errors[fieldName] = null;
        }
        break;
      case "queryText":
        if (fieldValue.trim().length) {
          this.errors[fieldName] = null;
        }
        break;
      case "address1":
        if (fieldValue.trim().length) {
          this.errors[fieldName] = null;
        }
        break;
      case "pincode":
        if (!isNumeric(fieldValue)) {
          this.errors[fieldName] =
            "Only numeric values are allowed for this field";
        } else if (fieldValue.length !== 6) {
          this.errors[fieldName] = "Pincode has to be 6 digits long";
        } else {
          this.errors[fieldName] = null;
        }
        break;
      case "emailPhone":
        if (isNumeric(fieldValue)) {
          if (
            !isNumeric(fieldValue) ||
            fieldValue == "0000000000" ||
            fieldValue == "9999999999"
          ) {
            this.errors[fieldName] = "Please enter a valid phone number";
          } else if (fieldValue[0] == "0") {
            this.errors[fieldName] = "Phone number can not start from 0";
          } else if (fieldValue.length !== 10) {
            this.errors[fieldName] = "Phone number should have only 10 digits";
          } else {
            this.errors[fieldName] = null;
          }
        } else if (!isEmail(fieldValue)) {
          this.errors[fieldName] =
            "Please enter your email id in the format abcd@example.com";
        } else {
          this.errors[fieldName] = null;
        }
        break;
    }
    return this.errors;
  }

  allNullKeyValue(object) {
    const keys = Object.keys(object);
    const keysLength = keys.length;
    for (let i = 0; i < keysLength; i++) {
      if (object[keys[i]]) {
        return false;
      }
    }
    return true;
  }
}
export { Validations };
