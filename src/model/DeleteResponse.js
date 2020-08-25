/**
 * Manticore Search Client
 * Experimental low-level client for Manticore Search. 
 * Contact: info@manticoresearch.com
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
    root.Manticoresearch.DeleteResponse = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The DeleteResponse model module.
   * @module model/DeleteResponse
   * @version 1.0.2
   */

  /**
   * Constructs a new <code>DeleteResponse</code>.
   * Success response
   * @alias module:model/DeleteResponse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>DeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteResponse} obj Optional instance to populate.
   * @return {module:model/DeleteResponse} The populated <code>DeleteResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('_index')) {
        obj['_index'] = ApiClient.convertToType(data['_index'], 'String');
      }
      if (data.hasOwnProperty('deleted')) {
        obj['deleted'] = ApiClient.convertToType(data['deleted'], 'Number');
      }
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'Number');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} _index
   */
  exports.prototype['_index'] = undefined;
  /**
   * @member {Number} deleted
   */
  exports.prototype['deleted'] = undefined;
  /**
   * @member {Number} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} result
   */
  exports.prototype['result'] = undefined;



  return exports;
}));


