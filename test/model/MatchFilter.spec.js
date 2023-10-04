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
    //instance = new Manticoresearch.MatchFilter();
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

  describe('MatchFilter', function() {
    it('should create an instance of MatchFilter', function() {
      // uncomment below and update the code to test MatchFilter
      //var instance = new Manticoresearch.MatchFilter();
      //expect(instance).to.be.a(Manticoresearch.MatchFilter);
    });

    it('should have the property queryString (base name: "query_string")', function() {
      // uncomment below and update the code to test the property queryString
      //var instance = new Manticoresearch.MatchFilter();
      //expect(instance).to.be();
    });

    it('should have the property queryFields (base name: "query_fields")', function() {
      // uncomment below and update the code to test the property queryFields
      //var instance = new Manticoresearch.MatchFilter();
      //expect(instance).to.be();
    });

  });

}));
