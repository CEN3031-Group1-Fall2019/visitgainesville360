import React from 'react';
import isEmpty from 'is-empty';

export const validateLoginInput = function(input, cb) {
	var errors = {};
	var isValid = true;

	if (isEmpty(input.password)) {
		isValid = false;
		errors.password = "A password is required";
	}

	var emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	if (isEmpty(input.email)) {
		isValid = false;
		errors.email = "Email is required";
	} else if (!emailRegex.test(input.email)) {
		isValid = false;
		errors.email = "Enter a valid email";
	}

	return cb(errors, isValid);
}

export const validateRegisterInput = function(input, cb) {
	var errors = {};
	var isValid = true;

	if (isEmpty(input.name)) {
		isValid = false;
		errors.name = "Business name is required";
	}

	var emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	if (isEmpty(input.email)) {
		isValid = false;
		errors.email = "Email is required";
	} else if (!emailRegex.test(input.email)) {
		isValid = false;
		errors.email = "Enter a valid email";
	}

	var pwdRegex = new RegExp((/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/));
	if (isEmpty(input.password)) {
		isValid = false;
		errors.password = "A password is required";
	} else if (!pwdRegex.test(input.password)) {
		isValid = false;
		errors.password = ["Password must:",
						   <br />,
						   "- have at least 8 characters",
						   <br />,
						   "- contain 1 special character (@#$%&)",
						   <br />,
						   "- contain 1 number, 1 lowercase, 1 uppercase"];
	}

	if (!input.password.match(input.password2)) {
		isValid = false;
		errors.password2 = "Passwords must match";
	}

	return cb(errors, isValid);
}