/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Aggregation', 'model/Highlight', 'model/SearchRequestKnn'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Aggregation'), require('./Highlight'), require('./SearchRequestKnn'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.SearchRequest = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.Aggregation, root.Manticoresearch.Highlight, root.Manticoresearch.SearchRequestKnn);
  }
}(this, function(ApiClient, Aggregation, Highlight, SearchRequestKnn) {
  'use strict';



  /**
   * The SearchRequest model module.
   * @module model/SearchRequest
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>SearchRequest</code>.
   * Request object for search operation
   * @alias module:model/SearchRequest
   * @class
   * @param index {String} 
   */
  var exports = function(index) {
    var _this = this;

    _this['index'] = index;
  };

  /**
   * Constructs a <code>SearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchRequest} obj Optional instance to populate.
   * @return {module:model/SearchRequest} The populated <code>SearchRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'String');
      }
      if (data.hasOwnProperty('knn')) {
        obj['knn'] = SearchRequestKnn.constructFromObject(data['knn']);
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], Object);
      }
      if (data.hasOwnProperty('fulltext_filter')) {
        obj['fulltext_filter'] = ApiClient.convertToType(data['fulltext_filter'], Object);
      }
      if (data.hasOwnProperty('attr_filter')) {
        obj['attr_filter'] = ApiClient.convertToType(data['attr_filter'], Object);
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('max_matches')) {
        obj['max_matches'] = ApiClient.convertToType(data['max_matches'], 'Number');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], [Object]);
      }
      if (data.hasOwnProperty('aggs')) {
        obj['aggs'] = ApiClient.convertToType(data['aggs'], {'String': Aggregation});
      }
      if (data.hasOwnProperty('expressions')) {
        obj['expressions'] = ApiClient.convertToType(data['expressions'], {'String': 'String'});
      }
      if (data.hasOwnProperty('highlight')) {
        obj['highlight'] = Highlight.constructFromObject(data['highlight']);
      }
      if (data.hasOwnProperty('source')) {
		obj['_source'] = ApiClient.convertToType(data['source'], Object);
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], {'String': Object});
      }
      if (data.hasOwnProperty('profile')) {
        obj['profile'] = ApiClient.convertToType(data['profile'], 'Boolean');
      }
      if (data.hasOwnProperty('track_scores')) {
        obj['track_scores'] = ApiClient.convertToType(data['track_scores'], 'Boolean');
      }
      if (data.hasOwnProperty('query_vector')) {
        obj['query_vector'] = ApiClient.convertToType(data['query_vector'], Object);
      }
      if (data.hasOwnProperty('doc_id')) {
        obj['doc_id'] = ApiClient.convertToType(data['doc_id'], Object);
      }
      if (data.hasOwnProperty('k')) {
        obj['k'] = ApiClient.convertToType(data['k'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} index
   * @default ''
   */
  exports.prototype['index'] = '';
  /**
   * @member {module:model/SearchRequestKnn} knn
   */
  exports.prototype['knn'] = undefined;
  /**
   * @member {Object} query
   */
  exports.prototype['query'] = undefined;
  /**
   * @member {Object} fulltext_filter
   */
  exports.prototype['fulltext_filter'] = undefined;
  /**
   * @member {Object} attr_filter
   */
  exports.prototype['attr_filter'] = undefined;
  /**
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * @member {Number} max_matches
   */
  exports.prototype['max_matches'] = undefined;
  /**
   * @member {Array.<Object>} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * @member {Object.<String, module:model/Aggregation>} aggs
   */
  exports.prototype['aggs'] = undefined;
  /**
   * @member {Object.<String, String>} expressions
   */
  exports.prototype['expressions'] = undefined;
  /**
   * @member {module:model/Highlight} highlight
   */
  exports.prototype['highlight'] = undefined;
  /**
   * @member {Object} source
   */
  exports.prototype['_source'] = undefined;
  /**
   * @member {Object.<String, Object>} options
   */
  exports.prototype['options'] = undefined;
  /**
   * @member {Boolean} profile
   */
  exports.prototype['profile'] = undefined;
  /**
   * @member {Boolean} track_scores
   */
  exports.prototype['track_scores'] = undefined;
  /**
   * @member {Object} query_vector
   */
  exports.prototype['query_vector'] = undefined;
  /**
   * @member {Object} doc_id
   */
  exports.prototype['doc_id'] = undefined;
  /**
   * @member {Object} k
   */
  exports.prototype['k'] = undefined;



  return exports;
}));


