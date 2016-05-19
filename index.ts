import * as nunjucks from 'nunjucks';
import * as path from 'path';
import * as _ from 'lodash';

declare var hexo: HexoStatic;

var nunjucksDefaults: NunjucksOptions = {
    autoescape: false,
    watch: false,
};

if (typeof hexo.config.nunjucks == 'undefined') {
    hexo.config.nunjucks = {};
}

_.extend(hexo.config.nunjucks, nunjucksDefaults);

var renderer: HexoSyncRenderer = function (data, locals) {
    
    var templateDir = path.dirname(data.path);
    var env = nunjucks.configure(templateDir, hexo.config.nunjucks);
    
    return env.renderString(data.text, locals);  
}

hexo.extend.renderer.register('nunjucks', 'html', renderer, true);
hexo.extend.renderer.register('j2', 'html', renderer, true);
hexo.extend.renderer.register('njk', 'html', renderer, true);
