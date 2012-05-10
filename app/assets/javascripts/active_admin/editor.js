//= require active_admin/editor/wysihtml5.min
//= require active_admin/editor/wysihtml5/parser_rules
//= require active_admin/editor/quicksave
//= require active_admin/editor/assets

(function($) {
    $(function(){
        var active_admin_editor, textarea_id, toolbar_id;
        active_admin_editor = $('.active_admin_editor');

        if (active_admin_editor.length > 0) {
            textarea_id         = active_admin_editor.find('textarea').attr('id');
            toolbar_id          = active_admin_editor.find('.active_admin_editor_toolbar').attr('id');

            var editor = new wysihtml5.Editor(textarea_id, {
                toolbar: toolbar_id,
                stylesheets: "/assets/wysiwyg.css",
                parserRules: wysihtml5ParserRules
            });

            window.editor = editor;
        }

        active_admin_editor.each(function() {
            tab_container = $(this).find('.tabs');
            tab_nav = tab_container.find('ul');
            tab_content = tab_container.find(' > div').hide();
            tab_content.first().show();

            tab_nav.find('a').click(function(e) {
                e.preventDefault();
                id = $(this).attr('href');
                tab_content.hide();
                $(id).show();
            });
        });
    });
})(jQuery);
