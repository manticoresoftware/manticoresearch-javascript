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
    root.Manticoresearch.SortMultiple = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SortMultiple model module.
   * @module model/SortMultiple
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>SortMultiple</code>.
   * Query sort expression for multiple attributes
   * @alias module:model/SortMultiple
   * @class
   * @param attrs {Object.<String, Object>} 
   * @param replace {Boolean} 
   */
  var exports = function(attrs, replace) {
    var _this = this;

    _this['attrs'] = attrs;
    _this['replace'] = replace;
  };

  /**
   * Constructs a <code>SortMultiple</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SortMultiple} obj Optional instance to populate.
   * @return {module:model/SortMultiple} The populated <code>SortMultiple</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('attrs')) {
        obj['attrs'] = ApiClient.convertToType(data['attrs'], {'String': Object});
      }
      if (data.hasOwnProperty('replace')) {
        obj['replace'] = ApiClient.convertToType(data['replace'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, Object>} attrs
   */
  exports.prototype['attrs'] = undefined;
  /**
   * @member {Boolean} replace
   */
  exports.prototype['replace'] = undefined;



  return exports;
}));


