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
    //instance = new Manticoresearch.SourceByRules();
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

  describe('SourceByRules', function() {
    it('should create an instance of SourceByRules', function() {
      // uncomment below and update the code to test SourceByRules
      //var instance = new Manticoresearch.SourceByRules();
      //expect(instance).to.be.a(Manticoresearch.SourceByRules);
    });

    it('should have the property includes (base name: "includes")', function() {
      // uncomment below and update the code to test the property includes
      //var instance = new Manticoresearch.SourceByRules();
      //expect(instance).to.be();
    });

    it('should have the property excludes (base name: "excludes")', function() {
      // uncomment below and update the code to test the property excludes
      //var instance = new Manticoresearch.SourceByRules();
      //expect(instance).to.be();
    });

  });

}));
