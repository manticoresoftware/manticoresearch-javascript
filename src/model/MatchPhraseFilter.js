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
    root.Manticoresearch.MatchPhraseFilter = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The MatchPhraseFilter model module.
   * @module model/MatchPhraseFilter
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>MatchPhraseFilter</code>.
   * Query match expression
   * @alias module:model/MatchPhraseFilter
   * @class
   * @param queryPhrase {String} 
   * @param queryFields {String} 
   */
  var exports = function(queryPhrase, queryFields) {
    var _this = this;

    _this['query_phrase'] = queryPhrase;
    _this['query_fields'] = queryFields;
  };

  /**
   * Constructs a <code>MatchPhraseFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MatchPhraseFilter} obj Optional instance to populate.
   * @return {module:model/MatchPhraseFilter} The populated <code>MatchPhraseFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('query_phrase')) {
        obj['query_phrase'] = ApiClient.convertToType(data['query_phrase'], 'String');
      }
      if (data.hasOwnProperty('query_fields')) {
        obj['query_fields'] = ApiClient.convertToType(data['query_fields'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} query_phrase
   */
  exports.prototype['query_phrase'] = undefined;
  /**
   * @member {String} query_fields
   */
  exports.prototype['query_fields'] = undefined;



  return exports;
}));


