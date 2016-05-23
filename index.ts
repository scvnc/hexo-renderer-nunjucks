import * as assign from 'lodash/assign';
import * as nunjucks from 'nunjucks';
import * as path from 'path';

declare var hexo: HexoStatic;

var nunjucksDefaults: NunjucksOptions = {
    autoescape: false,
    watch: false,
};

var renderer: HexoSyncRenderer = function (data, locals) {
    var templateDir = path.dirname(data.path);
    var config = assign({}, nunjucksDefaults, hexo.config.nunjucks);
    var env = nunjucks.configure(templateDir, config);

    return env.renderString(data.text, locals);
}

hexo.extend.renderer.register('nunjucks', 'html', renderer, true);
hexo.extend.renderer.register('j2', 'html', renderer, true);
hexo.extend.renderer.register('njk', 'html', renderer, true);
