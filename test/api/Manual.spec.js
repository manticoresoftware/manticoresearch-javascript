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
    client.basePath="http://127.0.0.1:9308";
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
        let res =  await utilsApi.sql('DROP TABLE IF EXISTS products');
		console.log(res)
        res =  await utilsApi.sql('CREATE TABLE IF NOT EXISTS products (title text, price float, sizes multi, meta json, coeff float, tags1 multi, tags2 multi)', {'rawResponse': true});
		console.log(res)
		res =  await utilsApi.sql('SELECT * FROM products', {'rawResponse': false} );
		console.log(res)
		res =  await utilsApi.sql('SELECT * FROM products', {'rawResponse': true} );
		console.log(res)
        res =  await indexApi.insert({"index" : "products", "id" : 1, "doc" : {"title" : "Crossbody Bag with Tassel", "price" : 19.85}});
        res =  await indexApi.insert({"index" : "products", "id" : 2, "doc" : {"title" : "Crossbody Bag with Tassel"}});
        res =  await indexApi.insert({"index" : "products", "id" : 0, "doc" : {"title" : "Yellow bag"}});
        
        res =  await indexApi.insert({"index" : "products", "id" : 0, "doc" : {"title" : "Yellow bag"}});
        
        let docs = [ 
            {"insert": {"index" : "products", "id" : 3, "doc" : {"title" : "Crossbody Bag with Tassel", "price" : 19.85}}}, 
            {"insert": {"index" : "products", "id" : 4, "doc" : {"title" : "microfiber sheet set", "price" : 19.99}}}, 
            {"insert": {"index" : "products", "id" : 5, "doc" : {"title" : "CPet Hair Remover Glove", "price" : 7.99}}}
        ];
        res =  await indexApi.bulk(docs.map(e=>JSON.stringify(e)).join('\n'));
         
        
        res =  await indexApi.insert({"index" : "products", "id" : 0, "doc" : {"title" : "Yellow bag","sizes":[40,41,42,43]}});
        res =  await indexApi.insert({"index" : "products", "id" : 0, "doc" : {"title" : "Yellow bag","meta":'{"size": 41, "color": "red"}'}});
        res =  await indexApi.replace({"index" : "products", "id" : 1, "doc" : {"title" : "document one","price":10}});
         
        docs = [ 
            {"replace": {"index" : "products", "id" : 1, "doc" : {"title" : "document one"}}}, 
            {"replace": {"index" : "products", "id" : 2, "doc" : {"title" : "document two"}}} ];
        res =  await indexApi.bulk(docs.map(e=>JSON.stringify(e)).join('\n'));
        
        
        res =  await indexApi.update({"index" : "products", "id" : 1, "doc" : {"price":10}});

        res =  await indexApi.update({"index" : "products", "id" : 1, "doc" : {
            "price": 100000000000,
            "coeff": 3465.23,
            "tags1": [3,6,4],
            "tags2": []}});
         
        res =  await indexApi.insert({"index" : "products", "id" : 100, "doc" : {"title" : "title", "meta" : {"tags":[1,2,3]}}});
         
        res =  await indexApi.update({"index" : "products", "id" : 100, "doc" : {
            "meta.tags[0]": 100}});
         
        res =  await indexApi.update({"index" : "products", "id" : 1, "doc" : {"tags1": []}});
         
        docs = [ 
            { "update" : { "index" : "products", "doc": { "coeff" : 1000 }, "query": { "range": { "price": { "gte": 1000 } } } } }, 
            { "update" : { "index" : "products", "doc": { "coeff" : 0 }, "query": { "range": { "price": { "lt": 1000 } } } } } ];
        res =  await indexApi.bulk(docs.map(e=>JSON.stringify(e)).join('\n'));
         
        res =  await indexApi.callDelete({"index" : "products", "query": { "match": { "*": "document" }}});
         
        res =  await indexApi.insert({"index" : "products", "id" : 1, "doc" : {"title" : "Crossbody Bag with Tassel", "price" : 19.85}});
        res =  await indexApi.callDelete({"index" : "products", "id" : 1});
         
        res =  await utilsApi.sql('TRUNCATE TABLE products');
         
        res =  await utilsApi.sql('SHOW TABLES LIKE \'pro%\'');
         
        
        res =  await utilsApi.sql('drop table forum');
         
        res =  await utilsApi.sql('create table forum(title text, content text, author_id int, forum_id int, post_date timestamp) min_infix_len=\'3\'');
         
        res =  await searchApi.search({"index":"forum","query":{"match_all":{},"bool":{"must":[{"equals":{"author_id":123}},{"in":{"forum_id":[1,3,7]}}]}},"sort":[{"post_date":"desc"}]});
         
            

        res =  await indexApi.insert({"index" : "forum", "id" : 0, "doc" : {"title" : "i me"}});
        res =  await indexApi.insert({"index" : "forum", "id" : 0, "doc" : {"title" : "wayne","content":"hey"}});
        res =  await searchApi.search({"index":"forum","query":{"query_string":"i me"},"_source":{"excludes":["*"]},"limit":1,"profile":true});
         
        res =  await searchApi.search({"index":"forum","query":{"query_string":"@title way* @content hey"},"_source":{"excludes":["*"]},"limit":1,"profile":true});
         
        

        res =  await utilsApi.sql('DROP TABLE products');
        res =  await utilsApi.sql('CREATE TABLE IF NOT EXISTS products (title text,product_codes multi)');
        
        res =  await indexApi.insert({"index":"products","id":1,"doc":{"title":"first","product_codes":[4,2,1,3]}});
         
        res =  await searchApi.search({"index":"products","query":{"match_all":{}}});
         
        res =  await utilsApi.sql('DROP TABLE products');
        
        
        res =  await utilsApi.sql('SHOW AGENT STATUS');
         
        
        
        res =  await utilsApi.sql('create table products(title text, color string) type=\'pq\'');
        res =  await indexApi.insert({"index" : "products", "doc" : {"query" : "@title bag" }});
         
        res =  await indexApi.insert({"index" : "products",  "doc" : {"query" : "@title shoes", "filters": "color='red'" }});
         
        res =  await indexApi.insert({"index" : "products",  "doc" : {"query" : "@title shoes","filters": "color in ('blue', 'green')" }});
         
        
        
        res =  await searchApi.percolate('products',{"query":{"percolate":{"document":{"title":"What a nice bag"}}}});
         
        res =  await searchApi.percolate('products',{"query":{"percolate":{"documents":[{"title":"nice pair of shoes","color":"blue"},{"title":"beautiful bag"}]}}});
         
        res =  await searchApi.search({"index":"products","query":{"match_all":{}}});
         
        res =  await utilsApi.sql('DROP TABLE products');
        /*
        res =  await searchApi.search({"index":"facetdemo2","query":{"match_all":{}},"limit":5,"aggs":{"group_property":{"terms":{"field":"price",}},"group_brand_id":{"terms":{"field":"brand_id"}}}});
        console.log(JSON.stringify(res));
        
        res =  await searchApi.search({"index":"facetdemo2","query":{"match_all":{}},"expressions":{"price_range":"INTERVAL(price,200,400,600,800)"},"aggs":{"group_property":{"terms":{"field":"price_range"}}}});
        console.log(JSON.stringify(res));
        
        res =  await searchApi.search({"index":"facetdemo2","query":{"match_all":{}},"limit":5,"aggs":{"group_property":{"terms":{"field":"price","size":1,}},"group_brand_id":{"terms":{"field":"brand_id","size":3}}}});
        console.log(JSON.stringify(res));
         console.log('-----');
        
        res =  await searchApi.search({"index":"books","query":{"match":{"content":"and first"}},"highlight":{"fields":{"content":{"limit":50}},"limits_per_field":false}});
        console.log(JSON.stringify(res));
        
        res =  await searchApi.search({"index":"books","query":{"match":{"*":"one|robots"}},"highlight":{"fields":{"title":{},"content":{"limit":50}}}});
        console.log(JSON.stringify(res));
        
                res =  await searchApi.search({"index":"books","query":{"match":{"*":"one|robots"}},"highlight":{"fields":["content","title"],"number_of_fragments":10}});
        console.log(JSON.stringify(res));
        
                res =  await searchApi.search({"index":"books","query":{"match":{"*":"one|robots"}},"highlight":{"fields":["content","title"],"fragment_size":100}});
        console.log(JSON.stringify(res));
                res =  await searchApi.search({"index":"books","query":{"match":{"*":"one|robots"}},"highlight":{"fields":["content","title"],"order":"score"}});
        console.log(JSON.stringify(res));
                res =  await searchApi.search({"index":"books","query":{"match":{"*":"one|robots"}},"highlight":{"fields":["content","title"],"no_match_size":0}});
        console.log(JSON.stringify(res));
        
                res =  await searchApi.search({"index":"books","query":{"match":{"*":"one|robots"}},"highlight":{"fields":["content","title"],"pre_tags":"before_","post_tags":"_after"}});
        console.log(JSON.stringify(res));
                res =  await searchApi.search({"index":"books","query":{"match":{"content":"one|robots"}},"highlight":{"fields":["content"],"highlight_query":{"match":{"*":"polite distance"}}}});
        console.log(JSON.stringify(res));
                res =  await searchApi.search({"index":"books","query":{"match":{"*":"one|robots"}},"highlight":{}});
        console.log(JSON.stringify(res));
                res =  await searchApi.search({"index":"books","query":{"match":{"*":"one|robots"}},"highlight":{"fields":["content"]}});
        console.log(JSON.stringify(res));
                res =  await searchApi.search({"index":"books","query":{"query_string":"try|gets|down|said"},"highlight":{"limit":50}});
        console.log(JSON.stringify(res));
                res =  await searchApi.search({"index":"books","query":{"match":{"*":"try"}},"highlight":{}});
        console.log(JSON.stringify(res));
             console.log('-----');
                res =  await searchApi.search({"index":"facetdemo2","query":{"match_all":{}},"limit":5,"aggs":{"group_property":{"terms":{"field":"price",}},"group_brand_id":{"terms":{"field":"brand_id",}}}});
        console.log(JSON.stringify(res));             
                res =  await searchApi.search({"index":"facetdemo2","query":{"match_all":{}},"expressions":{"price_range":"INTERVAL(price,200,400,600,800)"},"aggs":{"group_property":{"terms":{"field":"price_range"}}}});
        console.log(JSON.stringify(res));
                res =  await searchApi.search({"index":"facetdemo2","query":{"match_all":{}},"limit":5,"aggs":{"group_property":{"terms":{"field":"price","size":1,}},"group_brand_id":{"terms":{"field":"brand_id","size":3}}}});
        console.log(JSON.stringify(res));       

        res = await searchApi.search({"index":"films","limit":0,"aggs":{"release_year":{"terms":{"field":"release_year","size":100}}}});
        console.log(JSON.stringify(res)); 
        res = await searchApi.search({"index":"shoes","limit":0,"aggs":{"sizes":{"terms":{"field":"sizes","size":100}}}});
        console.log(JSON.stringify(res));    
        res = await searchApi.search({"index":"products2","limit":0,"aggs":{"color":{"terms":{"field":"meta.color","size":100}}}});
        console.log(JSON.stringify(res));
        */
       
      });
    });

 });

}));
