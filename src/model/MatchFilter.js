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
    root.Manticoresearch.MatchFilter = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MatchFilter model module.
   * @module model/MatchFilter
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>MatchFilter</code>.
   * Query match filter
   * @alias module:model/MatchFilter
   * @class
   * @param queryString {String} 
   * @param queryFields {String} 
   */
  var exports = function(queryString, queryFields) {
    var _this = this;

    _this['query_string'] = queryString;
    _this['query_fields'] = queryFields;
  };

  /**
   * Constructs a <code>MatchFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MatchFilter} obj Optional instance to populate.
   * @return {module:model/MatchFilter} The populated <code>MatchFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('query_string')) {
        obj['query_string'] = ApiClient.convertToType(data['query_string'], 'String');
      }
      if (data.hasOwnProperty('query_fields')) {
        obj['query_fields'] = ApiClient.convertToType(data['query_fields'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} query_string
   * @default ''
   */
  exports.prototype['query_string'] = '';
  /**
   * @member {String} query_fields
   * @default '*'
   */
  exports.prototype['query_fields'] = '*';



  return exports;
}));


