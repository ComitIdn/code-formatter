document.addEventListener('DOMContentLoaded', function() {
    // ===== ELEMENTS =====
    const input = document.getElementById('codeInput');
    const output = document.getElementById('formattedOutput');
    const formatBtn = document.getElementById('formatBtn');
    const resetBtn = document.getElementById('resetBtn');
    const statusMsg = document.getElementById('statusMsg');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    // ===== SAMPLE CODE =====
    const sampleCode = `function hello(name) {
  console.log("Hello, " + name + "!");
}`;

    // ===== MOBILE TOGGLE =====
    mobileToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // ===== FORMAT FUNCTION =====
    function formatCode(code) {
        try {
            let formatted = code;

            // 1. Perbaiki spasi di antara function dan parameter
            formatted = formatted.replace(/function\s*\(/g, 'function (');

            // 2. Tambahkan spasi setelah koma
            formatted = formatted.replace(/,\s*/g, ', ');

            // 3. Tambahkan spasi di sekitar operator
            formatted = formatted.replace(/([=+\-*/%])\s*/g, '$1 ');
            formatted = formatted.replace(/\s*([=+\-*/%])/g, ' $1');

            // 4. Perbaiki kurung kurawal
            formatted = formatted.replace(/\{\s*/g, ' { ');
            formatted = formatted.replace(/\}\s*/g, ' } ');

            // 5. Hapus spasi ganda
            formatted = formatted.replace(/\s{2,}/g, ' ');

            // 6. Tambahkan newline setelah titik koma
            formatted = formatted.replace(/;\s*/g, ';\n');

            // 7. Perbaiki indentasi
            let lines = formatted.split('\n');
            let indentLevel = 0;
            let result = [];

            for (let line of lines) {
                line = line.trim();
                if (line === '') continue;

                if (line.includes('}')) {
                    indentLevel = Math.max(0, indentLevel - 1);
                }

                let indent = '  '.repeat(indentLevel);
                result.push(indent + line);

                if (line.includes('{')) {
                    indentLevel++;
                }
            }

            return result.join('\n');
        } catch (e) {
            return '❌ Error: ' + e.message;
        }
    }

    // ===== FORMAT BUTTON =====
    formatBtn.addEventListener('click', function() {
        const originalCode = input.value.trim();
        if (originalCode === '') {
            output.textContent = '// ⚠️ Silakan masukkan kode terlebih dahulu.';
            statusMsg.textContent = '❌ Kode kosong';
            statusMsg.className = 'status-msg error';
            return;
        }

        const formatted = formatCode(originalCode);
        output.textContent = formatted;

        statusMsg.textContent = '✅ Format berhasil!';
        statusMsg.className = 'status-msg success';

        // Sembunyikan pesan setelah 3 detik
        setTimeout(() => {
            statusMsg.textContent = '';
            statusMsg.className = 'status-msg';
        }, 3000);
    });

    // ===== RESET BUTTON =====
    resetBtn.addEventListener('click', function() {
        input.value = sampleCode;
        output.textContent = '// Hasil format akan muncul di sini';
        statusMsg.textContent = '↺ Kode direset';
        statusMsg.className = 'status-msg';
        setTimeout(() => {
            statusMsg.textContent = '';
        }, 2000);
    });

    // ===== SHORTCUT: Ctrl+Shift+F =====
    input.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.shiftKey && (e.key === 'F' || e.key === 'f')) {
            e.preventDefault();
            formatBtn.click();
        }
    });

    // ===== AUTO-RESIZE TEXTAREA =====
    input.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });

    // ===== SET SAMPLE CODE ON LOAD =====
    input.value = sampleCode;
    input.style.height = 'auto';
    input.style.height = input.scrollHeight + 'px';
});

// ===== FEATHER ICONS (opsional) =====
// Jika ingin menggunakan icon, uncomment baris di bawah
// document.addEventListener('DOMContentLoaded', function() {
//     if (typeof feather !== 'undefined') {
//         feather.replace();
//     }
// });