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
    root.Manticoresearch.ReplaceDocumentRequest = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ReplaceDocumentRequest model module.
   * @module model/ReplaceDocumentRequest
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>ReplaceDocumentRequest</code>.
   * Object with document data. 
   * @alias module:model/ReplaceDocumentRequest
   * @class
   * @param doc {Object.<String, Object>} Object with document data 
   */
  var exports = function(doc) {
    var _this = this;

    _this['doc'] = doc;
  };

  /**
   * Constructs a <code>ReplaceDocumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReplaceDocumentRequest} obj Optional instance to populate.
   * @return {module:model/ReplaceDocumentRequest} The populated <code>ReplaceDocumentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('doc')) {
        obj['doc'] = ApiClient.convertToType(data['doc'], {'String': Object});
      }
    }
    return obj;
  }

  /**
   * Object with document data 
   * @member {Object.<String, Object>} doc
   */
  exports.prototype['doc'] = undefined;



  return exports;
}));


