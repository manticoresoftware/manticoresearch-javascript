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
    //instance = new Manticoresearch.SuccessResponse();
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

  describe('SuccessResponse', function() {
    it('should create an instance of SuccessResponse', function() {
      // uncomment below and update the code to test SuccessResponse
      //var instance = new Manticoresearch.SuccessResponse();
      //expect(instance).to.be.a(Manticoresearch.SuccessResponse);
    });

    it('should have the property index (base name: "_index")', function() {
      // uncomment below and update the code to test the property index
      //var instance = new Manticoresearch.SuccessResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Manticoresearch.SuccessResponse();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new Manticoresearch.SuccessResponse();
      //expect(instance).to.be();
    });

    it('should have the property result (base name: "result")', function() {
      // uncomment below and update the code to test the property result
      //var instance = new Manticoresearch.SuccessResponse();
      //expect(instance).to.be();
    });

    it('should have the property found (base name: "found")', function() {
      // uncomment below and update the code to test the property found
      //var instance = new Manticoresearch.SuccessResponse();
      //expect(instance).to.be();
    });

  });

}));
