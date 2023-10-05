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
    root.Manticoresearch.Facet = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Facet model module.
   * @module model/Facet
   * @version 3.3.1
   */

  /**
   * Constructs a new <code>Facet</code>.
   * Query FACET expression
   * @alias module:model/Facet
   * @class
   * @param attr {String} The name of an attribute to facet
   */
  var exports = function(attr) {
    var _this = this;

    _this['attr'] = attr;
  };

  /**
   * Constructs a <code>Facet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Facet} obj Optional instance to populate.
   * @return {module:model/Facet} The populated <code>Facet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('attr')) {
        obj['attr'] = ApiClient.convertToType(data['attr'], 'String');
      }
      if (data.hasOwnProperty('alias')) {
        obj['alias'] = ApiClient.convertToType(data['alias'], 'String');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The name of an attribute to facet
   * @member {String} attr
   */
  exports.prototype['attr'] = undefined;
  /**
   * Facet alias
   * @member {String} alias
   */
  exports.prototype['alias'] = undefined;
  /**
   * The number of facet values to return
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;



  return exports;
}));


