var makeRedAlertButton = (function(btn) {
    var button_container = document.createElement('div');
    button_container.innerHTML = '<div class="red_alert_button" id="button">\n' +
        '    <div class="button_btn">\n' +
        '        <div class="button_btn_top"></div>\n' +
        '        <div class="button_btn_body"></div>\n' +
        '        <div class="button_btn_bottom"></div>\n' +
        '    </div>\n' +
        '    <div class="button_base">\n' +
        '        <div class="button_base_top"></div>\n' +
        '        <div class="button_base_body"></div>\n' +
        '        <div class="button_base_right"></div>\n' +
        '        <div class="button_base_bottom"></div>\n' +
        '    </div>\n' +
        '</div>';

    if ( btn.nextElementSibling ) {
        btn.parentNode.insertBefore(button_container, btn.nextElementSibling);
    } else {
        btn.parentNode.appendChild(button_container);
    }
    btn.style.display = "none";

    button_container.getElementsByClassName('button_btn')[0].addEventListener('click', function(e) {
        var new_e = new e.constructor(e.type, e);
        btn.dispatchEvent(new_e);
    });
});