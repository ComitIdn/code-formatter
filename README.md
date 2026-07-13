# ⚡ Code Formatter

> Opinionated code formatter untuk JavaScript, PHP, Python, CSS, HTML, dan lainnya.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ComitIdn/code-formatter/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/ComitIdn/code-formatter)](https://github.com/ComitIdn/code-formatter/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/ComitIdn/code-formatter)](https://github.com/ComitIdn/code-formatter/issues)

---

## 📖 Tentang Proyek Ini

**Code Formatter** adalah alat yang dirancang untuk membantu developer merapikan kode secara otomatis. Dengan satu perintah, kode Anda akan diformat dengan gaya yang konsisten dan rapi.

### 🎯 Tujuan
- **Konsistensi**: Semua kode dalam tim memiliki gaya yang sama.
- **Efisiensi**: Hemat waktu yang terbuang untuk format manual.
- **Fokus**: Developer bisa fokus pada logika, bukan style.

---

## ✨ Fitur Utama

| Fitur | Deskripsi |
|-------|-----------|
| ⚡ **Cepat** | Format kode dalam milidetik. |
| 🌐 **Multi-Bahasa** | Support JavaScript, TypeScript, PHP, Python, CSS, HTML, JSON. |
| 🔌 **Integrasi** | Plugin untuk VS Code, Sublime, Vim, Emacs, dan lainnya. |
| 🎨 **Kustomisasi** | Atur indentasi, lebar baris, dan aturan format. |
| 🛡 **Konsistensi** | Hilangkan perdebatan gaya di code review. |
| 📦 **Zero Config** | Siap pakai tanpa konfigurasi. |

---

## 🚀 Cara Menggunakan

### Instalasi

#### Via npm
```bash
npm install --save-dev code-formatter
```

#### Via yarn
```bash
yarn add --dev code-formatter
```

### Penggunaan Dasar

```bash
# Format semua file JavaScript
npx code-formatter --write ./src/**/*.js

# Format dengan mode check (tanpa menulis)
npx code-formatter --check ./src/**/*.js

# Format file tertentu
npx code-formatter --write ./src/index.js
```

### Integrasi dengan VS Code

1. Install ekstensi dari Marketplace
2. Aktifkan `Format on Save`
3. Kode akan otomatis terformat setiap kali menyimpan file

---

## 🧪 Demo Online

Kunjungi [https://comitidn.github.io/code-formatter/](https://comitidn.github.io/code-formatter/) untuk mencoba langsung di browser.

---

## 📂 Struktur Proyek

```
code-formatter/
├── index.html          # Halaman utama
├── style.css           # Styling
├── script.js           # Interaktivitas playground
├── README.md           # Dokumentasi ini
└── .gitignore          # File yang diabaikan Git
```

---

## 🛠 Teknologi yang Digunakan

- **HTML5** - Struktur halaman
- **CSS3** - Styling modern dengan dark theme
- **JavaScript (Vanilla)** - Interaktivitas tanpa dependency
- **GitHub Pages** - Hosting statis gratis

---

## 📖 Contoh Output

### Sebelum (Berantakan)
```javascript
function   hello(  name  )  {
    console.log(  "Hello, "   +  name +  "!"  )   ;
    }
```

### Sesudah (Rapi)
```javascript
function hello(name) {
  console.log("Hello, " + name + "!");
}
```

---

## 👨‍💻 Kontribusi

Kami sangat terbuka untuk kontribusi! Silakan ikuti langkah-langkah berikut:

1. **Fork** repositori ini
2. **Clone** fork Anda
   ```bash
   git clone https://github.com/username/code-formatter.git
   ```
3. **Buat branch** baru
   ```bash
   git checkout -b fitur-baru
   ```
4. **Commit** perubahan
   ```bash
   git commit -m "Menambahkan fitur baru"
   ```
5. **Push** ke branch
   ```bash
   git push origin fitur-baru
   ```
6. Buat **Pull Request** ke branch `main`

---

## 📝 Lisensi

Proyek ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk detail.

---

## 🙏 Terima Kasih

- Terinspirasi dari [Prettier](https://prettier.io)
- Dibuat dengan ❤️ oleh tim [ComitIdn](https://github.com/ComitIdn)

---

## 📱 Kontak

- **GitHub**: [ComitIdn](https://github.com/ComitIdn)
- **Website**: [https://comitidn.github.io](https://comitidn.github.io)

---

<div align="center">
  <sub>Dibuat dengan ❤️ untuk komunitas developer Indonesia.</sub>
</div>