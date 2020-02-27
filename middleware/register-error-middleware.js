module.exports = (req, res, next) => {
    const { name, email, password } = req.params;
    
    if (name && email && password) {
        next();
    } else {
        res.status(404).json({ message: 'Please fill out required fields before submitting!'});
    }
};