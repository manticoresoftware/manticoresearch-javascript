/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PercolateRequestQuery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PercolateRequestQuery'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.PercolateRequest = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.PercolateRequestQuery);
  }
}(this, function(ApiClient, PercolateRequestQuery) {
  'use strict';



  /**
   * The PercolateRequest model module.
   * @module model/PercolateRequest
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>PercolateRequest</code>.
   * Object with documents to percolate
   * @alias module:model/PercolateRequest
   * @class
   * @param query {module:model/PercolateRequestQuery} 
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
        obj['query'] = PercolateRequestQuery.constructFromObject(data['query']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PercolateRequestQuery} query
   */
  exports.prototype['query'] = undefined;



  return exports;
}));


