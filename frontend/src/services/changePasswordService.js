export const changePasswordService = async (user, currentPassword, newPassword, confirmPassword) => {

    const response = await fetch('http://localhost:8000/api/auth.php', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            action: 'changePassword',
            guid: user.guid,
            currentPassword: currentPassword,
            newPassword: newPassword,
            confirmPassword: confirmPassword
        })
    });
    return response.json();
};
