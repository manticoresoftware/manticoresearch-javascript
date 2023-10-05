/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GeoDistanceFilterLocationAnchor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GeoDistanceFilterLocationAnchor'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.GeoDistanceFilter = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.GeoDistanceFilterLocationAnchor);
  }
}(this, function(ApiClient, GeoDistanceFilterLocationAnchor) {
  'use strict';



  /**
   * The GeoDistanceFilter model module.
   * @module model/GeoDistanceFilter
   * @version 3.3.1
   */

  /**
   * Constructs a new <code>GeoDistanceFilter</code>.
   * Geo distance attribute filter
   * @alias module:model/GeoDistanceFilter
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>GeoDistanceFilter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeoDistanceFilter} obj Optional instance to populate.
   * @return {module:model/GeoDistanceFilter} The populated <code>GeoDistanceFilter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('location_anchor')) {
        obj['location_anchor'] = GeoDistanceFilterLocationAnchor.constructFromObject(data['location_anchor']);
      }
      if (data.hasOwnProperty('location_source')) {
        obj['location_source'] = ApiClient.convertToType(data['location_source'], 'String');
      }
      if (data.hasOwnProperty('distance_type')) {
        obj['distance_type'] = ApiClient.convertToType(data['distance_type'], 'String');
      }
      if (data.hasOwnProperty('distance')) {
        obj['distance'] = ApiClient.convertToType(data['distance'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GeoDistanceFilterLocationAnchor} location_anchor
   */
  exports.prototype['location_anchor'] = undefined;
  /**
   * Attribute containing latitude and longitude data
   * @member {String} location_source
   */
  exports.prototype['location_source'] = undefined;
  /**
   * @member {module:model/GeoDistanceFilter.DistanceTypeEnum} distance_type
   */
  exports.prototype['distance_type'] = undefined;
  /**
   * @member {String} distance
   */
  exports.prototype['distance'] = undefined;


  /**
   * Allowed values for the <code>distance_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DistanceTypeEnum = {
    /**
     * value: "adaptive"
     * @const
     */
    "adaptive": "adaptive",
    /**
     * value: "haversine"
     * @const
     */
    "haversine": "haversine"  };


  return exports;
}));


