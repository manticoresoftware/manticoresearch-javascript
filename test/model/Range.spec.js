/**
 * Manticore Search Client
 * Сlient for Manticore Search. 
 *
 * The version of the OpenAPI document: 5.0.0
 * Contact: info@manticoresearch.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
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
    instance = new Manticoresearch.Range();
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

  describe('Range', function() {
    it('should create an instance of Range', function() {
      // uncomment below and update the code to test Range
      //var instance = new Manticoresearch.Range();
      //expect(instance).to.be.a(Manticoresearch.Range);
    });

    it('should have the property lt (base name: "lt")', function() {
      // uncomment below and update the code to test the property lt
      //var instance = new Manticoresearch.Range();
      //expect(instance).to.be();
    });

    it('should have the property lte (base name: "lte")', function() {
      // uncomment below and update the code to test the property lte
      //var instance = new Manticoresearch.Range();
      //expect(instance).to.be();
    });

    it('should have the property gt (base name: "gt")', function() {
      // uncomment below and update the code to test the property gt
      //var instance = new Manticoresearch.Range();
      //expect(instance).to.be();
    });

    it('should have the property gte (base name: "gte")', function() {
      // uncomment below and update the code to test the property gte
      //var instance = new Manticoresearch.Range();
      //expect(instance).to.be();
    });

  });

}));
