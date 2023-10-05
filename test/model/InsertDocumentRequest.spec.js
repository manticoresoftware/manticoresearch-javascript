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
    //instance = new Manticoresearch.InsertDocumentRequest();
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

  describe('InsertDocumentRequest', function() {
    it('should create an instance of InsertDocumentRequest', function() {
      // uncomment below and update the code to test InsertDocumentRequest
      //var instance = new Manticoresearch.InsertDocumentRequest();
      //expect(instance).to.be.a(Manticoresearch.InsertDocumentRequest);
    });

    it('should have the property index (base name: "index")', function() {
      // uncomment below and update the code to test the property index
      //var instance = new Manticoresearch.InsertDocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property cluster (base name: "cluster")', function() {
      // uncomment below and update the code to test the property cluster
      //var instance = new Manticoresearch.InsertDocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Manticoresearch.InsertDocumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property doc (base name: "doc")', function() {
      // uncomment below and update the code to test the property doc
      //var instance = new Manticoresearch.InsertDocumentRequest();
      //expect(instance).to.be();
    });

  });

}));
