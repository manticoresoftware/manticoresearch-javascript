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
    root.Manticoresearch.GeoDistanceFilterLocationAnchor = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GeoDistanceFilterLocationAnchor model module.
   * @module model/GeoDistanceFilterLocationAnchor
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>GeoDistanceFilterLocationAnchor</code>.
   * Geo pin point object
   * @alias module:model/GeoDistanceFilterLocationAnchor
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GeoDistanceFilterLocationAnchor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeoDistanceFilterLocationAnchor} obj Optional instance to populate.
   * @return {module:model/GeoDistanceFilterLocationAnchor} The populated <code>GeoDistanceFilterLocationAnchor</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('lat')) {
        obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
      }
      if (data.hasOwnProperty('lon')) {
        obj['lon'] = ApiClient.convertToType(data['lon'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Geo latitude of pin point in degrees
   * @member {Number} lat
   */
  exports.prototype['lat'] = undefined;
  /**
   * Geo longitude pf pin point in degrees
   * @member {Number} lon
   */
  exports.prototype['lon'] = undefined;



  return exports;
}));


