/**
 * Manticore Search Client
 * Experimental low-level client for Manticore Search. 
 * Contact: info@manticoresearch.com
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.ErrorResponse = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ErrorResponse model module.
   * @module model/ErrorResponse
   * @version 1.0.2
   */

  /**
   * Constructs a new <code>ErrorResponse</code>.
   * Error response
   * @alias module:model/ErrorResponse
   * @class
   * @param error {Object.<String, Object>} 
   * @param status {Number} 
   */
  var exports = function(error, status) {
    var _this = this;

    _this['error'] = error;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorResponse} obj Optional instance to populate.
   * @return {module:model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], {'String': Object});
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, Object>} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {Number} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


