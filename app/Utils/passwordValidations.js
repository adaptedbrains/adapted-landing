import isAlpha from 'validator/lib/isAlpha';
import isEmail from 'validator/lib/isEmail';
import isNumeric from 'validator/lib/isNumeric';

class PasswordValidations {
	constructor() {
		this.errors = {
			oldpassword: null,
			newpassword: null,
			confirmpassword: null,
		};
	}

	validate(fieldName, fieldValue) {
		if (!fieldValue.trim().length) {
			this.errors[fieldName] = 'This Field is required';
			return this.errors;
		}
		switch (fieldName) {
			case 'oldpassword':
				if (fieldValue.length < 6) {
					this.errors[fieldName] =						'Minimum 6 characters password is allowed';
				} else {
					this.errors[fieldName] = null;
				}
				break;
			case 'newpassword':
				if (fieldValue.length < 6) {
					this.errors[fieldName] =						'Minimum 6 characters password is allowed';
				} else {
					this.errors[fieldName] = null;
				}
				break;
			case 'confirmpassword':
				if (fieldValue.length < 6) {
					this.errors[fieldName] =						'Minimum 6 characters password is allowed';
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
export { PasswordValidations };
