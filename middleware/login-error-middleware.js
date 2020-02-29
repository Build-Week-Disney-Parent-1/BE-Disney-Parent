module.exports = (req, res, next) => {
    const { email, password, role } = req.body;

    if (!email) {
        res.status(404).json({ message: 'Please provide your email!' });
    } else {
        if (!password) {
            res.status(404).json({ message: 'Please provide a password!' });
        } else {
            if (!role) {
                res.status(404).json({ message: 'Are you a parent or a volunteer!' });
            } else {
                next();
            }
        }
    }
};