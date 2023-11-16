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
    root.Manticoresearch.FilterNumber = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FilterNumber model module.
   * @module model/FilterNumber
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>FilterNumber</code>.
   * Query filter
   * @alias module:model/FilterNumber
   * @class
   * @param filterField {String} 
   * @param operation {String} 
   * @param filterValue {Number} 
   */
  var exports = function(filterField, operation, filterValue) {
    var _this = this;

    _this['filter_field'] = filterField;
    _this['operation'] = operation;
    _this['filter_value'] = filterValue;
  };

  /**
   * Constructs a <code>FilterNumber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FilterNumber} obj Optional instance to populate.
   * @return {module:model/FilterNumber} The populated <code>FilterNumber</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('filter_field')) {
        obj['filter_field'] = ApiClient.convertToType(data['filter_field'], 'String');
      }
      if (data.hasOwnProperty('operation')) {
        obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
      }
      if (data.hasOwnProperty('filter_value')) {
        obj['filter_value'] = ApiClient.convertToType(data['filter_value'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} filter_field
   */
  exports.prototype['filter_field'] = undefined;
  /**
   * @member {String} operation
   */
  exports.prototype['operation'] = undefined;
  /**
   * @member {Number} filter_value
   */
  exports.prototype['filter_value'] = undefined;



  return exports;
}));


