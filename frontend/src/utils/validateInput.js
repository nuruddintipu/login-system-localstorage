const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const validateInput = (formData, type = 'login') => {
    const errors = {};
    if(!formData.email) {
        console.log('email is required');
        errors.email = 'Email is required';
    } else if(!EMAIL_REGEX.test(formData.email)) {
        errors.email = 'Invalid email address';
    }

    if(!formData.password) {
        errors.password = 'Password is required';
    }

    if(type === 'signup') {
        if(!PASSWORD_REGEX.test(formData.password)) {
            errors.password = 'Password must be 8-16 characters, include uppercase, lowercase, number, and a special character (@$!%*?&)';
            return errors;
        }

        if(!formData.confirmPassword){
            errors.confirmPassword = 'Please confirm your password';
        } else if(formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
    }

    return errors;
}