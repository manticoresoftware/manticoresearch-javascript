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
    root.Manticoresearch.KnnQueryByDocId = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The KnnQueryByDocId model module.
   * @module model/KnnQueryByDocId
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>KnnQueryByDocId</code>.
   * Request object for knn search operation
   * @alias module:model/KnnQueryByDocId
   * @class
   * @param field {String} 
   * @param docId {Number} 
   * @param k {Number} 
   * @param filter {Object} 
   */
  var exports = function(field, docId, k, filter) {
    var _this = this;

    _this['field'] = field;
    _this['doc_id'] = docId;
    _this['k'] = k;
    _this['filter'] = filter;
  };

  /**
   * Constructs a <code>KnnQueryByDocId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KnnQueryByDocId} obj Optional instance to populate.
   * @return {module:model/KnnQueryByDocId} The populated <code>KnnQueryByDocId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('doc_id')) {
        obj['doc_id'] = ApiClient.convertToType(data['doc_id'], 'Number');
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


