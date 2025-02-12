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

  var indexApi;
  var searchApi;
  var utilsApi;

  beforeEach(function() {
    var client= new Manticoresearch.ApiClient()
    client.basePath="http://localhost:9418";
    indexApi = new Manticoresearch.IndexApi(client);
    searchApi = new Manticoresearch.SearchApi(client);
    utilsApi = new Manticoresearch.UtilsApi(client);
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

  describe('Manual', function() {
    describe('test', function() {
      it('run manual code samples',async function() {
	
		try {
			let res =  await utilsApi.sql('DROP TABLE IF EXISTS movies');
			res =  await utilsApi.sql('CREATE TABLE IF NOT EXISTS movies (title text, plot text, year integer, rating float, code multi)');

			let docs = [ 
				{"insert": {"table" : "movies", "id" : 1, "doc" : {"title" : "Star Trek 2: Nemesis", "plot": "The Enterprise is diverted to the Romulan homeworld Romulus, supposedly because they want to negotiate a peace treaty. Captain Picard and his crew discover a serious threat to the Federation once Praetor Shinzon plans to attack Earth.", "year": 2002, "rating": 6.4, "code": [1,2,3]}}},
				{"insert": {"table" : "movies", "id" : 2, "doc" : {"title" : "Star Trek 1: Nemesis", "plot": "The Enterprise is diverted to the Romulan homeworld Romulus, supposedly because they want to negotiate a peace treaty. Captain Picard and his crew discover a serious threat to the Federation once Praetor Shinzon plans to attack Earth.", "year": 2001, "rating": 6.5, "code": [1,12,3]}}},
				{"insert": {"table" : "movies", "id" : 3, "doc" : {"title" : "Star Trek 3: Nemesis", "plot": "The Enterprise is diverted to the Romulan homeworld Romulus, supposedly because they want to negotiate a peace treaty. Captain Picard and his crew discover a serious threat to the Federation once Praetor Shinzon plans to attack Earth.", "year": 2003, "rating": 6.6, "code": [11,2,3]}}},
				{"insert": {"table" : "movies", "id" : 4, "doc" : {"title" : "Star Trek 4: Nemesis", "plot": "The Enterprise is diverted to the Romulan homeworld Romulus, supposedly because they want to negotiate a peace treaty. Captain Picard and his crew discover a serious threat to the Federation once Praetor Shinzon plans to attack Earth.", "year": 2003, "rating": 6.5, "code": [1,2,4]}}}
			];
			res =  await indexApi.bulk(docs.map(e=>JSON.stringify(e)).join('\n'));

			let search_request = {"table":"movies"};

			res = await searchApi.search(search_request);

			let query_highlight = new Manticoresearch.Highlight()
      		query_highlight.fields = {"title":{}}
      
      		let search_query = new Manticoresearch.SearchQuery()
      		search_query.query_string = "@title Trek 4"
      
      		search_request = new Manticoresearch.SearchRequest()
      		search_request.table = "movies"
      		search_request.query = search_query
      		search_request.highlight = query_highlight
  
			console.log("The response of SearchApi->search:\n")    
      		let search_response = await searchApi.search(search_request)    
	    	console.log(search_response.hits.hits[0].highlight)

			search_response = await searchApi.search({"table": "movies", "query": {"query_string": "@title Trek 4"}, "highlight": {"fields": ["title"]}});
			console.log(search_response.hits.hits[0].highlight)
			
			console.log("Search tests finished");
		} catch (e) {
			console.error(e);
		}
				
		console.log("Tests finished");
      });
    });

 });

}));
