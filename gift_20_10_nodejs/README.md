# Website gấu bông tặng quà 20/10 🧸

## Chạy trên VS Code
1. Cài Node.js 18 trở lên.
2. Mở terminal tại thư mục chứa `package.json`.
3. Chạy `npm install` (lần đầu), sau đó `npm start`.
4. Mở `http://localhost:3000`.

## Thay ảnh và tên
- Đặt ảnh vào `public/images/anh-ban-gai.jpg`.
- Mở `public/index.html`, tìm `anh-ban-gai.svg` và đổi thành `anh-ban-gai.jpg`.
- Thay tên/lời nhắn trong `public/index.html`.
- Thay lời chúc ngẫu nhiên trong `server.js` (mảng `wishes`).

## Cho người khác xem
- Cùng Wi-Fi: dùng `http://IP-LAN-CUA-BAN:3000` (máy tính phải đang chạy; firewall cần cho phép).
- Khác mạng: triển khai lên hosting hỗ trợ Node.js (ví dụ Render), cấu hình Build command `npm install`, Start command `npm start`. Hosting cấp URL HTTPS công khai. `npm start` tại máy **không** tự công khai website.
- Nếu đăng công khai ảnh cá nhân, hãy xin phép người trong ảnh.
# duan123
