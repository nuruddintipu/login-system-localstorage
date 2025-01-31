const isAuthenticated = () => {
    return localStorage.getItem('user') !== null;
};
export default isAuthenticated;