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
    root.Manticoresearch.MatchOpFilter = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MatchOpFilter model module.
   * @module model/MatchOpFilter
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>MatchOpFilter</code>.
   * Query match expression
   * @alias module:model/MatchOpFilter
   * @class
   * @param queryString {String} 
   * @param queryFields {String} 
   * @param operator {module:model/MatchOpFilter.OperatorEnum} 
   */
  var exports = function(queryString, queryFields, operator) {
    var _this = this;

    _this['query_string'] = queryString;
    _this['query_fields'] = queryFields;
    _this['operator'] = operator;
  };

  /**
   * Constructs a <code>MatchOpFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MatchOpFilter} obj Optional instance to populate.
   * @return {module:model/MatchOpFilter} The populated <code>MatchOpFilter</code> instance.
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
      if (data.hasOwnProperty('operator')) {
        obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} query_string
   */
  exports.prototype['query_string'] = undefined;
  /**
   * @member {String} query_fields
   */
  exports.prototype['query_fields'] = undefined;
  /**
   * @member {module:model/MatchOpFilter.OperatorEnum} operator
   */
  exports.prototype['operator'] = undefined;


  /**
   * Allowed values for the <code>operator</code> property.
   * @enum {String}
   * @readonly
   */
  exports.OperatorEnum = {
    /**
     * value: "or"
     * @const
     */
    "or": "or",
    /**
     * value: "and"
     * @const
     */
    "and": "and"  };


  return exports;
}));


