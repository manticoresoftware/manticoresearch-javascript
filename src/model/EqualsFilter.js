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
    root.Manticoresearch.EqualsFilter = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The EqualsFilter model module.
   * @module model/EqualsFilter
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>EqualsFilter</code>.
   * Equals attribute filter
   * @alias module:model/EqualsFilter
   * @class
   * @param field {String} 
   * @param value {Object} 
   */
  var exports = function(field, value) {
    var _this = this;

    _this['field'] = field;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>EqualsFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EqualsFilter} obj Optional instance to populate.
   * @return {module:model/EqualsFilter} The populated <code>EqualsFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} field
   */
  exports.prototype['field'] = undefined;
  /**
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


