
/*!
 * Module dependencies.
 */

var type = require('type');
var debug = require('debug')('recurly:plan');

/**
 * Plan mixin.
 *
 * Retrieves information for the `plan`. The `callback` signature
 * is `err, plan` where `err` may be a request or server error, and `plan`
 * is a representation of the requested plan.
 *
 * @param {String} code
 * @param {Function} callback
 */

exports.plan = function (code, callback) {
  debug('%s', code);

  if ('function' != type(callback)) {
    throw new Error('Missing callback');
  }

  if ('undefined' == type(code)) {
    return callback(new Error('Missing plan code'));
  }

  this.request('/plans/' + code, callback);
};
