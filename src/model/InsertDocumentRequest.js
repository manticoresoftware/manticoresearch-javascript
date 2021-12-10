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
    root.Manticoresearch.InsertDocumentRequest = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The InsertDocumentRequest model module.
   * @module model/InsertDocumentRequest
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>InsertDocumentRequest</code>.
   * Object with document data. 
   * @alias module:model/InsertDocumentRequest
   * @class
   * @param index {String} Name of the index
   * @param doc {Object.<String, Object>} Object with document data 
   */
  var exports = function(index, doc) {
    var _this = this;

    _this['index'] = index;
    _this['doc'] = doc;
  };

  /**
   * Constructs a <code>InsertDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InsertDocumentRequest} obj Optional instance to populate.
   * @return {module:model/InsertDocumentRequest} The populated <code>InsertDocumentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'String');
      }
      if (data.hasOwnProperty('cluster')) {
        obj['cluster'] = ApiClient.convertToType(data['cluster'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('doc')) {
        obj['doc'] = ApiClient.convertToType(data['doc'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * Name of the index
   * @member {String} index
   */
  exports.prototype['index'] = undefined;
  /**
   * cluster name
   * @member {String} cluster
   */
  exports.prototype['cluster'] = undefined;
  /**
   * Document ID. 
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Object with document data 
   * @member {Object.<String, Object>} doc
   */
  exports.prototype['doc'] = undefined;



  return exports;
}));


