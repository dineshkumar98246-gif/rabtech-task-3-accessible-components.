/* Small progressive-enhancement behaviours */
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });
  }

  const dialog = document.querySelector('#accessibility-dialog');
  const openButton = document.querySelector('#open-dialog');
  const closeButton = document.querySelector('#close-dialog');
  if (dialog && openButton && closeButton) {
    openButton.addEventListener('click', () => {
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else window.alert('A useful dialog has a clear title and a close action.');
    });
    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => openButton.focus());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  const form = document.querySelector('#contact-form-element');
  if (form) {
    const status = document.querySelector('#form-status');
    const fields = [
      { el: form.elements.fullName, check: value => value.trim().length >= 2, message: 'Enter your full name (at least 2 characters).' },
      { el: form.elements.email, check: value => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value.trim()), message: 'Enter a valid email address.' },
      { el: form.elements.message, check: value => value.trim().length >= 10, message: 'Message must contain at least 10 characters.' }
    ];
    form.addEventListener('submit', event => {
      event.preventDefault();
      let firstInvalid = null;
      const errors = [];
      fields.forEach(field => {
        const valid = field.check(field.el.value);
        field.el.setAttribute('aria-invalid', String(!valid));
        if (!valid) {
          errors.push(field.message);
          firstInvalid ||= field.el;
        }
      });
      status.className = 'status-message ' + (errors.length ? 'error' : 'success');
      if (errors.length) {
        status.textContent = 'Please correct the following: ' + errors.join(' ');
        firstInvalid.focus();
      } else {
        status.textContent = 'Form validated successfully. This demo does not send your information to a server.';
      }
    });
    fields.forEach(field => field.el.addEventListener('input', () => {
      if (field.el.getAttribute('aria-invalid') === 'true' && field.check(field.el.value)) {
        field.el.setAttribute('aria-invalid', 'false');
      }
    }));
  }
})();
