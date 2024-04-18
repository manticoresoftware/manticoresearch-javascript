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
    root.Manticoresearch.RangeFilterLte = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The RangeFilterLte model module.
   * @module model/RangeFilterLte
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>RangeFilterLte</code>.
   * @alias module:model/RangeFilterLte
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>RangeFilterLte</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RangeFilterLte} obj Optional instance to populate.
   * @return {module:model/RangeFilterLte} The populated <code>RangeFilterLte</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
    }
    return obj;
  }




  return exports;
}));


