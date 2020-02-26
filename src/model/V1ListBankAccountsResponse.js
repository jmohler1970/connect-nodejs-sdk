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
var V1BankAccount = require('./V1BankAccount');




/**
 * @deprecated
 * The V1ListBankAccountsResponse model module.
 * @module model/V1ListBankAccountsResponse
 */

/**
 * Constructs a new <code>V1ListBankAccountsResponse</code>.
 * 
 * @alias module:model/V1ListBankAccountsResponse
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>V1ListBankAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/V1ListBankAccountsResponse} obj Optional instance to populate.
 * @return {module:model/V1ListBankAccountsResponse} The populated <code>V1ListBankAccountsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
      obj['items'] = ApiClient.convertToType(data['items'], [V1BankAccount]);
    }
    }
  return obj;
}

/**
 * 
 * @member {Array.<module:model/V1BankAccount>} items
 */
exports.prototype['items'] = undefined;



module.exports = exports;



