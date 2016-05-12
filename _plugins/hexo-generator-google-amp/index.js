'use strict';

hexo.extend.generator.register('generatorGoogleAmps', require('./lib/generator'));

hexo.extend.helper.register('googleAmpsCanonical', require('./lib/amps-canonical'));