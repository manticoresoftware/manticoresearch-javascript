# Manticoresearch.SearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **String** | The index to perform the search on | 
**query** | [**SearchQuery**](SearchQuery.md) |  | [optional] 
**join** | [**[Join]**](Join.md) | Join clause to combine search data from multiple tables | [optional] 
**highlight** | [**Highlight**](Highlight.md) |  | [optional] 
**limit** | **Number** | Maximum number of results to return | [optional] 
**knn** | [**KnnQuery**](KnnQuery.md) |  | [optional] 
**aggs** | [**{String: Aggregation}**](Aggregation.md) | Defines aggregation settings for grouping results | [optional] 
**expressions** | **{String: String}** | Expressions to calculate additional values for the result | [optional] 
**maxMatches** | **Number** | Maximum number of matches allowed in the result | [optional] 
**offset** | **Number** | Starting point for pagination of the result | [optional] 
**options** | **Object** | Additional search options | [optional] 
**profile** | **Boolean** | Enable or disable profiling of the search request | [optional] 
**sort** | **Object** |  | [optional] 
**source** | **Object** |  | [optional] 
**trackScores** | **Boolean** | Enable or disable result weight calculation used for sorting | [optional] 


