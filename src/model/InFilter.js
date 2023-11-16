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
    root.Manticoresearch.InFilter = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The InFilter model module.
   * @module model/InFilter
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>InFilter</code>.
   * In attribute filter
   * @alias module:model/InFilter
   * @class
   * @param field {String} 
   * @param values {Array.<Object>} 
   */
  var exports = function(field, values) {
    var _this = this;

    _this['field'] = field;
    _this['values'] = values;
  };

  /**
   * Constructs a <code>InFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InFilter} obj Optional instance to populate.
   * @return {module:model/InFilter} The populated <code>InFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {String} field
   */
  exports.prototype['field'] = undefined;
  /**
   * @member {Array.<Object>} values
   */
  exports.prototype['values'] = undefined;



  return exports;
}));


