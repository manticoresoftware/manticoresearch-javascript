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
    root.Manticoresearch.NotFilterBoolean = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The NotFilterBoolean model module.
   * @module model/NotFilterBoolean
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>NotFilterBoolean</code>.
   * Query filter
   * @alias module:model/NotFilterBoolean
   * @class
   * @param filterField {String} 
   * @param operation {String} 
   * @param filterValue {Boolean} 
   */
  var exports = function(filterField, operation, filterValue) {
    var _this = this;

    _this['filter_field'] = filterField;
    _this['operation'] = operation;
    _this['filter_value'] = filterValue;
  };

  /**
   * Constructs a <code>NotFilterBoolean</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotFilterBoolean} obj Optional instance to populate.
   * @return {module:model/NotFilterBoolean} The populated <code>NotFilterBoolean</code> instance.
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
        obj['filter_value'] = ApiClient.convertToType(data['filter_value'], 'Boolean');
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
   * @member {Boolean} filter_value
   */
  exports.prototype['filter_value'] = undefined;



  return exports;
}));


