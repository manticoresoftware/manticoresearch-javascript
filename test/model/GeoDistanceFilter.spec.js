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
    //instance = new Manticoresearch.GeoDistanceFilter();
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

  describe('GeoDistanceFilter', function() {
    it('should create an instance of GeoDistanceFilter', function() {
      // uncomment below and update the code to test GeoDistanceFilter
      //var instance = new Manticoresearch.GeoDistanceFilter();
      //expect(instance).to.be.a(Manticoresearch.GeoDistanceFilter);
    });

    it('should have the property locationAnchor (base name: "location_anchor")', function() {
      // uncomment below and update the code to test the property locationAnchor
      //var instance = new Manticoresearch.GeoDistanceFilter();
      //expect(instance).to.be();
    });

    it('should have the property locationSource (base name: "location_source")', function() {
      // uncomment below and update the code to test the property locationSource
      //var instance = new Manticoresearch.GeoDistanceFilter();
      //expect(instance).to.be();
    });

    it('should have the property distanceType (base name: "distance_type")', function() {
      // uncomment below and update the code to test the property distanceType
      //var instance = new Manticoresearch.GeoDistanceFilter();
      //expect(instance).to.be();
    });

    it('should have the property distance (base name: "distance")', function() {
      // uncomment below and update the code to test the property distance
      //var instance = new Manticoresearch.GeoDistanceFilter();
      //expect(instance).to.be();
    });

  });

}));
