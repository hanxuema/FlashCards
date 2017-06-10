﻿define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        // { 
        //  route: '', 
        //  title: 'About', 
        //  moduleId: 'viewmodels/about', 
        //  nav: true
        //},
        activate: function () {
            router.map([
                { route: 'about', title: 'About', moduleId: 'viewmodels/about', nav: true },
                { route: ['','catalog'], title: 'Catalog', moduleId: 'viewmodels/catalog', nav: true },      
                { route: 'cards/:param1*details', hash:'#cards', title: 'Cards', moduleId: 'viewmodels/cards', nav: false },
            ]).buildNavigationModel();

            //router.mapUnknownRoutes('viewmodels/catalog', '#catalog');
            
            return router.activate();
        }
    };
});