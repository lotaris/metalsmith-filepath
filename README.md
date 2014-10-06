# metalsmith-filepath

This is a plugin for [Metalsmith](http://metalsmith.io/) that adds a `link`
property to each page that contains the file path of the page.

## Usage

If no options are supplied, the plugin normalizes the file location value of 
the file tree and copies it into the `link` property. For options, see below.

If using the CLI for Metalsmith, metalsmith-filepath can be used like any other
plugin by including it in `metalsmith.json`. For example:

```json
{
  "plugins": {
    "metalsmith-filepath": {
      "absolute": false,
      "permalinks": false
    }
  }
}
```

For Metalscript's JavaScript API, metalsmith-filepath can be used like any 
other plugin by attaching it to the function invocation chain on the 
Metalscript object. For example:

```js
var filepath = require('metalsmith-filepath');
require('metalsmith')(__dirname)
  .use(filepath({
    absolute: true,
    permalinks: true
  })
  .build();
```

## Options

The following options can be provided:

 - `absolute` (*boolean*) - Defines whether URLs should be prefixed with a 
   slash (`/`)
 - `permalinks` (*boolean*) - Defines whether the file name should be trimmed
   off the URL, resulting in the path to the folder.


## License

MIT, see [LICENSE](LICENSE).