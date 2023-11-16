/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AggregationSortInnerValue', 'model/AggregationTerms'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AggregationSortInnerValue'), require('./AggregationTerms'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.Aggregation = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.AggregationSortInnerValue, root.Manticoresearch.AggregationTerms);
  }
}(this, function(ApiClient, AggregationSortInnerValue, AggregationTerms) {
  'use strict';



  /**
   * The Aggregation model module.
   * @module model/Aggregation
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>Aggregation</code>.
   * Aggregation Alias
   * @alias module:model/Aggregation
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Aggregation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Aggregation} obj Optional instance to populate.
   * @return {module:model/Aggregation} The populated <code>Aggregation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('terms')) {
        obj['terms'] = AggregationTerms.constructFromObject(data['terms']);
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], [{'String': AggregationSortInnerValue}]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AggregationTerms} terms
   */
  exports.prototype['terms'] = undefined;
  /**
   * @member {Array.<Object.<String, module:model/AggregationSortInnerValue>>} sort
   */
  exports.prototype['sort'] = undefined;



  return exports;
}));


