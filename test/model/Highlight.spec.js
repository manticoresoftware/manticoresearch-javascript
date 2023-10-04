/*
 * Manticore Search Client
 * Copyright (c) 2020-2021, Manticore Software LTD (https://manticoresearch.com)
 *
 * All rights reserved
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Manticoresearch);
  }
}(this, function(expect, Manticoresearch) {
  'use strict';

  var instance;

  beforeEach(function() {
    // create a new instance
    //instance = new Manticoresearch.Highlight();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Highlight', function() {
    it('should create an instance of Highlight', function() {
      // uncomment below and update the code to test Highlight
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be.a(Manticoresearch.Highlight);
    });

    it('should have the property fieldnames (base name: "fieldnames")', function() {
      // uncomment below and update the code to test the property fieldnames
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property fields (base name: "fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property encoder (base name: "encoder")', function() {
      // uncomment below and update the code to test the property encoder
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property highlightQuery (base name: "highlight_query")', function() {
      // uncomment below and update the code to test the property highlightQuery
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property preTags (base name: "pre_tags")', function() {
      // uncomment below and update the code to test the property preTags
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property postTags (base name: "post_tags")', function() {
      // uncomment below and update the code to test the property postTags
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property noMatchSize (base name: "no_match_size")', function() {
      // uncomment below and update the code to test the property noMatchSize
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property fragmentSize (base name: "fragment_size")', function() {
      // uncomment below and update the code to test the property fragmentSize
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property numberOfFragments (base name: "number_of_fragments")', function() {
      // uncomment below and update the code to test the property numberOfFragments
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property limitWords (base name: "limit_words")', function() {
      // uncomment below and update the code to test the property limitWords
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property limitSnippets (base name: "limit_snippets")', function() {
      // uncomment below and update the code to test the property limitSnippets
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property limitsPerField (base name: "limits_per_field")', function() {
      // uncomment below and update the code to test the property limitsPerField
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property useBoundaries (base name: "use_boundaries")', function() {
      // uncomment below and update the code to test the property useBoundaries
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property forceAllWords (base name: "force_all_words")', function() {
      // uncomment below and update the code to test the property forceAllWords
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property allowEmpty (base name: "allow_empty")', function() {
      // uncomment below and update the code to test the property allowEmpty
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property emitZones (base name: "emit_zones")', function() {
      // uncomment below and update the code to test the property emitZones
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property forceSnippets (base name: "force_snippets")', function() {
      // uncomment below and update the code to test the property forceSnippets
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property around (base name: "around")', function() {
      // uncomment below and update the code to test the property around
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property startSnippetId (base name: "start_snippet_id")', function() {
      // uncomment below and update the code to test the property startSnippetId
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property htmlStripMode (base name: "html_strip_mode")', function() {
      // uncomment below and update the code to test the property htmlStripMode
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

    it('should have the property snippetBoundary (base name: "snippet_boundary")', function() {
      // uncomment below and update the code to test the property snippetBoundary
      //var instance = new Manticoresearch.Highlight();
      //expect(instance).to.be();
    });

  });

}));
