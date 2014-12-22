/**
 * Account/UserController
 *
 * @description :: Server-side logic for managing Account/users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `Account/UserController.create()`
   */
  create: function(req, res, next) {
    console.log('begin create user');

    User.create(req.params.all(), function userCreated(err, user) {
      if (err) return next(err);

      res.json(user);

      console.log('user created');
    });

  },


  /**
   * `Account/UserController.update()`
   */
  update: function(req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `Account/UserController.delete()`
   */
  delete: function(req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  },


  /**
   * `Account/UserController.getById()`
   */
  getById: function(req, res) {
    return res.json({
      todo: 'getById() is not implemented yet!'
    });
  },


  /**
   * `Account/UserController.list()`
   */
  list: function(req, res) {
    console.log('api - user list')
    User.find().exec(function(err, users){

    return res.json(users);

    });
  }

};
