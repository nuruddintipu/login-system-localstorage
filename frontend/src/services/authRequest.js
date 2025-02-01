const authRequest = async (action, formData) => {
    const response = await fetch('http://localhost:8000/api/auth.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            action: action,
            email: formData.email,
            password: formData.password
        })
    });

    return response.json();
};

export const loginUser = async (formData) => authRequest('login', formData);
export const signUpUser = async (formData) => authRequest('register', formData);


export const deleteUser = async (user) => {
    const parsedUser = JSON.parse(user);
    const response = await fetch('http://localhost:8000/api/auth.php', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            action: 'delete',
            guid: parsedUser.guid,
            email: parsedUser.email
        })
    });
    return response.json();
}