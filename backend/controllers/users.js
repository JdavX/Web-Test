const User = require('../models/users')

exports.index = (req, res)=> {
    res.send('user index');
};

exports.listAll = (req, res)=> {
    res.send('list all user');
};

exports.createUser = (req, res)=> {
    const user = new User({
        Id: req.body.Id,
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        Gender: req.body.Gender,
        DateOfBirth: req.body.DateOfBirth,
        Password: req.body.Password,
    });

    user.save().then((data) =>{
        res.status(200).json(data);
    });

    res.status(200).json(user);
};