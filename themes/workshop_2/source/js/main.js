(function (window, document) {
    var menuButton = document.getElementById('mobile-menu-button');
    var menu = document.getElementById('mobile-menu-list');
    if (menuButton) {
        menuButton.addEventListener('click', function (e) {
            toggleMenu();
        });
    }

    function toggleMenu() {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open')
        } else {
            menu.classList.add('open');
        }
    }
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