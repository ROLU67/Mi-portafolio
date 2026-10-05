// Año del pie de página
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Menú móvil
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
}

// Copiar correo
const copy = document.getElementById('copyEmail');
if (copy) {
  copy.addEventListener('click', async () => {
    const email = document.getElementById('email').textContent;
    const status = document.getElementById('status');
    try {
      await navigator.clipboard.writeText(email);
      status.textContent = 'Correo copiado.';
    } catch {
      status.textContent = 'No se pudo copiar. Selecciónalo manualmente: ' + email;
    }
  });
}
