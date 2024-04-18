/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RangeFilterLte'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RangeFilterLte'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.RangeFilter = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.RangeFilterLte);
  }
}(this, function(ApiClient, RangeFilterLte) {
  'use strict';



  /**
   * The RangeFilter model module.
   * @module model/RangeFilter
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>RangeFilter</code>.
   * Range attribute filter
   * @alias module:model/RangeFilter
   * @class
   * @param field {String} 
   */
  var exports = function(field) {
    var _this = this;

    _this['field'] = field;
  };

  /**
   * Constructs a <code>RangeFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RangeFilter} obj Optional instance to populate.
   * @return {module:model/RangeFilter} The populated <code>RangeFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('lte')) {
        obj['lte'] = RangeFilterLte.constructFromObject(data['lte']);
      }
      if (data.hasOwnProperty('gte')) {
        obj['gte'] = RangeFilterLte.constructFromObject(data['gte']);
      }
      if (data.hasOwnProperty('lt')) {
        obj['lt'] = RangeFilterLte.constructFromObject(data['lt']);
      }
      if (data.hasOwnProperty('gt')) {
        obj['gt'] = RangeFilterLte.constructFromObject(data['gt']);
      }
    }
    return obj;
  }

  /**
   * @member {String} field
   */
  exports.prototype['field'] = undefined;
  /**
   * @member {module:model/RangeFilterLte} lte
   */
  exports.prototype['lte'] = undefined;
  /**
   * @member {module:model/RangeFilterLte} gte
   */
  exports.prototype['gte'] = undefined;
  /**
   * @member {module:model/RangeFilterLte} lt
   */
  exports.prototype['lt'] = undefined;
  /**
   * @member {module:model/RangeFilterLte} gt
   */
  exports.prototype['gt'] = undefined;



  return exports;
}));


