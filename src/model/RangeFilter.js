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
    root.Manticoresearch.RangeFilter = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The RangeFilter model module.
   * @module model/RangeFilter
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>RangeFilter</code>.
   * Range attribute filter
   * @alias module:model/RangeFilter
   * @class
   * @param field {String} 
   */
  var exports = function(field) {
    var _this = this;

    _this['field'] = field;
  };

  /**
   * Constructs a <code>RangeFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RangeFilter} obj Optional instance to populate.
   * @return {module:model/RangeFilter} The populated <code>RangeFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('lte')) {
        obj['lte'] = ApiClient.convertToType(data['lte'], 'Number');
      }
      if (data.hasOwnProperty('gte')) {
        obj['gte'] = ApiClient.convertToType(data['gte'], 'Number');
      }
      if (data.hasOwnProperty('lt')) {
        obj['lt'] = ApiClient.convertToType(data['lt'], 'Number');
      }
      if (data.hasOwnProperty('gt')) {
        obj['gt'] = ApiClient.convertToType(data['gt'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} field
   */
  exports.prototype['field'] = undefined;
  /**
   * @member {Number} lte
   */
  exports.prototype['lte'] = undefined;
  /**
   * @member {Number} gte
   */
  exports.prototype['gte'] = undefined;
  /**
   * @member {Number} lt
   */
  exports.prototype['lt'] = undefined;
  /**
   * @member {Number} gt
   */
  exports.prototype['gt'] = undefined;



  return exports;
}));


