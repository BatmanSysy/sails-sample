/**
 * Account/user.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  schema: true,

  attributes: {

    id: {
      type: 'integer',
      unique: true,
      primaryKey: true
    },

    fullName: {
      type: "string",
      required: true
    },

    email: {
      type: 'email',
      required: true,
      unique: true
    },

    password: {
      type: "string"
    },

    retypePassword: {
      type: "string"
    }

    // toJSON: function() {
    //   var obj = this.toObject();
    //   delete obj.password;
    //   delete obj.retypePassword;
    //   delete obj._csrf;
    //   return obj;
    // }

  }

};
