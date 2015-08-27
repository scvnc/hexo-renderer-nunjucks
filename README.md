# hexo-renderer-nunjucks

[Nunjucks](https://mozilla.github.io/nunjucks/) renderer plugin for [Hexo](https://hexo.io).

## Installation

```
npm install hexo-renderer-nunjucks --save
```

## Configuration

Nunjucks can be configured by editing the main `_config.yml` file using the `nunjucks` namespace. Configuration options can be found in [Nunjucks API documentation](http://mozilla.github.io/nunjucks/api.html#configure).

```
nunjucks:
  autoescape: true
```

## File Extensions

This plugin supports the `.nunjucks` file extension as well as Jinja 2 file extension `.j2`.