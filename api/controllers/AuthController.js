/**
 * AuthController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `AuthController.signin()`
   */
  signin: function(req, res, next) {

    User.findOneByEmail(req.body.email, function foundUser(err, user) {
      if (err) return next(err);

      console.log('user -> ', user.password,
        ' | request -> ', req.body.password);

      if (user && user.password == req.body.password) {
        req.session.authenticated = true;
        req.session.User = user;
        res.redirect('/');

      } else {
        return res.view();
      }

    });

  },

  /**
   * `AuthController.signup()`
   */
  signup: function(req, res, next) {

    User.create(req.body, function userCreated(err, user) {
      if (err) return next(err);
      console.log('new user -> \\n', user);
      res.redirect('/signin');
    });

  },

  /**
   * `AuthController.signout()`
   */
  signout: function(req, res, next) {
    req.session.destroy();

    res.redirect('/signin');
  }

};
