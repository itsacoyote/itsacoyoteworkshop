# hexo-generator-google-amp

[Hexo](https://hexo.io/) plugin to generate Google AMP project amp files for posts.
[Google AMP Project](https://www.ampproject.org/)

## Installation

```
$ npm install --save hexo-generator-google-amp
```

## Usage

Add the tag below in the head file for your template.

```
  <% if (is_post()) { %>
    <%- googleAmpsCanonical(config, page) %>
  <% } %>
```

AMP files will be created under an amp directory during the generate command.
