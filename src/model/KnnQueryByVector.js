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
    root.Manticoresearch.KnnQueryByVector = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The KnnQueryByVector model module.
   * @module model/KnnQueryByVector
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>KnnQueryByVector</code>.
   * Request object for knn search operation
   * @alias module:model/KnnQueryByVector
   * @class
   * @param field {String} 
   * @param queryVector {Array.<Number>} 
   * @param k {Number} 
   */
  var exports = function(field, queryVector, k) {
    var _this = this;

    _this['field'] = field;
    _this['query_vector'] = queryVector;
    _this['k'] = k;
  };

  /**
   * Constructs a <code>KnnQueryByVector</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KnnQueryByVector} obj Optional instance to populate.
   * @return {module:model/KnnQueryByVector} The populated <code>KnnQueryByVector</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('query_vector')) {
        obj['query_vector'] = ApiClient.convertToType(data['query_vector'], ['Number']);
      }
      if (data.hasOwnProperty('k')) {
        obj['k'] = ApiClient.convertToType(data['k'], 'Number');
      }
      if (data.hasOwnProperty('filter')) {
        obj['filter'] = ApiClient.convertToType(data['filter'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} field
   * @default ''
   */
  exports.prototype['field'] = '';
  /**
   * @member {Array.<Number>} query_vector
   */
  exports.prototype['query_vector'] = undefined;
  /**
   * @member {Number} k
   */
  exports.prototype['k'] = undefined;
  /**
   * @member {Object} filter
   */
  exports.prototype['filter'] = undefined;



  return exports;
}));


