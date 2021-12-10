# Manticoresearch.SearchApi

All URIs are relative to *http://127.0.0.1:9308*

Method | HTTP request | Description
------------- | ------------- | -------------
[**percolate**](SearchApi.md#percolate) | **POST** /json/pq/{index}/search | Perform reverse search on a percolate index
[**search**](SearchApi.md#search) | **POST** /json/search | Performs a search



## percolate

> SearchResponse percolate(index, percolateRequest)

Perform reverse search on a percolate index

Performs a percolate search. 
This method must be used only on percolate indexes.

Expects two parameters: the index name and an object with array of documents to be tested.
An example of the documents object:

  ```
  {"query":{"percolate":{"document":{"title":"What a nice bag"}}}}
  ```

Responds with an object with matched stored queries: 

  ```
  {"took":0,"timed_out":false,"hits":{"total":1,"hits":[{"_index":"products","_type":"doc","_id":"2811045522851233808","_score":"1","_source":{"query":{"ql":"@title bag"}},"fields":{"_percolator_document_slot":[1]}}]}}
  ```


### Example

```javascript
var Manticoresearch = require('manticoresearch');

var searchApi = new Manticoresearch.SearchApi();
async function() {
    res = await searchApi.percolate('products',{"query":{"percolate":{"document":{"title":"What a nice bag"}}}});
}

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **index** | **String**| Name of the percolate index | 
 **percolateRequest** | [**PercolateRequest**](PercolateRequest.md)|  | 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## search

> SearchResponse search(searchRequest)

Performs a search


Expects an object with mandatory properties:
* the index name
* the match query object
Example :

  ```
  {"index":"myindex","query":{"query_string":"@title \"find me fast \"/2"}}
  ```

It responds with an object with:
- time of execution
- if the query timed out
- an array with hits (matched documents)
- additional, if profiling is enabled, an array with profiling information is attached


  ```
  {"hits":{"hits":[{"_id":"1","_score":1,"_source":{"title":"first find me fast","gid":11}},{"_id":"2","_score":1,"_source":{"title":"second find me fast","gid":12}}],"total":2},"profile":None,"timed_out":False,"took":0}
  ```

For more information about the match query syntax, additional paramaters that can be set to the input and response, please check: https://docs.manticoresearch.com/latest/html/http_reference/json_search.html.


### Example

```javascript
var Manticoresearch = require('manticoresearch');

var apiInstance = new Manticoresearch.SearchApi();
async function(){
    res = await searchApi.search({"index":"myindex","query":{"query_string":"@title \"find me fast \"/2"}});
}
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchRequest** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

