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
    root.Manticoresearch.QueryFilter = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The QueryFilter model module.
   * @module model/QueryFilter
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>QueryFilter</code>.
   * Query string filter
   * @alias module:model/QueryFilter
   * @class
   * @param queryString {String} 
   */
  var exports = function(queryString) {
    var _this = this;

    _this['query_string'] = queryString;
  };

  /**
   * Constructs a <code>QueryFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QueryFilter} obj Optional instance to populate.
   * @return {module:model/QueryFilter} The populated <code>QueryFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('query_string')) {
        obj['query_string'] = ApiClient.convertToType(data['query_string'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} query_string
   */
  exports.prototype['query_string'] = undefined;



  return exports;
}));


