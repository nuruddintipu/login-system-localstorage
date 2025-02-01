const fetchApi = async (action, formData) => {
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

export const loginUser = async (formData) => fetchApi('login', formData);
export const signUpUser = async (formData) => fetchApi('register', formData);