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
    root.Manticoresearch.DeleteDocumentRequest = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The DeleteDocumentRequest model module.
   * @module model/DeleteDocumentRequest
   * @version 3.2.1
   */

  /**
   * Constructs a new <code>DeleteDocumentRequest</code>.
   * Payload for delete request. Documents can be deleted either one by one by specifying the document id or by providing a query object. For more information see  [Delete API](https://manual.manticoresearch.com/Deleting_documents) 
   * @alias module:model/DeleteDocumentRequest
   * @class
   * @param index {String} Index name
   */
  var exports = function(index) {
    var _this = this;

    _this['index'] = index;
  };

  /**
   * Constructs a <code>DeleteDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteDocumentRequest} obj Optional instance to populate.
   * @return {module:model/DeleteDocumentRequest} The populated <code>DeleteDocumentRequest</code> instance.
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
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], Object);
      }
    }
    return obj;
  }

  /**
   * Index name
   * @member {String} index
   */
  exports.prototype['index'] = undefined;
  /**
   * cluster name
   * @member {String} cluster
   */
  exports.prototype['cluster'] = undefined;
  /**
   * Document ID
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Query tree object
   * @member {Object} query
   */
  exports.prototype['query'] = undefined;



  return exports;
}));


