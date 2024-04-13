/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AggregationCompositeSourcesInnerValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AggregationCompositeSourcesInnerValue'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.AggregationComposite = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.AggregationCompositeSourcesInnerValue);
  }
}(this, function(ApiClient, AggregationCompositeSourcesInnerValue) {
  'use strict';



  /**
   * The AggregationComposite model module.
   * @module model/AggregationComposite
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>AggregationComposite</code>.
   * Composite aggregation
   * @alias module:model/AggregationComposite
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AggregationComposite</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AggregationComposite} obj Optional instance to populate.
   * @return {module:model/AggregationComposite} The populated <code>AggregationComposite</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
      if (data.hasOwnProperty('sources')) {
        obj['sources'] = ApiClient.convertToType(data['sources'], [{'String': AggregationCompositeSourcesInnerValue}]);
      }
    }
    return obj;
  }

  /**
   * Maximum number of composite buckets in the result
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {Array.<Object.<String, module:model/AggregationCompositeSourcesInnerValue>>} sources
   */
  exports.prototype['sources'] = undefined;



  return exports;
}));


