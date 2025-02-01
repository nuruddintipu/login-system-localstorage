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