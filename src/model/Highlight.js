/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/HighlightField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HighlightField'));
  } else {
    // Browser globals (root is window)
    if (!root.Manticoresearch) {
      root.Manticoresearch = {};
    }
    root.Manticoresearch.Highlight = factory(root.Manticoresearch.ApiClient, root.Manticoresearch.HighlightField);
  }
}(this, function(ApiClient, HighlightField) {
  'use strict';



  /**
   * The Highlight model module.
   * @module model/Highlight
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>Highlight</code>.
   * Query HIGHLIGHT expression
   * @alias module:model/Highlight
   * @class
   */
  var exports = function() {
    var _this = this;

    _this['pre_tags'] = this.preTags;
    _this['post_tags'] = this.postTags;
    _this['fragment_size'] = this.fragmentSize;
    _this['number_of_fragments'] = this.numberOfFragments;
    _this['limit'] = this.limit;
    _this['limit_words'] = this.limitWords;
    _this['limit_snippets'] = this.limitSnippets;
    _this['limits_per_field'] = this.limitsPerField;
    _this['use_boundaries'] = this.useBoundaries;
    _this['force_all_words'] = this.forceAllWords;
    _this['allow_empty'] = this.allowEmpty;
    _this['emit_zones'] = this.emitZones;
    _this['force_snippets'] = this.forceSnippets;
    _this['around'] = this.around;
    _this['start_snippet_id'] = this.startSnippetId;
  };

  /**
   * Constructs a <code>Highlight</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Highlight} obj Optional instance to populate.
   * @return {module:model/Highlight} The populated <code>Highlight</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('fieldnames')) {
        obj['fieldnames'] = ApiClient.convertToType(data['fieldnames'], ['String']);
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], [HighlightField]);
      }
      if (data.hasOwnProperty('encoder')) {
        obj['encoder'] = ApiClient.convertToType(data['encoder'], 'String');
      }
      if (data.hasOwnProperty('highlight_query')) {
        obj['highlight_query'] = ApiClient.convertToType(data['highlight_query'], {'String': Object});
      }
      if (data.hasOwnProperty('pre_tags')) {
        obj['pre_tags'] = ApiClient.convertToType(data['pre_tags'], 'String');
      }
      if (data.hasOwnProperty('post_tags')) {
        obj['post_tags'] = ApiClient.convertToType(data['post_tags'], 'String');
      }
      if (data.hasOwnProperty('no_match_size')) {
        obj['no_match_size'] = ApiClient.convertToType(data['no_match_size'], 'Number');
      }
      if (data.hasOwnProperty('fragment_size')) {
        obj['fragment_size'] = ApiClient.convertToType(data['fragment_size'], 'Number');
      }
      if (data.hasOwnProperty('number_of_fragments')) {
        obj['number_of_fragments'] = ApiClient.convertToType(data['number_of_fragments'], 'Number');
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
      if (data.hasOwnProperty('limits_per_field')) {
        obj['limits_per_field'] = ApiClient.convertToType(data['limits_per_field'], 'Boolean');
      }
      if (data.hasOwnProperty('use_boundaries')) {
        obj['use_boundaries'] = ApiClient.convertToType(data['use_boundaries'], 'Boolean');
      }
      if (data.hasOwnProperty('force_all_words')) {
        obj['force_all_words'] = ApiClient.convertToType(data['force_all_words'], 'Boolean');
      }
      if (data.hasOwnProperty('allow_empty')) {
        obj['allow_empty'] = ApiClient.convertToType(data['allow_empty'], 'Boolean');
      }
      if (data.hasOwnProperty('emit_zones')) {
        obj['emit_zones'] = ApiClient.convertToType(data['emit_zones'], 'Boolean');
      }
      if (data.hasOwnProperty('force_snippets')) {
        obj['force_snippets'] = ApiClient.convertToType(data['force_snippets'], 'Boolean');
      }
      if (data.hasOwnProperty('around')) {
        obj['around'] = ApiClient.convertToType(data['around'], 'Number');
      }
      if (data.hasOwnProperty('start_snippet_id')) {
        obj['start_snippet_id'] = ApiClient.convertToType(data['start_snippet_id'], 'Number');
      }
      if (data.hasOwnProperty('html_strip_mode')) {
        obj['html_strip_mode'] = ApiClient.convertToType(data['html_strip_mode'], 'String');
      }
      if (data.hasOwnProperty('snippet_boundary')) {
        obj['snippet_boundary'] = ApiClient.convertToType(data['snippet_boundary'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} fieldnames
   */
  exports.prototype['fieldnames'] = undefined;
  /**
   * @member {Array.<module:model/HighlightField>} fields
   */
  exports.prototype['fields'] = undefined;
  /**
   * @member {module:model/Highlight.EncoderEnum} encoder
   */
  exports.prototype['encoder'] = undefined;
  /**
   * @member {Object.<String, Object>} highlight_query
   */
  exports.prototype['highlight_query'] = undefined;
  /**
   * @member {String} pre_tags
   * @default '<strong>'
   */
  exports.prototype['pre_tags'] = '<strong>';
  /**
   * @member {String} post_tags
   * @default '</strong>'
   */
  exports.prototype['post_tags'] = '</strong>';
  /**
   * @member {module:model/Highlight.NoMatchSizeEnum} no_match_size
   */
  exports.prototype['no_match_size'] = undefined;
  /**
   * @member {Number} fragment_size
   * @default 256
   */
  exports.prototype['fragment_size'] = 256;
  /**
   * @member {Number} number_of_fragments
   * @default 0
   */
  exports.prototype['number_of_fragments'] = 0;
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
  /**
   * @member {Boolean} limits_per_field
   * @default false
   */
  exports.prototype['limits_per_field'] = false;
  /**
   * @member {Boolean} use_boundaries
   * @default false
   */
  exports.prototype['use_boundaries'] = false;
  /**
   * @member {Boolean} force_all_words
   * @default false
   */
  exports.prototype['force_all_words'] = false;
  /**
   * @member {Boolean} allow_empty
   * @default false
   */
  exports.prototype['allow_empty'] = false;
  /**
   * @member {Boolean} emit_zones
   * @default false
   */
  exports.prototype['emit_zones'] = false;
  /**
   * @member {Boolean} force_snippets
   * @default false
   */
  exports.prototype['force_snippets'] = false;
  /**
   * @member {Number} around
   * @default 5
   */
  exports.prototype['around'] = 5;
  /**
   * @member {Number} start_snippet_id
   * @default 1
   */
  exports.prototype['start_snippet_id'] = 1;
  /**
   * @member {module:model/Highlight.HtmlStripModeEnum} html_strip_mode
   */
  exports.prototype['html_strip_mode'] = undefined;
  /**
   * @member {module:model/Highlight.SnippetBoundaryEnum} snippet_boundary
   */
  exports.prototype['snippet_boundary'] = undefined;


  /**
   * Allowed values for the <code>encoder</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EncoderEnum = {
    /**
     * value: "default"
     * @const
     */
    "default": "default",
    /**
     * value: "html"
     * @const
     */
    "html": "html"  };

  /**
   * Allowed values for the <code>no_match_size</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.NoMatchSizeEnum = {
    /**
     * value: 0
     * @const
     */
    "0": 0,
    /**
     * value: 1
     * @const
     */
    "1": 1  };

  /**
   * Allowed values for the <code>html_strip_mode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HtmlStripModeEnum = {
    /**
     * value: "none"
     * @const
     */
    "none": "none",
    /**
     * value: "strip"
     * @const
     */
    "strip": "strip",
    /**
     * value: "index"
     * @const
     */
    "index": "index",
    /**
     * value: "retain"
     * @const
     */
    "retain": "retain"  };

  /**
   * Allowed values for the <code>snippet_boundary</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SnippetBoundaryEnum = {
    /**
     * value: "sentence"
     * @const
     */
    "sentence": "sentence",
    /**
     * value: "paragraph"
     * @const
     */
    "paragraph": "paragraph",
    /**
     * value: "zone"
     * @const
     */
    "zone": "zone"  };


  return exports;
}));


