import {sendRequest} from "./sendRequest";

export const updatePassword = async (user, currentPassword, newPassword, confirmPassword) => {

    const response = await sendRequest('edit.php', 'PUT', {
        type: 'password',
        guid: user.guid,
        currentPassword: currentPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword
    });
    return response;
};
