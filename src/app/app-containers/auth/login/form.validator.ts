class FormValidator {
    constructor() {

    }

    validate = (name, value) => {
        const validations = {
            'email': (value) => {
                const EMAIL_REGEXP =
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let validity = EMAIL_REGEXP.test(value);
                return {
                    isValid: validity,
                    errorMsg: !validity && 'Not a valid email address!'
                };
            },
            'password': (value) => {
                let isValidLength = ( value.length > 5 && value.length <= 20 );
                let isValidFormat = (/^[a-zA-Z]\w{5,19}$/).test(value);
                return {
                    isValid: isValidLength && isValidFormat,
                    errorMsg: (isValidLength) ? ((isValidFormat) ? '' : 'Password must start with a letter and should have at least one digit') : 'Password should be min 6 characters and max 20 characters long!'
                }
            }
        }
        return validations[name](value);
    }
}

export default FormValidator;