/**
* Account/user.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {

        email: {
            type: "string",
            email: true,
            required: true,
            unique: true
        },

        encryptedPassword: {
            type: "string"
        },

        firstName: {
            type: "string",
            required: true
        },

        lastName: {
            type: "string"
        }

    }
};

