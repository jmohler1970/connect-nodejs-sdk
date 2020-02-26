/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');




/**
 * The DisputedPayment model module.
 * Note: This model is in beta.
 * @module model/DisputedPayment
 */

/**
 * Constructs a new <code>DisputedPayment</code>.
 * The payment the cardholder disputed.
 * @alias module:model/DisputedPayment
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>DisputedPayment</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/DisputedPayment} obj Optional instance to populate.
 * @return {module:model/DisputedPayment} The populated <code>DisputedPayment</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('payment_id')) {
      obj['payment_id'] = ApiClient.convertToType(data['payment_id'], 'String');
    }
    }
  return obj;
}

/**
 * Square-generated unique ID of the payment being disputed.
 * @member {String} payment_id
 */
exports.prototype['payment_id'] = undefined;



module.exports = exports;



