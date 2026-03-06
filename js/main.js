const modal = document.getElementById('gpg-modal');
const gpgText = document.getElementById('gpg-key-text');
const copyBtn = document.getElementById('gpg-copy');

document.getElementById('gpg-open').addEventListener('click', () => {
  modal.hidden = false;
});

document.getElementById('gpg-close').addEventListener('click', () => {
  modal.hidden = true;
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.hidden = true;
});

copyBtn.addEventListener('click', async () => {
  await navigator.clipboard.writeText(gpgText.textContent);
  copyBtn.textContent = 'Copied!';
  setTimeout(() => { copyBtn.textContent = 'Copy to clipboard'; }, 2000);
});
