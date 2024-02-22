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
    //instance = new Manticoresearch.SearchRequestKnn();
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

  describe('SearchRequestKnn', function() {
    it('should create an instance of SearchRequestKnn', function() {
      // uncomment below and update the code to test SearchRequestKnn
      //var instance = new Manticoresearch.SearchRequestKnn();
      //expect(instance).to.be.a(Manticoresearch.SearchRequestKnn);
    });

    it('should have the property field (base name: "field")', function() {
      // uncomment below and update the code to test the property field
      //var instance = new Manticoresearch.SearchRequestKnn();
      //expect(instance).to.be();
    });

    it('should have the property queryVector (base name: "query_vector")', function() {
      // uncomment below and update the code to test the property queryVector
      //var instance = new Manticoresearch.SearchRequestKnn();
      //expect(instance).to.be();
    });

    it('should have the property k (base name: "k")', function() {
      // uncomment below and update the code to test the property k
      //var instance = new Manticoresearch.SearchRequestKnn();
      //expect(instance).to.be();
    });

    it('should have the property filter (base name: "filter")', function() {
      // uncomment below and update the code to test the property filter
      //var instance = new Manticoresearch.SearchRequestKnn();
      //expect(instance).to.be();
    });

    it('should have the property docId (base name: "doc_id")', function() {
      // uncomment below and update the code to test the property docId
      //var instance = new Manticoresearch.SearchRequestKnn();
      //expect(instance).to.be();
    });

  });

}));
