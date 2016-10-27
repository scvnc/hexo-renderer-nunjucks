import * as assign from 'lodash/assign';
import * as nunjucks from 'nunjucks';
import * as path from 'path';

declare var hexo: HexoStatic;

const ENVCFG_PATH = path.join(process.cwd(), 'nunjucks.config.js');

var nunjucksDefaults: NunjucksOptions = {
    autoescape: false,
    watch: false,
};

var renderer: HexoSyncRenderer = function (data, locals) {
    var templateDir = path.dirname(data.path);
    var config = assign({}, nunjucksDefaults, hexo.config.nunjucks);
    var env = nunjucks.configure(templateDir, config);
    var envConfigurator: (env: Object) => void;

    // Try loading environment configuration
    try {
        envConfigurator = require(ENVCFG_PATH);
    } catch (e) {}

    if (typeof envConfigurator === 'function') {
        envConfigurator(env);
    }

    return env.renderString(data.text, locals);
}

hexo.extend.renderer.register('j2', 'html', renderer, true);
hexo.extend.renderer.register('njk', 'html', renderer, true);
hexo.extend.renderer.register('nunjucks', 'html', renderer, true);
