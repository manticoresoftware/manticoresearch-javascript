# Manticoresearch.SearchApi

All URIs are relative to *http://127.0.0.1:9308*

Method | HTTP request | Description
------------- | ------------- | -------------
[**search**](SearchApi.md#search) | **POST** /search | Performs a search on a table.
[**percolate**](SearchApi.md#percolate) | **POST** /pq/{table}/search | Perform a reverse search on a percolate table
[**autocomplete**](SearchApi.md#autocomplete) | **POST** /autocomplete | Performs an autocomplete search on a table


## search

> SearchResponse search(searchRequest)

Performs a search on a table. 

The method expects a SearchRequest object with the following mandatory properties:
        
* the name of the table to search | string
        
For details, see the documentation on [**SearchRequest**](SearchRequest.md)

The method returns an object with the following properties:
        
- hits: an object with the following properties:
  - hits: an array of hit objects, where each hit object represents a matched document. Each hit object has the following properties:
    - _id: the ID of the matched document.
    - _score: the score of the matched document.
    - _source: the source data of the matched document.
  - total: the total number of hits found.
- timed_out: a boolean indicating whether the query timed out.
- took: the time taken to execute the search query.

In addition, if profiling is enabled, the response will include an additional array with profiling information attached.

Here is an example search response:
```
{
  "hits":
  {
    "hits":
    [
      {
        "_id":"1",
        "_score":1,
        "_source":{"title":"first find me fast","gid":11}
      },
      {
        "_id":"2",
        "_score":1,
        "_source":{"title":"second find me fast","gid":12}
      }
    ],
    "total":2
  },
  "profile":None,
  "timed_out":False,
  "took":0
}
```

For more information about the match query syntax and additional parameters that can be added to  request and response, please check: https://manual.manticoresearch.com/Searching/Full_text_matching/Basic_usage#HTTP-JSON.


### Example
```javascript
var Manticoresearch = require('manticoresearch');
var client = new Manticoresearch.ApiClient();
client.basePath="http://localhost:9308";
var searchApi = new Manticoresearch.SearchApi(client);

// Create SearchRequest
var searchRequest = new Manticoresearch.SearchRequest();
searchRequest.table = "test";
var searchQuery = new Manticoresearch.SearchQuery()
searchQuery.query_string = "find smth"
searchRequest.query = searchQuery;

// or create SearchRequest in an alternative way as in the previous versions of the client. It uses a single complex JSON object.
searchRequest = {"table":"test","query":{"query_string":"find smth"}};

// Perform a search
(async function searchExample() {
    var res = await searchApi.search(searchRequest);
    console.log(JSON.stringify(res, null, 4));
})();

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


## percolate

> SearchResponse percolate(table, percolateRequest)

Performs a reverse search on a percolate table. [[More info on percolate tables in Manticore Search Manual]](https://manual.manticoresearch.com/Creating_a_table/Local_tables/Percolate_table#Percolate-table)

This method must be used only on percolate tables.

Expects two parameters: the table name and an object with a document or an array of documents to search by.
Here is an example of the object with a single document:

```
{
  "query":
  {
    "percolate":
    {
      "document":
      {
        "content":"sample content"
      }
    }
  }
}
```

Responds with an object with matched stored queries: 

```
{
  "took":0,
  "timed_out":false,
  "hits":
  {
    "total":1,
    "hits":
    [
      {
        "table":"products",
        "_type":"doc",
        "_id":"2811045522851233808",
        "_score":"1",
        "_source":
        {
          "query":
          {
            "ql":"@title bag"
          }
        },
        "fields":{"_percolator_document_slot":[1]}
      }
    ]
  }
}
```

And here is an example of the object with multiple documents:

```
{
  "query":
  {
    "percolate":
    {
      "documents": [
        {
          "content":"sample content"
        },
        {
          "content":"another sample content"
        }
      ]
    }
  }
}
```


### Example

```javascript
var Manticoresearch = require('manticoresearch');

var searchApi = new Manticoresearch.SearchApi();
(async function percolateExample() {
    res = await searchApi.percolate('products',{"query":{"percolate":{"document":{"title":"What a nice bag"}}}});
})();

```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **table** | **String**| Name of the percolate table | 
 **percolateRequest** | [**PercolateRequest**](PercolateRequest.md)|  | 

### Return type

[**SearchResponse**](SearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## autocomplete

> [SqlResponse] autocomplete(table, query)

Performs an autocomplete search on a table

The method expects an object with the following mandatory properties: 
   * the name of the table to search
   * the query string to autocomplete
   
For details, see the documentation on [**Autocomplete**](Autocomplete.md)

An example of the method's request:

        ```
        {
          "table":"table_name",
          "query":"query_beginning"
        }        
        ```

An example of the method's response:
        
         ```
         [
           {
             "total": 3,
             "error": "",
             "warning": "",
             "columns": [
               {
                 "query": {
                   "type": "string"
                 }
               }
             ],
             "data": [
               {
                 "query": "hello"
               },
               {
                 "query": "helio"
               },
               {
                 "query": "hell"
               }
             ]
           }
         ] 
         ```

For more detailed information about the autocomplete queries, please refer to the documentation [here](https://manual.manticoresearch.com/Searching/Autocomplete).
 

### Example

```javascript
import Manticoresearch from 'manticoresearch';

let apiInstance = new Manticoresearch.SearchApi();
let autocompleteRequest = new Manticoresearch.AutocompleteRequest(table="test",query="abc"); 
apiInstance.autocomplete(autocompleteRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **autocompleteRequest** | [**AutocompleteRequest**](AutocompleteRequest.md)|  | 

### Return type

[ [**SqlResponse**](SqlResponse.md) ]

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
