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
    root.Manticoresearch.AggregationTerms = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AggregationTerms model module.
   * @module model/AggregationTerms
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>AggregationTerms</code>.
   * @alias module:model/AggregationTerms
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AggregationTerms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AggregationTerms} obj Optional instance to populate.
   * @return {module:model/AggregationTerms} The populated <code>AggregationTerms</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Attribute Name to Aggregate
   * @member {String} field
   */
  exports.prototype['field'] = undefined;
  /**
   * Maximum Number of Buckets in the Result
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;



  return exports;
}));


