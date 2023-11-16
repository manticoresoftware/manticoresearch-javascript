/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
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
    root.Manticoresearch.BoolFilter = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The BoolFilter model module.
   * @module model/BoolFilter
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>BoolFilter</code>.
   * Boolean attribute filter
   * @alias module:model/BoolFilter
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>BoolFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoolFilter} obj Optional instance to populate.
   * @return {module:model/BoolFilter} The populated <code>BoolFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('should')) {
        obj['should'] = ApiClient.convertToType(data['should'], [Object]);
      }
      if (data.hasOwnProperty('must')) {
        obj['must'] = ApiClient.convertToType(data['must'], [Object]);
      }
      if (data.hasOwnProperty('must_not')) {
        obj['must_not'] = ApiClient.convertToType(data['must_not'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<Object>} should
   */
  exports.prototype['should'] = undefined;
  /**
   * @member {Array.<Object>} must
   */
  exports.prototype['must'] = undefined;
  /**
   * @member {Array.<Object>} must_not
   */
  exports.prototype['must_not'] = undefined;



  return exports;
}));


