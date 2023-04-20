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
    root.Manticoresearch.MatchOp = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MatchOp model module.
   * @module model/MatchOp
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>MatchOp</code>.
   * Query match expression with logical operator
   * @alias module:model/MatchOp
   * @class
   * @param queryInfo {Object} 
   */
  var exports = function(queryInfo) {
    var _this = this;

    _this['query_info'] = queryInfo;
  };

  /**
   * Constructs a <code>MatchOp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MatchOp} obj Optional instance to populate.
   * @return {module:model/MatchOp} The populated <code>MatchOp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('query_info')) {
        obj['query_info'] = ApiClient.convertToType(data['query_info'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object} query_info
   */
  exports.prototype['query_info'] = undefined;



  return exports;
}));


