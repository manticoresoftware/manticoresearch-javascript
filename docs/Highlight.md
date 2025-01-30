# Manticoresearch.Highlight

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fragmentSize** | **Object** | Maximum size of the text fragments in highlighted snippets per field | [optional] 
**limit** | **Object** | Maximum size of snippets per field | [optional] 
**limitSnippets** | **Object** | Maximum number of snippets per field | [optional] 
**limitWords** | **Object** | Maximum number of words per field | [optional] 
**numberOfFragments** | **Object** | Total number of highlighted fragments per field | [optional] 
**afterMatch** | **String** | Text inserted after the matched term, typically used for HTML formatting | [optional] [default to &#39;&lt;/strong&gt;&#39;]
**allowEmpty** | **Boolean** | Permits an empty string to be returned as the highlighting result. Otherwise, the beginning of the original text would be returned | [optional] 
**around** | **Number** | Number of words around the match to include in the highlight | [optional] 
**beforeMatch** | **String** | Text inserted before the match, typically used for HTML formatting | [optional] [default to &#39;&lt;strong&gt;&#39;]
**emitZones** | **Boolean** | Emits an HTML tag with the enclosing zone name before each highlighted snippet | [optional] 
**encoder** | **String** | If set to &#39;html&#39;, retains HTML markup when highlighting | [optional] 
**fields** | **Object** |  | [optional] 
**forceAllWords** | **Boolean** | Ignores the length limit until the result includes all keywords | [optional] 
**forceSnippets** | **Boolean** | Forces snippet generation even if limits allow highlighting the entire text | [optional] 
**highlightQuery** | [**QueryFilter**](QueryFilter.md) |  | [optional] 
**htmlStripMode** | **String** | Defines the mode for handling HTML markup in the highlight | [optional] 
**limitsPerField** | **Boolean** | Determines whether the &#39;limit&#39;, &#39;limit_words&#39;, and &#39;limit_snippets&#39; options operate as individual limits in each field of the document | [optional] 
**noMatchSize** | **Number** | If set to 1, allows an empty string to be returned as a highlighting result | [optional] 
**order** | **String** | Sets the sorting order of highlighted snippets | [optional] 
**preTags** | **String** | Text inserted before each highlighted snippet | [optional] [default to &#39;&lt;strong&gt;&#39;]
**postTags** | **String** | Text inserted after each highlighted snippet | [optional] [default to &#39;&lt;/strong&gt;&#39;]
**startSnippetId** | **Number** | Sets the starting value of the %SNIPPET_ID% macro | [optional] 
**useBoundaries** | **Boolean** | Defines whether to additionally break snippets by phrase boundary characters | [optional] 



## Enum: EncoderEnum


* `default` (value: `"default"`)

* `html` (value: `"html"`)





## Enum: HtmlStripModeEnum


* `none` (value: `"none"`)

* `strip` (value: `"strip"`)

* `index` (value: `"index"`)

* `retain` (value: `"retain"`)





## Enum: NoMatchSizeEnum


* `0` (value: `0`)

* `1` (value: `1`)





## Enum: OrderEnum


* `asc` (value: `"asc"`)

* `desc` (value: `"desc"`)

* `score` (value: `"score"`)




