/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/KnnQueryByDocId', 'model/KnnQueryByVector'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./KnnQueryByDocId'), require('./KnnQueryByVector'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.SearchRequestKnn = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.KnnQueryByDocId, root.Manticoresearch.KnnQueryByVector);
  }
}(this, function(ApiClient, KnnQueryByDocId, KnnQueryByVector) {
  'use strict';



  /**
   * The SearchRequestKnn model module.
   * @module model/SearchRequestKnn
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>SearchRequestKnn</code>.
   * @alias module:model/SearchRequestKnn
   * @class
   * @implements module:model/KnnQueryByVector
   * @implements module:model/KnnQueryByDocId
   * @param field {String} 
   * @param queryVector {Array.<Number>} 
   * @param k {Number} 
   * @param filter {Object} 
   * @param docId {Number} 
   */
  var exports = function(field, queryVector, k, filter, docId) {
    var _this = this;

    KnnQueryByVector.call(_this, field, queryVector, k);
    KnnQueryByDocId.call(_this, field, docId, k, filter);
    _this['field'] = field;
    _this['query_vector'] = queryVector;
    _this['k'] = k;
    _this['filter'] = filter;
    _this['doc_id'] = docId;
  };

  /**
   * Constructs a <code>SearchRequestKnn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchRequestKnn} obj Optional instance to populate.
   * @return {module:model/SearchRequestKnn} The populated <code>SearchRequestKnn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      KnnQueryByVector.constructFromObject(data, obj);
      KnnQueryByDocId.constructFromObject(data, obj);
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
      if (data.hasOwnProperty('doc_id')) {
        obj['doc_id'] = ApiClient.convertToType(data['doc_id'], 'Number');
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
  /**
   * @member {Number} doc_id
   */
  exports.prototype['doc_id'] = undefined;

  // Implement KnnQueryByVector interface:
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

  // Implement KnnQueryByDocId interface:
  /**
   * @member {String} field
   * @default ''
   */
exports.prototype['field'] = '';

  /**
   * @member {Number} doc_id
   */
exports.prototype['doc_id'] = undefined;

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


