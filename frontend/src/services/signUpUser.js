export const signUpUser = async (formData) => {
    const response = await fetch("http://localhost:8000/api/auth.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            action: "register",
            email: formData.email,
            password: formData.password
        })
    });

    return response.json();
};
