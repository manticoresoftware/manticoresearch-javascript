/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AggregationCompositeSourcesInnerValueTerms'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AggregationCompositeSourcesInnerValueTerms'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.AggregationCompositeSourcesInnerValue = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.AggregationCompositeSourcesInnerValueTerms);
  }
}(this, function(ApiClient, AggregationCompositeSourcesInnerValueTerms) {
  'use strict';



  /**
   * The AggregationCompositeSourcesInnerValue model module.
   * @module model/AggregationCompositeSourcesInnerValue
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>AggregationCompositeSourcesInnerValue</code>.
   * @alias module:model/AggregationCompositeSourcesInnerValue
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AggregationCompositeSourcesInnerValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AggregationCompositeSourcesInnerValue} obj Optional instance to populate.
   * @return {module:model/AggregationCompositeSourcesInnerValue} The populated <code>AggregationCompositeSourcesInnerValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('terms')) {
        obj['terms'] = AggregationCompositeSourcesInnerValueTerms.constructFromObject(data['terms']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AggregationCompositeSourcesInnerValueTerms} terms
   */
  exports.prototype['terms'] = undefined;



  return exports;
}));


