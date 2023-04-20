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
    //instance = new Manticoresearch.HighlightField();
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

  describe('HighlightField', function() {
    it('should create an instance of HighlightField', function() {
      // uncomment below and update the code to test HighlightField
      //var instance = new Manticoresearch.HighlightField();
      //expect(instance).to.be.a(Manticoresearch.HighlightField);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Manticoresearch.HighlightField();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new Manticoresearch.HighlightField();
      //expect(instance).to.be();
    });

    it('should have the property limitWords (base name: "limit_words")', function() {
      // uncomment below and update the code to test the property limitWords
      //var instance = new Manticoresearch.HighlightField();
      //expect(instance).to.be();
    });

    it('should have the property limitSnippets (base name: "limit_snippets")', function() {
      // uncomment below and update the code to test the property limitSnippets
      //var instance = new Manticoresearch.HighlightField();
      //expect(instance).to.be();
    });

  });

}));
