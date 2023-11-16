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
    root.Manticoresearch.AggregationSortInnerValue = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AggregationSortInnerValue model module.
   * @module model/AggregationSortInnerValue
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>AggregationSortInnerValue</code>.
   * @alias module:model/AggregationSortInnerValue
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AggregationSortInnerValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AggregationSortInnerValue} obj Optional instance to populate.
   * @return {module:model/AggregationSortInnerValue} The populated <code>AggregationSortInnerValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} order
   */
  exports.prototype['order'] = undefined;



  return exports;
}));


