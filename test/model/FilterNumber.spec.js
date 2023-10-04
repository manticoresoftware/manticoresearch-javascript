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
    //instance = new Manticoresearch.FilterNumber();
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

  describe('FilterNumber', function() {
    it('should create an instance of FilterNumber', function() {
      // uncomment below and update the code to test FilterNumber
      //var instance = new Manticoresearch.FilterNumber();
      //expect(instance).to.be.a(Manticoresearch.FilterNumber);
    });

    it('should have the property filterField (base name: "filter_field")', function() {
      // uncomment below and update the code to test the property filterField
      //var instance = new Manticoresearch.FilterNumber();
      //expect(instance).to.be();
    });

    it('should have the property operation (base name: "operation")', function() {
      // uncomment below and update the code to test the property operation
      //var instance = new Manticoresearch.FilterNumber();
      //expect(instance).to.be();
    });

    it('should have the property filterValue (base name: "filter_value")', function() {
      // uncomment below and update the code to test the property filterValue
      //var instance = new Manticoresearch.FilterNumber();
      //expect(instance).to.be();
    });

  });

}));
