/**
 * Manticore Search Client
 * Experimental low-level client for Manticore Search. 
 * Contact: info@manticoresearch.com
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SearchResponseHits'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SearchResponseHits'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.SearchResponse = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.SearchResponseHits);
  }
}(this, function(ApiClient, SearchResponseHits) {
  'use strict';



  /**
   * The SearchResponse model module.
   * @module model/SearchResponse
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>SearchResponse</code>.
   * Response object of a search request
   * @alias module:model/SearchResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>SearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchResponse} obj Optional instance to populate.
   * @return {module:model/SearchResponse} The populated <code>SearchResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('took')) {
        obj['took'] = ApiClient.convertToType(data['took'], 'Number');
      }
      if (data.hasOwnProperty('timed_out')) {
        obj['timed_out'] = ApiClient.convertToType(data['timed_out'], 'Boolean');
      }
      if (data.hasOwnProperty('hits')) {
        obj['hits'] = SearchResponseHits.constructFromObject(data['hits']);
      }
      if (data.hasOwnProperty('profile')) {
        obj['profile'] = ApiClient.convertToType(data['profile'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Number} took
   */
  exports.prototype['took'] = undefined;
  /**
   * @member {Boolean} timed_out
   */
  exports.prototype['timed_out'] = undefined;
  /**
   * @member {module:model/SearchResponseHits} hits
   */
  exports.prototype['hits'] = undefined;
  /**
   * @member {Object} profile
   */
  exports.prototype['profile'] = undefined;



  return exports;
}));


