import { validate } from '../../../../utilities/validation';
import { required, email, length } from 'redux-form-validators';

const validator = validate({
    email: [required({ msg: "Email is required" }), email({ msg: 'Invalid email address' })],
    password: [required({ msg: 'Password is required' }), length({ min: 6, max: 12 })]
});

export default validator;