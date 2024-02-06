const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncError = require('../middlewares/catchAsyncError');
// const sendToken = require('../utils/jwtToken');
// const sendEmail = require('../utils/sendEmail');
// const crypto = require('crypto');
const cloudinary = require('cloudinary');

// Register A User => /api/v1/register



// exports.registerUser = catchAsyncError(async (req, res, next) => {

//     const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
//         folder: 'Cleopatra/avatars',
//         width: 150,
//         crop: 'scale',
//     })

//     const { name, email, password } = req.body;

//     const user = await User.create({
//         name,
//         email,
//         password,
//         avatar: {
//             public_id: result.public_id,
//             url: result.secure_url
//         }
//     })

//     sendToken(user, 200, res)

// })
exports.registerUser = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'avatar/dsadashdbasdhbashda',
            url: 'https://res.cloudinary.com/ds7jufrxl/image/upload/v1701392086/Cleopatra/avatars/ryrbgdwu1t7b2yrsto2j.jpg'
        }
    })
})

