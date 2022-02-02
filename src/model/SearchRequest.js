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
    root.Manticoresearch.SearchRequest = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SearchRequest model module.
   * @module model/SearchRequest
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SearchRequest</code>.
   * Payload for search operation
   * @alias module:model/SearchRequest
   * @class
   * @param index {String} 
   * @param query {Object.<String, Object>} 
   */
  var exports = function(index, query) {
    var _this = this;

    _this['index'] = index;
    _this['query'] = query;
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
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], {'String': Object});
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
        obj['aggs'] = ApiClient.convertToType(data['aggs'], {'String': Object});
      }
      if (data.hasOwnProperty('expressions')) {
        obj['expressions'] = ApiClient.convertToType(data['expressions'], Object);
      }
      if (data.hasOwnProperty('highlight')) {
        obj['highlight'] = ApiClient.convertToType(data['highlight'], Object);
      }
      if (data.hasOwnProperty('_source')) {
        obj['_source'] = ApiClient.convertToType(data['_source'], ['String']);
      }
      if (data.hasOwnProperty('profile')) {
        obj['profile'] = ApiClient.convertToType(data['profile'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} index
   */
  exports.prototype['index'] = undefined;
  /**
   * @member {Object.<String, Object>} query
   */
  exports.prototype['query'] = undefined;
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
   * @member {Object.<String, Object>} aggs
   */
  exports.prototype['aggs'] = undefined;
  /**
   * @member {Object} expressions
   */
  exports.prototype['expressions'] = undefined;
  /**
   * @member {Object} highlight
   */
  exports.prototype['highlight'] = undefined;
  /**
   * @member {Array.<String>} _source
   */
  exports.prototype['_source'] = undefined;
  /**
   * @member {Boolean} profile
   */
  exports.prototype['profile'] = undefined;



  return exports;
}));


