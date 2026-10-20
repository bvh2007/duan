const giftButton = document.querySelector('#giftButton');
const giftHint = document.querySelector('#giftHint');
const surprise = document.querySelector('#surprise');
const wishButton = document.querySelector('#wishButton');
const randomWish = document.querySelector('#randomWish');
const againButton = document.querySelector('#againButton');
let previousWish = -1;
let opened = false;

function floatingItem() {
  const item = document.createElement('span');
  item.className = 'floaty';
  item.textContent = ['💗', '🌸', '💕', '✨', '🌷'][Math.floor(Math.random() * 5)];
  item.style.left = `${Math.random() * 100}vw`;
  item.style.fontSize = `${15 + Math.random() * 18}px`;
  item.style.animationDuration = `${5 + Math.random() * 4}s`;
  item.style.setProperty('--drift', `${Math.random() * 140 - 70}px`);
  document.querySelector('#floating').appendChild(item);
  item.addEventListener('animationend', () => item.remove(), { once: true });
}

function celebrate() {
  for (let i = 0; i < 24; i++) setTimeout(floatingItem, i * 65);
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(floatingItem, 650);
}

giftButton.addEventListener('click', () => {
  if (opened) return;
  opened = true;
  giftButton.classList.add('open');
  giftHint.textContent = 'Đang tải sự dễ thương... 💕';
  celebrate();
  setTimeout(() => {
    giftButton.hidden = true;
    giftButton.style.display = 'none';
    giftHint.hidden = true;
    surprise.hidden = false;
    surprise.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 950);
});

// Lấy lời chúc mới từ backend; tránh lặp câu ngay trước đó.
wishButton.addEventListener('click', async () => {
  wishButton.disabled = true;
  try {
    const response = await fetch(`/api/wish?exclude=${previousWish}`);
    if (!response.ok) throw new Error('API không phản hồi');
    const data = await response.json();
    previousWish = data.index;
    randomWish.textContent = data.wish;
    randomWish.classList.remove('pop');
    void randomWish.offsetWidth;
    randomWish.classList.add('pop');
    celebrate();
  } catch (error) {
    randomWish.textContent = 'Gấu bông đang mất kết nối 🧸 Hãy thử lại nhé!';
  } finally {
    wishButton.disabled = false;
  }
});

againButton.addEventListener('click', () => location.reload());
