// Backend Node.js + Express: chạy bằng npm start
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// THAY LỜI CHÚC: thêm hoặc sửa các câu bên dưới.
const wishes = [
  'Chúc em luôn xinh tươi, ít bug và nhiều feature đáng yêu! 🧸',
  'Em chính là dòng code khiến ngày của anh chạy mượt hơn! 💗',
  'Nếu nụ cười của em là Wi-Fi, chắc anh lúc nào cũng full vạch! 📶',
  'Hôm nay em được quyền đáng yêu không giới hạn, không cần đăng ký VIP! 🎀',
  'Anh đã thử debug nỗi nhớ em, nhưng chương trình cứ chạy mãi! 💻',
  'Chúc em 20/10 vui hơn lúc code chạy đúng ngay lần đầu! ✨',
  'Em không phải CSS, nhưng làm thế giới của anh đẹp hơn nhiều! 🌷',
  'Đã kiểm tra hệ thống: em đạt 100/100 điểm dễ thương! 💕'
];

app.get('/api/wish', (req, res) => {
  const exclude = Number(req.query.exclude);
  const choices = wishes.map((wish, index) => ({ wish, index }))
    .filter(item => item.index !== exclude);
  const picked = choices[Math.floor(Math.random() * choices.length)];
  res.json(picked);
});

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🎁 Website đang chạy tại http://localhost:${PORT}`);
});
