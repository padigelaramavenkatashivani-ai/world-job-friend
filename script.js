const welcomePanel = document.getElementById('welcome-panel');
const authPanel = document.getElementById('auth-panel');
const tabs = document.querySelectorAll('.tab');
const forms = document.querySelectorAll('.auth-form');
const actionButtons = document.querySelectorAll('[data-target]');

function showForm(type) {
  welcomePanel.classList.remove('active');
  authPanel.classList.add('active');

  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.form === type);
  });

  forms.forEach((form) => {
    form.classList.toggle('active', form.id === `${type}-form`);
  });
}

actionButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    showForm(button.dataset.target);
  });
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    showForm(tab.dataset.form);
  });
});

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');

    const displayName = nameInput?.value.trim() || emailInput?.value.split('@')[0] || 'Explorer';
    localStorage.setItem('worldJobFriendName', displayName);

    window.location.href = 'dashboard.html';
  });
});
