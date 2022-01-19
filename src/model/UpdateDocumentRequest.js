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
    root.Manticoresearch.UpdateDocumentRequest = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The UpdateDocumentRequest model module.
   * @module model/UpdateDocumentRequest
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>UpdateDocumentRequest</code>.
   * Payload for update document
   * @alias module:model/UpdateDocumentRequest
   * @class
   * @param index {String} 
   * @param doc {Object.<String, Object>} Index name
   */
  var exports = function(index, doc) {
    var _this = this;

    _this['index'] = index;
    _this['doc'] = doc;
  };

  /**
   * Constructs a <code>UpdateDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateDocumentRequest} obj Optional instance to populate.
   * @return {module:model/UpdateDocumentRequest} The populated <code>UpdateDocumentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'String');
      }
      if (data.hasOwnProperty('doc')) {
        obj['doc'] = ApiClient.convertToType(data['doc'], {'String': Object});
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * @member {String} index
   */
  exports.prototype['index'] = undefined;
  /**
   * Index name
   * @member {Object.<String, Object>} doc
   */
  exports.prototype['doc'] = undefined;
  /**
   * Document ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Query tree object
   * @member {Object.<String, Object>} query
   */
  exports.prototype['query'] = undefined;



  return exports;
}));


