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
    //instance = new Manticoresearch.SearchRequest();
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

  describe('SearchRequest', function() {
    it('should create an instance of SearchRequest', function() {
      // uncomment below and update the code to test SearchRequest
      //var instance = new Manticoresearch.SearchRequest();
      //expect(instance).to.be.a(Manticoresearch.SearchRequest);
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instance = new Manticoresearch.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instance = new Manticoresearch.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property limit (base name: "limit")', function() {
      // uncomment below and update the code to test the property limit
      //var instance = new Manticoresearch.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property offset (base name: "offset")', function() {
      // uncomment below and update the code to test the property offset
      //var instance = new Manticoresearch.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxMatches (base name: "max_matches")', function() {
      // uncomment below and update the code to test the property maxMatches
      //var instance = new Manticoresearch.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property sort (base name: "sort")', function() {
      // uncomment below and update the code to test the property sort
      //var instance = new Manticoresearch.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property aggs (base name: "aggs")', function() {
      // uncomment below and update the code to test the property aggs
      //var instance = new Manticoresearch.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property expressions (base name: "expressions")', function() {
      // uncomment below and update the code to test the property expressions
      //var instance = new Manticoresearch.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property highlight (base name: "highlight")', function() {
      // uncomment below and update the code to test the property highlight
      //var instance = new Manticoresearch.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "_source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new Manticoresearch.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instance = new Manticoresearch.SearchRequest();
      //expect(instance).to.be();
    });

    it('should have the property profile (base name: "profile")', function() {
      // uncomment below and update the code to test the property profile
      //var instance = new Manticoresearch.SearchRequest();
      //expect(instance).to.be();
    });

  });

}));
