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
    root.Manticoresearch.SourceByRules = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SourceByRules model module.
   * @module model/SourceByRules
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>SourceByRules</code>.
   * Query fields to be included/excluded to/from response
   * @alias module:model/SourceByRules
   * @class
   * @param includes {Array.<String>} 
   * @param excludes {Array.<String>} 
   */
  var exports = function(includes, excludes) {
    var _this = this;

    _this['includes'] = includes;
    _this['excludes'] = excludes;
  };

  /**
   * Constructs a <code>SourceByRules</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SourceByRules} obj Optional instance to populate.
   * @return {module:model/SourceByRules} The populated <code>SourceByRules</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('includes')) {
        obj['includes'] = ApiClient.convertToType(data['includes'], ['String']);
      }
      if (data.hasOwnProperty('excludes')) {
        obj['excludes'] = ApiClient.convertToType(data['excludes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} includes
   */
  exports.prototype['includes'] = undefined;
  /**
   * @member {Array.<String>} excludes
   */
  exports.prototype['excludes'] = undefined;



  return exports;
}));


