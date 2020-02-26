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
var Checkout = require('./Checkout');
var Error = require('./Error');




/**
 * The CreateCheckoutResponse model module.
 * @module model/CreateCheckoutResponse
 */

/**
 * Constructs a new <code>CreateCheckoutResponse</code>.
 * Defines the fields that are included in the response body of a request to the __CreateCheckout__ endpoint.
 * @alias module:model/CreateCheckoutResponse
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>CreateCheckoutResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateCheckoutResponse} obj Optional instance to populate.
 * @return {module:model/CreateCheckoutResponse} The populated <code>CreateCheckoutResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('checkout')) {
      obj['checkout'] = Checkout.constructFromObject(data['checkout']);
    }
      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
    }
  return obj;
}

/**
 * The newly created checkout. If the same request was made with the same idempotency_key, this will be the checkout created with the idempotency_key.
 * @member {module:model/Checkout} checkout
 */
exports.prototype['checkout'] = undefined;
/**
 * Any errors that occurred during the request.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;



module.exports = exports;



