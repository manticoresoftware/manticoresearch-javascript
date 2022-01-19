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
    root.Manticoresearch.PercolateRequest = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PercolateRequest model module.
   * @module model/PercolateRequest
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>PercolateRequest</code>.
   * Object with documents to percolate
   * @alias module:model/PercolateRequest
   * @class
   * @param query {Object.<String, Object>} 
   */
  var exports = function(query) {
    var _this = this;

    _this['query'] = query;
  };

  /**
   * Constructs a <code>PercolateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PercolateRequest} obj Optional instance to populate.
   * @return {module:model/PercolateRequest} The populated <code>PercolateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, Object>} query
   */
  exports.prototype['query'] = undefined;



  return exports;
}));


