# Manticoresearch.SearchRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **String** |  | [default to &#39;&#39;]
**query** | **Object** |  | [optional] 
**fulltextFilter** | **Object** |  | [optional] 
**attrFilter** | **Object** |  | [optional] 
**limit** | **Number** |  | [optional] 
**offset** | **Number** |  | [optional] 
**maxMatches** | **Number** |  | [optional] 
**sort** | **[Object]** |  | [optional] 
**sortOld** | **[Object]** |  | [optional] 
**aggs** | [**[Aggregation]**](Aggregation.md) |  | [optional] 
**expressions** | **[Object]** |  | [optional] 
**highlight** | [**Highlight**](Highlight.md) |  | [optional] 
**source** | **Object** |  | [optional] 
**options** | **{String: Object}** |  | [optional] 
**profile** | **Boolean** |  | [optional] 
**trackScores** | **Boolean** |  | [optional] 


## Building a search request

[[Docs on search options in Manticore Search Manual]](https://manual.manticoresearch.com/Searching/Options#Search-options)
```javascript

var searchRequest = new Manticoresearch.SearchRequest();
searchRequest.index = "movies";
searchRequest.query = {"match_all": {}};
	
searchRequest.limit = 10;
searchRequest.track_scores = true;
searchRequest.options = {'cutoff': 5};
searchRequest.options['ranker'] = 'bm25';
searchRequest.source = 'title';

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```

### SourceByRules

[[SourceByRules - input parameters]](SourceByRules.md)

[[Docs on the `source` property in Manticore Search Manual]](https://manual.manticoresearch.com/Searching/Search_results#Source-selection)
```javascript
var searchRequest = new Manticoresearch.SearchRequest();
searchRequest.index = "movies";
searchRequest.query = {"match_all": {}};

searchRequest.source = new Manticoresearch.SourceByRules();
searchRequest.source.includes = ['title', 'year'];
searchRequest.source.excludes = ['code'];

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```

### Sort
```javascript
//Setting the `sort` property:
var searchRequest = new Manticoresearch.SearchRequest();
searchRequest.index = "movies";
searchRequest.query = {"match_all": {}};

searchRequest.sort = ['year']

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```

### SortOrder

[[SortOrder - input parameters]](SortOrder.md)

### SortMVA

[[SortMVA - input parameters]](SortMVA.md)

[[Docs on sorting in Manticore Search Manual]](https://manual.manticoresearch.com/Searching/Sorting_and_ranking#HTTP)
```javascript
var searchRequest = new Manticoresearch.SearchRequest();
searchRequest.index = "movies";
searchRequest.query = {"match_all": {}};

var sort2 = new Manticoresearch.SortOrder('rating', 'asc');
var sort3 = new Manticoresearch.SortMVA('code', 'desc', 'max');
searchRequest.sort.push(...[sort2,sort3]);

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```

### Expressions

[[Docs on expressions in Manticore Search Manual]](https://manual.manticoresearch.com/Searching/Expressions#Expressions-in-HTTP-JSON)
```javascript    
//Setting the `expressions` property:
var searchRequest = new Manticoresearch.SearchRequest();
searchRequest.index = "movies";
searchRequest.query = {"match_all": {}};

var expr = {'expr': 'min(year,2900)'};
searchRequest.expressions = [expr];
searchRequest.expressions.push({'expr2': 'max(year,2100)'});
searchRequest.source.includes.push('expr2');

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```

### Aggregations

[[Aggregation - input parameters]](Aggregation.md)

[[Docs on aggregations in Manticore Search Manual](https://manual.manticoresearch.com/Searching/Faceted_search#Aggregations)
```javascript    
//Setting the `aggs` property with an auxiliary object:
var searchRequest = new Manticoresearch.SearchRequest();
searchRequest.index = "movies";
searchRequest.query = {"match_all": {}};

var agg1 = new Manticoresearch.Aggregation('agg1', 'year');
Manticoresearch.Aggregation.constructFromObject({size:10}, agg1);
searchRequest.aggs = [agg1];
searchRequest.aggs.push(new Manticoresearch.Aggregation('agg2', 'rating'));

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```

### Highlight

[[Highlight - input parameters]](Highlight.md)

[[Docs on highlighting in Manticore Search Manual]](https://manual.manticoresearch.com/Searching/Highlighting#Highlighting)
```javascript
//Settting the `highlight` property with an auxiliary object:
var searchRequest = new Manticoresearch.SearchRequest();
searchRequest.index = "movies";
searchRequest.query = {"match_all": {}};

var highlight = new Manticoresearch.Highlight();
highlight.fieldnames = ['title'];
highlight.post_tags = '</post_tag>';
highlight.encoder = 'default';
highlight.snippet_boundary = 'sentence';
searchRequest.highlight = highlight;

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```

#### HighlightField

[[HighlightField - input parameters]](HighlightField.md)

[[Docs on highlight fields in Manticore Search Manual]](https://manual.manticoresearch.com/Searching/Highlighting#Highlighting)
```javascript
// settting `highlight.fields` property with an auxiliary HighlightField object
var searchRequest = new Manticoresearch.SearchRequest();
searchRequest.index = "movies";
searchRequest.query = {"match_all": {}};

var highlight = new Manticoresearch.Highlight();
var highlightField = new Manticoresearch.HighlightField('title');
var highlightField2 = new Manticoresearch.HighlightField('plot');
Manticoresearch.HighlightField.constructFromObject({limit:5}, highlightField2);
Manticoresearch.HighlightField.constructFromObject({limit_words:10}, highlightField2);
highlight.fields = [highlightField, highlightField2];
searchRequest.highlight = highlight;

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```

### FulltextFilter
#### QueryFilter

[[Docs on fulltext filters in Manticore Search Manual]](https://manual.manticoresearch.com/Searching/Full_text_matching/Basic_usage#HTTP-JSON)

[[QueryFilter - input parameters]](QueryFilter.md)
```javascript    
//Setting the `fulltext_filter` property using different fulltext filter objects:

//Using a QueryFilter object
var searchRequest = manticoresearch.model.SearchRequest();
searchRequest.index = "movies";

searchRequest.fulltext_filter = new Manticoresearch.QueryFilter('Star Trek 2');

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```

#### MatchFilter

[[MatchFilter - input parameters]](MatchFilter.md)
```javascript    
//Using a MatchFilter object
var searchRequest = manticoresearch.model.SearchRequest();
searchRequest.index = "movies";

searchRequest.fulltext_filter = new Manticoresearch.MatchFilter('Nemesis', 'title');

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```

#### MatchPhraseFilter

[[MatchPhraseFilter - input parameters]](MatchPhraseFilter.md)
```javascript    
//Using a MatchPhraseFilter object
var searchRequest = manticoresearch.model.SearchRequest();
searchRequest.index = "movies";

searchRequest.fulltext_filter = new Manticoresearch.MatchPhraseFilter('Star Trek 2', 'title');

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```

#### MatchOpFilter

[[MatchOpFilter - input parameters]](MatchOpFilter.md)
```javascript
//Using a MatchOpFilter object
var searchRequest = manticoresearch.model.SearchRequest();
searchRequest.index = "movies";

searchRequest.fulltext_filter = new Manticoresearch.MatchOpFilter('Enterprise test', 'title,plot', 'or');

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```    

### AttrFilter
#### EqualsFilter

[[EqualsFilter - input parameters]](EqualsFilter.md)

[[Docs on equality filters in Manticore Search Manual]](https://manual.manticoresearch.com/Searching/Filters#Equality-filters)
```javascript
//Setting the `attr_filter` property using different attribute filter objects:

//Using EqualsFilter object
var searchRequest = manticoresearch.model.SearchRequest();
searchRequest.index = "movies";

searchRequest.attr_filter = new Manticoresearch.EqualsFilter('year', 2003);

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```

#### InFilter

[[InFilter - input parameters]](InFilter.md)

[[Docs on set filters in Manticore Search Manual]](https://manual.manticoresearch.com/Searching/Filters#Set-filters)
```javascript
//Using InFilter object
var searchRequest = manticoresearch.model.SearchRequest();
searchRequest.index = "movies";

var inFilter = new Manticoresearch.InFilter('year', [2001, 2002]);
inFilter.values = inFilter.values.concat([10,11]);
searchRequest.attr_filter = inFilter;

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```
			
#### RangeFilter

[[RangeFilter - input parameters]](RangeFilter.md)

[[Docs on range filters in Manticore Search Manual]](https://manual.manticoresearch.com/Searching/Filters#Range-filters)
```javascript
//Using RangeFilter object
var searchRequest = manticoresearch.model.SearchRequest();
searchRequest.index = "movies";

var rangeFilter = new Manticoresearch.RangeFilter('year');
Manticoresearch.RangeFilter.constructFromObject({lte: 2002}, rangeFilter);
Manticoresearch.RangeFilter.constructFromObject({gte: 1000}, rangeFilter);
searchRequest.attr_filter = rangeFilter;

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}	
```

#### GeoDistanceFilter

[[GeoDistanceFilter - input parameters]](GeoDistanceFilter.md)

[[Docs on geo distance filters in Manticore Search Manual]](https://manual.manticoresearch.com/Searching/Filters#Geo-distance-filters)
```javascript
//Using GeoDistanceFilter object
var searchRequest = manticoresearch.model.SearchRequest();
searchRequest.index = "geo";

var geoFilter = new Manticoresearch.GeoDistanceFilter();
var locAnchor = {'location_anchor': {'lat':10,'lon':20}};
Manticoresearch.GeoDistanceFilter.constructFromObject(locAnchor, geoFilter);
Manticoresearch.GeoDistanceFilter.constructFromObject({'location_source':'field3,field4'}, geoFilter);
Manticoresearch.GeoDistanceFilter.constructFromObject({'distance_type': 'adaptive', 'distance': '100km'}, geoFilter);
searchRequest.attr_filter = geoFilter;

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```

#### BoolFilter

[[BoolFilter - input parameters]](BoolFilter.md)

[[Docs on bool queries in Manticore Search Manual]](https://manual.manticoresearch.com/Searching/Filters#bool-query)
```javascript
//Setting the `attr_filter` property using a bool filter object:
var searchRequest = manticoresearch.model.SearchRequest();
searchRequest.index = "movies";

var boolFilter = new Manticoresearch.BoolFilter();
boolFilter.must = [ new Manticoresearch.EqualsFilter('year', 2001) ];
rangeFilter = new Manticoresearch.RangeFilter('rating');
Manticoresearch.RangeFilter.constructFromObject({lte: 20}, rangeFilter);
boolFilter.must.push(rangeFilter);
searchRequest.attr_filter = boolFilter;

async function(){
	var res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}

boolFilter.must_not = [ new Manticoresearch.EqualsFilter('year', 2001) ];
searchRequest.attr_filter = boolFilter;

async function(){
	res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}

//Using nested bool filters
searchRequest = manticoresearch.model.SearchRequest();
searchRequest.index = "movies";
	
var fulltextFilter = new Manticoresearch.MatchFilter('Star', 'title');
var nestedBoolFilter = new Manticoresearch.BoolFilter();
nestedBoolFilter.should = [ new Manticoresearch.EqualsFilter('rating', 6.5), fulltextFilter];
boolFilter.must = [nestedBoolFilter];
searchRequest.attr_filter = boolFilter;

async function(){
	res = await searchApi.search(searchRequest);
	console.log(JSON.stringify(res, null, 4));  
}
```
			
#### Building a search request in an alternative way with a single literal object 
```javascript

var searchRequest = {"index":"myindex","query":{"query_string":"@title \"find me fast \"/2"}};
async function(){
    var res = await searchApi.search(searchRequest);
    console.log(JSON.stringify(res, null, 4));
}
```



