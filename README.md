# deep-view

Simple API for extracting info (text, screenshots, etc) from deeply nested web pages.  
Provide the API with a valid config array and get back a JSON object of results.

Config object consists of an array of actions, detailed [here](https://github.com/nduvieilh/deep-view/wiki/Actions)

Each object within the array will be run in order and will branch everytime multiple results return.  
