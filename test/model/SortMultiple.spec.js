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
    //instance = new Manticoresearch.SortMultiple();
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

  describe('SortMultiple', function() {
    it('should create an instance of SortMultiple', function() {
      // uncomment below and update the code to test SortMultiple
      //var instance = new Manticoresearch.SortMultiple();
      //expect(instance).to.be.a(Manticoresearch.SortMultiple);
    });

    it('should have the property attrs (base name: "attrs")', function() {
      // uncomment below and update the code to test the property attrs
      //var instance = new Manticoresearch.SortMultiple();
      //expect(instance).to.be();
    });

    it('should have the property replace (base name: "replace")', function() {
      // uncomment below and update the code to test the property replace
      //var instance = new Manticoresearch.SortMultiple();
      //expect(instance).to.be();
    });

  });

}));
