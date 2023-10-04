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
    root.Manticoresearch.Aggregation = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Aggregation model module.
   * @module model/Aggregation
   * @version 3.3.1
   */

  /**
   * Constructs a new <code>Aggregation</code>.
   * Query aggregation object
   * @alias module:model/Aggregation
   * @class
   * @param name {String} 
   * @param field {String} 
   */
  var exports = function(name, field) {
    var _this = this;

    _this['name'] = name;
    _this['field'] = field;
    _this['size'] = this.size;
  };

  /**
   * Constructs a <code>Aggregation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Aggregation} obj Optional instance to populate.
   * @return {module:model/Aggregation} The populated <code>Aggregation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} field
   */
  exports.prototype['field'] = undefined;
  /**
   * @member {Number} size
   * @default 20
   */
  exports.prototype['size'] = 20;



  return exports;
}));


