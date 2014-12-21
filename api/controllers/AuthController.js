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
    console.log('signin ->', req.params);

    User.findOneByEmail(req.param('email'),
      function foundUser(err, user) {
        if (err) return next(err);

        if (!user) req.redirect('/auth/sigin');

        req.session.authenticated = true;
        req.session.User = user;

        return res.view('/auth/welcome', {
          fullName: user.fullName
        });

      });

  },

  /**
   * `AuthController.signup()`
   */
  signup: function(req, res, next) {
    console.log('signup ->', req.params);


    return res.json({
      signup: true
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
