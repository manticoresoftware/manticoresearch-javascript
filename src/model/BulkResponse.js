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
    root.Manticoresearch.BulkResponse = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The BulkResponse model module.
   * @module model/BulkResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BulkResponse</code>.
   * Success bulk response
   * @alias module:model/BulkResponse
   * @class
   * @extends Object
   */
  var exports = function() {
    var _this = this;

    return _this;
  };

  /**
   * Constructs a <code>BulkResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkResponse} obj Optional instance to populate.
   * @return {module:model/BulkResponse} The populated <code>BulkResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Object');
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], Object);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Object} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {Boolean} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));


