require.config({
    paths: {
        jquery: 'lib/jquery/jquery.min',
        hbs: 'lib/require-handlebars-plugin/hbs'
    },
    map: {
      // '*' means all modules will get 'jquery-private'
      // for their 'jquery' dependency.
      '*': { 'jquery': 'jquery-private' },

      // 'jquery-private' wants the real jQuery module
      'jquery-private': { 'jquery': 'jquery' }
    },
    hbs: {
        helpers: false,
        i18n: false,
        templateExtension: 'hb',
        partialsUrl: '/templates'
    }
});

require(["jquery", 'hbs!/templates/sample'], function($, tmplSample) {
    $("body").html( tmplSample({adjective: "favorite"}));
});