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
 * The DisputeEvidenceFile model module.
 * Note: This model is in beta.
 * @module model/DisputeEvidenceFile
 */

/**
 * Constructs a new <code>DisputeEvidenceFile</code>.
 * A file to be uploaded as dispute evidence.
 * @alias module:model/DisputeEvidenceFile
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>DisputeEvidenceFile</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/DisputeEvidenceFile} obj Optional instance to populate.
 * @return {module:model/DisputeEvidenceFile} The populated <code>DisputeEvidenceFile</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('filename')) {
      obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
    }
      if (data.hasOwnProperty('filetype')) {
      obj['filetype'] = ApiClient.convertToType(data['filetype'], 'String');
    }
    }
  return obj;
}

/**
 * The file name including the file extension. For example: \"receipt.tiff\".
 * @member {String} filename
 */
exports.prototype['filename'] = undefined;
/**
 * Dispute evidence files must one of application/pdf, image/heic, image/heif, image/jpeg, image/png, image/tiff formats.
 * @member {String} filetype
 */
exports.prototype['filetype'] = undefined;



module.exports = exports;



