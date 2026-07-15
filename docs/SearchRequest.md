# Manticoresearch.SearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table** | **String** | The table to perform the search on | [optional] 
**chat** | [**Chat**](Chat.md) |  | [optional] 
**query** | [**SearchQuery**](SearchQuery.md) |  | [optional] 
**join** | [**[Join]**](Join.md) | Join clause to combine search data from multiple tables | [optional] 
**highlight** | [**Highlight**](Highlight.md) |  | [optional] 
**limit** | **Number** | Maximum number of results to return | [optional] 
**knn** | [**Knn**](Knn.md) | K-nearest neighbor search settings. Pass a single &#x60;knn&#x60; object or an array of objects for multi-vector search.  | [optional] 
**hybrid** | [**Hybrid**](Hybrid.md) |  | [optional] 
**facetFilterMode** | [**FacetFilterMode**](FacetFilterMode.md) |  | [optional] 
**aggs** | [**{String: Aggregation}**](Aggregation.md) | Defines aggregation settings for grouping results | [optional] 
**expressions** | **{String: String}** | Expressions to calculate additional values for the result. Simpler alternative to &#x60;script_fields&#x60;; expression names must be lowercase.  | [optional] 
**scriptFields** | [**{String: ScriptField}**](ScriptField.md) | Named expressions computed at search time. Each value defines an inline script whose result is stored under the field name. For more information see [Expressions](https://manual.manticoresearch.com/Searching/Expressions#script_fields)  | [optional] 
**maxMatches** | **Number** | Maximum number of matches allowed in the result | [optional] 
**offset** | **Number** | Starting point for pagination of the result | [optional] 
**options** | **Object** | Additional search options | [optional] 
**profile** | **Boolean** | Enable or disable profiling of the search request | [optional] 
**sort** | **Object** |  | [optional] 
**source** | **Object** |  | [optional] 
**trackScores** | **Boolean** | Enable or disable result weight calculation used for sorting | [optional] 


