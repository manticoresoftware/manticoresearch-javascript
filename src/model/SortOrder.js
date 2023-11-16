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
    root.Manticoresearch.SortOrder = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SortOrder model module.
   * @module model/SortOrder
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>SortOrder</code>.
   * Query sort expression
   * @alias module:model/SortOrder
   * @class
   * @param attr {String} 
   * @param order {module:model/SortOrder.OrderEnum} 
   */
  var exports = function(attr, order) {
    var _this = this;

    _this['attr'] = attr;
    _this['order'] = order;
  };

  /**
   * Constructs a <code>SortOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SortOrder} obj Optional instance to populate.
   * @return {module:model/SortOrder} The populated <code>SortOrder</code> instance.
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
    }
    return obj;
  }

  /**
   * @member {String} attr
   */
  exports.prototype['attr'] = undefined;
  /**
   * @member {module:model/SortOrder.OrderEnum} order
   */
  exports.prototype['order'] = undefined;


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


  return exports;
}));


