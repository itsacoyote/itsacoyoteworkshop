(function (window, document) {
    var menu = document.getElementById('menu'),
        WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange' : 'resize';

    function toggleHorizontal() {
        [].forEach.call(
            document.getElementById('menu').querySelectorAll('.custom-can-transform'),
            function (el) {
                el.classList.toggle('pure-menu-horizontal');
            }
        );
    };

    function toggleMenu() {
        // set timeout so that the panel has a chance to roll up
        // before the menu switches states
        if (menu.classList.contains('open')) {
            setTimeout(toggleHorizontal, 500);
        }
        else {
            toggleHorizontal();
        }
        menu.classList.toggle('open');
        document.getElementById('toggle').classList.toggle('x');
    };

    function closeMenu() {
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    }

    var el = document.getElementById('toggle')

    if (el) {
        el.addEventListener('click', function (e) {
            toggleMenu();
        });
    }

    window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(this, this.document);

(function() {
    var contact_panel = document.getElementById('contact-panel');
    var contact_button = document.getElementById('access-button');
    var contact_details = document.createTextNode('itsacoyote.workshop@gmail.com');

    var a = document.createElement('a');
    a.title = "Message Itsacoyote Workshop";
    a.href = "mailto:itsacoyoteworkshop@gmail.com";
    a.appendChild(contact_details);

    if (contact_button) {
        contact_button.addEventListener('click', function (event) {
            event.stopPropagation();
            contact_panel.removeChild(contact_button);
            contact_panel.appendChild(a);
        });
    }
})();