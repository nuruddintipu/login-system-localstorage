export const validateInput = (email, password) => {
    const errors = {};

    if(!email) {
        errors.email = 'Email is required';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address';
    }

    if(!password) {
        errors.password = 'Password is required';
    } else if(password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }
    return errors;
}