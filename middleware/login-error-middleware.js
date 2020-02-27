module.exports = (req, res, next) => {
    const { email, password } = req.params;
    
    if (email && password) {
        next();
    } else {
        res.status(404).json({ message: 'Please fill out required fields before submitting!'});
    }
};