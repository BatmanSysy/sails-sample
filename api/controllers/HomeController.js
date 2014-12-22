/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  /**
   * `HomeController.index()`
   */
  index: function(req, res, next) {

    return res.view('home/welcome', {
      fullName: req.session.User.fullName
    });
  }
};
