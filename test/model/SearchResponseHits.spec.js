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
    //instance = new Manticoresearch.SearchResponseHits();
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

  describe('SearchResponseHits', function() {
    it('should create an instance of SearchResponseHits', function() {
      // uncomment below and update the code to test SearchResponseHits
      //var instance = new Manticoresearch.SearchResponseHits();
      //expect(instance).to.be.a(Manticoresearch.SearchResponseHits);
    });

    it('should have the property maxScore (base name: "max_score")', function() {
      // uncomment below and update the code to test the property maxScore
      //var instance = new Manticoresearch.SearchResponseHits();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instance = new Manticoresearch.SearchResponseHits();
      //expect(instance).to.be();
    });

    it('should have the property totalRelation (base name: "total_relation")', function() {
      // uncomment below and update the code to test the property totalRelation
      //var instance = new Manticoresearch.SearchResponseHits();
      //expect(instance).to.be();
    });

    it('should have the property hits (base name: "hits")', function() {
      // uncomment below and update the code to test the property hits
      //var instance = new Manticoresearch.SearchResponseHits();
      //expect(instance).to.be();
    });

  });

}));
