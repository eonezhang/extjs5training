Ext.define('acme.controller.MainController', {
    extend : 'Ext.app.Controller',
    views : ['MainView'],
    refs : [{
        ref: 'MainView',
        selector : 'mainview'
    }, {
        ref: 'MainView3',
        selector : '#mainview_3'
    }],
    init : function() {
        this.control({
            mainview : {
                buttonfire : function() {
                    console.log(arguments);
                }
            }
        });
    }
});
