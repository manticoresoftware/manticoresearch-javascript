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
    //instance = new Manticoresearch.UpdateResponse();
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

  describe('UpdateResponse', function() {
    it('should create an instance of UpdateResponse', function() {
      // uncomment below and update the code to test UpdateResponse
      //var instance = new Manticoresearch.UpdateResponse();
      //expect(instance).to.be.a(Manticoresearch.UpdateResponse);
    });

    it('should have the property index (base name: "_index")', function() {
      // uncomment below and update the code to test the property index
      //var instance = new Manticoresearch.UpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instance = new Manticoresearch.UpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Manticoresearch.UpdateResponse();
      //expect(instance).to.be();
    });

    it('should have the property result (base name: "result")', function() {
      // uncomment below and update the code to test the property result
      //var instance = new Manticoresearch.UpdateResponse();
      //expect(instance).to.be();
    });

  });

}));
