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
    root.Manticoresearch.SortMVA = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SortMVA model module.
   * @module model/SortMVA
   * @version 3.3.1
   */

  /**
   * Constructs a new <code>SortMVA</code>.
   * Query sort expression for MVA attributes
   * @alias module:model/SortMVA
   * @class
   * @param attr {String} 
   * @param order {module:model/SortMVA.OrderEnum} 
   * @param mode {module:model/SortMVA.ModeEnum} 
   */
  var exports = function(attr, order, mode) {
    var _this = this;

    _this['attr'] = attr;
    _this['order'] = order;
    _this['mode'] = mode;
  };

  /**
   * Constructs a <code>SortMVA</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SortMVA} obj Optional instance to populate.
   * @return {module:model/SortMVA} The populated <code>SortMVA</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('attr')) {
        obj['attr'] = ApiClient.convertToType(data['attr'], 'String');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} attr
   */
  exports.prototype['attr'] = undefined;
  /**
   * @member {module:model/SortMVA.OrderEnum} order
   */
  exports.prototype['order'] = undefined;
  /**
   * @member {module:model/SortMVA.ModeEnum} mode
   */
  exports.prototype['mode'] = undefined;


  /**
   * Allowed values for the <code>order</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OrderEnum = {
    /**
     * value: "asc"
     * @const
     */
    "asc": "asc",
    /**
     * value: "desc"
     * @const
     */
    "desc": "desc"  };

  /**
   * Allowed values for the <code>mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ModeEnum = {
    /**
     * value: "min"
     * @const
     */
    "min": "min",
    /**
     * value: "max"
     * @const
     */
    "max": "max"  };


  return exports;
}));


