(function($) {
    $(function(){
        $('[data-load-assets=true]').click(function(e) {
            e.preventDefault();
            container = $(this).closest('.active_admin_editor_toolbar');

            container.find('.advanced_insert').load('/admin/assets.js');
        });
    });
})(jQuery);
