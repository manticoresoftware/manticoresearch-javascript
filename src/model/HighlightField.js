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
    root.Manticoresearch.HighlightField = factory(root.Manticoresearch.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The HighlightField model module.
   * @module model/HighlightField
   * @version 4.0.0
   */

  /**
   * Constructs a new <code>HighlightField</code>.
   * Query Highlight field with options set
   * @alias module:model/HighlightField
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;
    _this['limit'] = this.limit;
    _this['limit_words'] = this.limitWords;
    _this['limit_snippets'] = this.limitSnippets;
  };

  /**
   * Constructs a <code>HighlightField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HighlightField} obj Optional instance to populate.
   * @return {module:model/HighlightField} The populated <code>HighlightField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('limit_words')) {
        obj['limit_words'] = ApiClient.convertToType(data['limit_words'], 'Number');
      }
      if (data.hasOwnProperty('limit_snippets')) {
        obj['limit_snippets'] = ApiClient.convertToType(data['limit_snippets'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} limit
   * @default 256
   */
  exports.prototype['limit'] = 256;
  /**
   * @member {Number} limit_words
   * @default 0
   */
  exports.prototype['limit_words'] = 0;
  /**
   * @member {Number} limit_snippets
   * @default 0
   */
  exports.prototype['limit_snippets'] = 0;



  return exports;
}));


