# \<big-list-app\>

`big-listapp` is a proof of concept/demo for filtering and displaying a large 
list of data. It has been created as a proof of concept for presenting genealogy 
data in a browser. The dataset is just under 50MB to allow hosting a demo on
github pages and the requirement was to be able to filter by first and last 
name.

Data is generated randomly and stored in a JSON file on the server, loaded into 
an `iron-list` element and filtered client side.

:warning: This is not production ready code and is not guaranteed to work on 
any browsers, but it has been tested on Chrome. 

Note that the data is all loaded on page-load. This is far from ideal for most
webhosting conditions but the intended use case of this proof of concept is 
local hosting in a kiosk type environment where even large files will load
quickly. The `iron-list` [documentation] (https://elements.polymer-project.org/elements/iron-list, "documentation") 
advises against loading all the data at once.

## Installation

Requires [bower] (https://bower.io, "bower") and [polymer-cli] (https://www.polymer-project.org/1.0/docs/tools/polymer-cli, 
"polymer-cli"), to install and run a local server:
```bash
$ git clone https://github.com/darrenhewett/Big-List-Demo.git
$ bower install
$ node gen-data.js
$ polymer serve
```

## TODO

* Pretty up the CSS for the `iron-list` table
* Port the code to Polymer 2.0 elements when the iron-list element supports 
this
* Add polyfills and test to ensure compatibility across at least the evergreen 
browsers (after porting to Polymer 2.0)
