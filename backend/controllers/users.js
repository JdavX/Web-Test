const User = require('../models/users')

exports.index = (req, res)=> {
    res.send('user index');
};

exports.listAll = (req, res)=> {
    res.send('list all user');
};

exports.createUser = async  (req, res) => {
    const user = new User({
        Id: req.body.Id,
        FirstName: req.body.FirstName,
        MiddleName: req.body.MiddleName,
        LastName: req.body.LastName,
        Gender: req.body.Gender,
        DateOfBirth: req.body.DateOfBirth,
        Password: req.body.Password,
    });

    try{
        for (var key in user){
             if(user.hasOwnProperty(key)){
                const createUser = await user.save();
                res.status(201).json({status: 'Successfully Created'});
             }  else {
                    res.status(401).json({status: 'Missing Parameter'});
                } 
        }
    } catch (err) {
       res.status(400).json({msg: err});     
    }
    // user.save().then((data) =>{
    //     res.status(200).json(data);
    // }).catch((err) => {
    //     res.status(400).json({msg : err});
    // });

    // res.status(200).json(user);
};