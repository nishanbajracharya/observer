const input = document.getElementById('input');
const value = document.getElementById('value');

const observer = new Observer();

observer.subscribe(data => {
  value.innerHTML = data;
});

input.addEventListener('input', e => {
  observer.set(e.target.value);
});
