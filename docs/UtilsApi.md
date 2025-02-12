# Manticoresearch.UtilsApi

All URIs are relative to *http://127.0.0.1:9308*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sql**](UtilsApi.md#sql) | **POST** /sql | Perform SQL requests



## sql

> {String: Array} sql(body, opts)

Perform SQL requests

Run a query in SQL format.
Expects a query string passed through `body` parameter and `opts` Object parameter that defines a format of response:
* `opts` Object parameter can contain `{raw_response: false}` for Select only queries, e.g., `SELECT * FROM mytable`.  
* `opts` Object parameter can contain `{raw_response: true}` for any type of query (including Select qieries as well) , e.g., `SHOW TABLES`. 
The query string must stay as it is, no URL encoding is needed.
The response object depends on the query executed. In select mode the response has same format as `/search` operation.


### Example

```javascript
var Manticoresearch = require('manticoresearch');

var utilsApi = new Manticoresearch.UtilsApi();
async function() {
    res =  await utilsApi.sql('SHOW TABLES');
}
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**| A query string. | 
 **opts** | **Object**| Optional, expects to contain a boolean `raw_response` value that defines a format of response. `raw_response` can be set to false for Select only queries or can be set to true for any queries (including Select queries).  if `opts` parameter is omitted it has the same effect as setting it to `{raw_response: true}` |

### Return type

**{String: Array}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: application/json

