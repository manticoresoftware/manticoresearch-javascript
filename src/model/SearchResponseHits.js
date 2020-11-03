/**
 * Manticore Search Client
 * Experimental low-level client for Manticore Search. 
 * Contact: info@manticoresearch.com
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
   * @version 2.0.0
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
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('hits')) {
        obj['hits'] = ApiClient.convertToType(data['hits'], [Object]);
      }
      if (data.hasOwnProperty('aggregations')) {
        obj['aggregations'] = ApiClient.convertToType(data['aggregations'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {Array.<Object>} hits
   */
  exports.prototype['hits'] = undefined;
  /**
   * @member {Array.<Object>} aggregations
   */
  exports.prototype['aggregations'] = undefined;



  return exports;
}));


