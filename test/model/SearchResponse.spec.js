/**
 * Manticore Search Client
 * Experimental low-level client for Manticore Search. 
 * Contact: info@manticoresearch.com
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
    //instance = new Manticoresearch.SearchResponse();
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

  describe('SearchResponse', function() {
    it('should create an instance of SearchResponse', function() {
      // uncomment below and update the code to test SearchResponse
      //var instance = new Manticoresearch.SearchResponse();
      //expect(instance).to.be.a(Manticoresearch.SearchResponse);
    });

    it('should have the property took (base name: "took")', function() {
      // uncomment below and update the code to test the property took
      //var instance = new Manticoresearch.SearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property timedOut (base name: "timed_out")', function() {
      // uncomment below and update the code to test the property timedOut
      //var instance = new Manticoresearch.SearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property hits (base name: "hits")', function() {
      // uncomment below and update the code to test the property hits
      //var instance = new Manticoresearch.SearchResponse();
      //expect(instance).to.be();
    });

    it('should have the property profile (base name: "profile")', function() {
      // uncomment below and update the code to test the property profile
      //var instance = new Manticoresearch.SearchResponse();
      //expect(instance).to.be();
    });

  });

}));
