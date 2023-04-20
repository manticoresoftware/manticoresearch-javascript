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
    root.Manticoresearch.PercolateRequestQuery = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PercolateRequestQuery model module.
   * @module model/PercolateRequestQuery
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>PercolateRequestQuery</code>.
   * @alias module:model/PercolateRequestQuery
   * @class
   * @extends Object
   * @param percolate {Object} 
   */
  var exports = function(percolate) {
    var _this = this;

    _this['percolate'] = percolate;
    return _this;
  };

  /**
   * Constructs a <code>PercolateRequestQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PercolateRequestQuery} obj Optional instance to populate.
   * @return {module:model/PercolateRequestQuery} The populated <code>PercolateRequestQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Object');
      if (data.hasOwnProperty('percolate')) {
        obj['percolate'] = ApiClient.convertToType(data['percolate'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object} percolate
   */
  exports.prototype['percolate'] = undefined;



  return exports;
}));


