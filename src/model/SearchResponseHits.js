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
    root.Manticoresearch.SearchResponseHits = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SearchResponseHits model module.
   * @module model/SearchResponseHits
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>SearchResponseHits</code>.
   * @alias module:model/SearchResponseHits
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SearchResponseHits</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchResponseHits} obj Optional instance to populate.
   * @return {module:model/SearchResponseHits} The populated <code>SearchResponseHits</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('max_score')) {
        obj['max_score'] = ApiClient.convertToType(data['max_score'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('total_relation')) {
        obj['total_relation'] = ApiClient.convertToType(data['total_relation'], 'String');
      }
      if (data.hasOwnProperty('hits')) {
        obj['hits'] = ApiClient.convertToType(data['hits'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} max_score
   */
  exports.prototype['max_score'] = undefined;
  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {String} total_relation
   */
  exports.prototype['total_relation'] = undefined;
  /**
   * @member {Array.<Object>} hits
   */
  exports.prototype['hits'] = undefined;



  return exports;
}));


