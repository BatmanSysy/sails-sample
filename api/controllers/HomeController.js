/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    /**
     * `HomeController.signin()`
     */
    signin: function(req, res) {
        return res.view('home/signin', {useParalax: true});
    },

    /**
     * `HomeController.signout()`
     */
    signout: function(req, res) {
        return res.json({
            todo: 'signout() is not implemented yet!'
        });
    },

    /**
     * `HomeController.signup()`
     */
    signup: function(req, res) {
        return res.json({
            todo: 'signup() is not implemented yet!'
        });
    }
};
