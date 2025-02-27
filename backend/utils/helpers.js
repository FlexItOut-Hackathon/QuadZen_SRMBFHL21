// Utility function to validate email format
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  // Utility function to validate password strength
  const validatePassword = (password) => {
    // Password must be at least 8 characters long and contain at least one number and one special character
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(password);
  };
  
  // Utility function to handle errors and send consistent error responses
  const handleError = (res, statusCode, message) => {
    return res.status(statusCode).json({ error: message });
  };
  
  module.exports = {
    validateEmail,
    validatePassword,
    handleError,
  };