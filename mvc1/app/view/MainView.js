Ext.define('acme.view.MainView', {
    alias : 'widget.mainview',
    extend : 'Ext.Panel',
    height : 80,
    width : 200,
    initComponent : function() {
        var me = this;

        me.items = [{
            xtype : 'button',
            text : 'log control for ' + me.itemId,
            handler : function() {
                me.fireEvent('buttonfire', me, me.itemId);
            }
        }]
        me.callParent();
    }
});
