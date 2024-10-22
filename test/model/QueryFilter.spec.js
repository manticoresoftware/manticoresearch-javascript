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
    instance = new Manticoresearch.QueryFilter();
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

  describe('QueryFilter', function() {
    it('should create an instance of QueryFilter', function() {
      // uncomment below and update the code to test QueryFilter
      //var instance = new Manticoresearch.QueryFilter();
      //expect(instance).to.be.a(Manticoresearch.QueryFilter);
    });

    it('should have the property queryString (base name: "query_string")', function() {
      // uncomment below and update the code to test the property queryString
      //var instance = new Manticoresearch.QueryFilter();
      //expect(instance).to.be();
    });

    it('should have the property match (base name: "match")', function() {
      // uncomment below and update the code to test the property match
      //var instance = new Manticoresearch.QueryFilter();
      //expect(instance).to.be();
    });

    it('should have the property matchPhrase (base name: "match_phrase")', function() {
      // uncomment below and update the code to test the property matchPhrase
      //var instance = new Manticoresearch.QueryFilter();
      //expect(instance).to.be();
    });

    it('should have the property matchAll (base name: "match_all")', function() {
      // uncomment below and update the code to test the property matchAll
      //var instance = new Manticoresearch.QueryFilter();
      //expect(instance).to.be();
    });

    it('should have the property bool (base name: "bool")', function() {
      // uncomment below and update the code to test the property bool
      //var instance = new Manticoresearch.QueryFilter();
      //expect(instance).to.be();
    });

    it('should have the property equals (base name: "equals")', function() {
      // uncomment below and update the code to test the property equals
      //var instance = new Manticoresearch.QueryFilter();
      //expect(instance).to.be();
    });

    it('should have the property _in (base name: "in")', function() {
      // uncomment below and update the code to test the property _in
      //var instance = new Manticoresearch.QueryFilter();
      //expect(instance).to.be();
    });

    it('should have the property range (base name: "range")', function() {
      // uncomment below and update the code to test the property range
      //var instance = new Manticoresearch.QueryFilter();
      //expect(instance).to.be();
    });

    it('should have the property geoDistance (base name: "geo_distance")', function() {
      // uncomment below and update the code to test the property geoDistance
      //var instance = new Manticoresearch.QueryFilter();
      //expect(instance).to.be();
    });

  });

}));
