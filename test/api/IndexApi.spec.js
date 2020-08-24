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
    var client= new Manticoresearch.ApiClient()
    client.basePath="http://manticoresearch-manticore:9308"
    instance = new Manticoresearch.IndexApi(client);
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

  describe('IndexApi', function() {
    describe('bulk', function() {
      it('should call bulk successfully', function(done) {
        
        let bulk = [{"insert": {"index": "test", "doc": {"content":"some test","name":"another test",'cat':21}}},
{"delete": {"index": "test","id":1}}];
        let bulk_nd = "";
        for (const item of bulk) {
            bulk_nd += JSON.stringify(item) + "\n";
        }	
        instance.bulk(bulk_nd, function(error) {
            if(error) throw error;
            expect().to.be();
        }
        );	
        done();
      });
    });
    describe('callDelete', function() {
      it('should call callDelete successfully', function(done) {
        instance.callDelete({
                'index': 'test',
                'id':1400
        }, function(error) {
            if(error) throw error;
            expect().to.be();
        });
        done();
      });
    });
    describe('insert', function() {
      it('should call insert successfully', function(done) {
        instance.insert({"index": "test", "doc": {"content":"some test","name":"another test",'cat':21}},function(error) {
            if (error) throw error;
            expect().to.be();
        });
        done();
      });
    });
    describe('replace', function() {
      it('should call replace successfully', function(done) {
        //uncomment below and update the code to test replace
        //instance.replace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('update', function() {
      it('should call update successfully', function(done) {
        //uncomment below and update the code to test update
        //instance.update(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
