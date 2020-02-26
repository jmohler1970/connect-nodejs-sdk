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
var Address = require('./Address');
var ChargeRequestAdditionalRecipient = require('./ChargeRequestAdditionalRecipient');
var CreateOrderRequest = require('./CreateOrderRequest');




/**
 * The CreateCheckoutRequest model module.
 * @module model/CreateCheckoutRequest
 */

/**
 * Constructs a new <code>CreateCheckoutRequest</code>.
 * Defines the parameters that can be included in the body of a request to the __CreateCheckout__ endpoint.
 * @alias module:model/CreateCheckoutRequest
 * @class
 * @param idempotencyKey {String} A unique string that identifies this checkout among others you've created. It can be any valid string but must be unique for every order sent to Square Checkout for a given location ID.  The idempotency key is used to avoid processing the same order more than once. If you're unsure whether a particular checkout was created successfully, you can reattempt it with the same idempotency key and all the same other parameters without worrying about creating duplicates.  We recommend using a random number/string generator native to the language you are working in to generate strings for your idempotency keys.  See the [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) guide for more information.
 * @param order {module:model/CreateOrderRequest} The order including line items to be checked out.
 */
var exports = function(idempotencyKey, order) {
  var _this = this;

  _this['idempotency_key'] = idempotencyKey;
  _this['order'] = order;







};

/**
 * Constructs a <code>CreateCheckoutRequest</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/CreateCheckoutRequest} obj Optional instance to populate.
 * @return {module:model/CreateCheckoutRequest} The populated <code>CreateCheckoutRequest</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('idempotency_key')) {
      obj['idempotency_key'] = ApiClient.convertToType(data['idempotency_key'], 'String');
    }
      if (data.hasOwnProperty('order')) {
      obj['order'] = CreateOrderRequest.constructFromObject(data['order']);
    }
      if (data.hasOwnProperty('ask_for_shipping_address')) {
      obj['ask_for_shipping_address'] = ApiClient.convertToType(data['ask_for_shipping_address'], 'Boolean');
    }
      if (data.hasOwnProperty('merchant_support_email')) {
      obj['merchant_support_email'] = ApiClient.convertToType(data['merchant_support_email'], 'String');
    }
      if (data.hasOwnProperty('pre_populate_buyer_email')) {
      obj['pre_populate_buyer_email'] = ApiClient.convertToType(data['pre_populate_buyer_email'], 'String');
    }
      if (data.hasOwnProperty('pre_populate_shipping_address')) {
      obj['pre_populate_shipping_address'] = Address.constructFromObject(data['pre_populate_shipping_address']);
    }
      if (data.hasOwnProperty('redirect_url')) {
      obj['redirect_url'] = ApiClient.convertToType(data['redirect_url'], 'String');
    }
      if (data.hasOwnProperty('additional_recipients')) {
      obj['additional_recipients'] = ApiClient.convertToType(data['additional_recipients'], [ChargeRequestAdditionalRecipient]);
    }
      if (data.hasOwnProperty('note')) {
      obj['note'] = ApiClient.convertToType(data['note'], 'String');
    }
    }
  return obj;
}

/**
 * A unique string that identifies this checkout among others you've created. It can be any valid string but must be unique for every order sent to Square Checkout for a given location ID.  The idempotency key is used to avoid processing the same order more than once. If you're unsure whether a particular checkout was created successfully, you can reattempt it with the same idempotency key and all the same other parameters without worrying about creating duplicates.  We recommend using a random number/string generator native to the language you are working in to generate strings for your idempotency keys.  See the [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency) guide for more information.
 * @member {String} idempotency_key
 */
exports.prototype['idempotency_key'] = undefined;
/**
 * The order including line items to be checked out.
 * @member {module:model/CreateOrderRequest} order
 */
exports.prototype['order'] = undefined;
/**
 * If `true`, Square Checkout will collect shipping information on your behalf and store that information with the transaction information in your Square Dashboard.  Default: `false`.
 * @member {Boolean} ask_for_shipping_address
 */
exports.prototype['ask_for_shipping_address'] = undefined;
/**
 * The email address to display on the Square Checkout confirmation page and confirmation email that the buyer can use to contact the merchant.  If this value is not set, the confirmation page and email will display the primary email address associated with the merchant's Square account.  Default: none; only exists if explicitly set.
 * @member {String} merchant_support_email
 */
exports.prototype['merchant_support_email'] = undefined;
/**
 * If provided, the buyer's email is pre-populated on the checkout page as an editable text field.  Default: none; only exists if explicitly set.
 * @member {String} pre_populate_buyer_email
 */
exports.prototype['pre_populate_buyer_email'] = undefined;
/**
 * If provided, the buyer's shipping info is pre-populated on the checkout page as editable text fields.  Default: none; only exists if explicitly set.
 * @member {module:model/Address} pre_populate_shipping_address
 */
exports.prototype['pre_populate_shipping_address'] = undefined;
/**
 * The URL to redirect to after checkout is completed with `checkoutId`, Square's `orderId`, `transactionId`, and `referenceId` appended as URL parameters. For example, if the provided redirect_url is `http://www.example.com/order-complete`, a successful transaction redirects the customer to:  `http://www.example.com/order-complete?checkoutId=xxxxxx&orderId=xxxxxx&referenceId=xxxxxx&transactionId=xxxxxx`  If you do not provide a redirect URL, Square Checkout will display an order confirmation page on your behalf; however Square strongly recommends that you provide a redirect URL so you can verify the transaction results and finalize the order through your existing/normal confirmation workflow.  Default: none; only exists if explicitly set.
 * @member {String} redirect_url
 */
exports.prototype['redirect_url'] = undefined;
/**
 * The basic primitive of multi-party transaction. The value is optional. The transaction facilitated by you can be split from here.  If you provide this value, the `amount_money` value in your additional_recipients must not be more than 90% of the `total_money` calculated by Square for your order. The `location_id` must be the valid location of the app owner merchant.  This field requires `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission.  This field is currently not supported in sandbox.
 * @member {Array.<module:model/ChargeRequestAdditionalRecipient>} additional_recipients
 */
exports.prototype['additional_recipients'] = undefined;
/**
 * An optional note to associate with the checkout object.  This value cannot exceed 60 characters.
 * @member {String} note
 */
exports.prototype['note'] = undefined;



module.exports = exports;



