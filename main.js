// Konfigurasi Profil Angel
const profileData = {
    username: "anovpad-code",
    role: "Learning Web Development",
    lastUpdate: new Date().toLocaleDateString(),
    isActive: true
};

// Fungsi untuk menampilkan pesan sambutan di konsol
function initializeProfile() {
    console.log("Memulai profil...");
    console.log(`Halo, ini adalah repositori milik ${profileData.username}`);
    console.log(`Status: ${profileData.role}`);
}

// Menjalankan fungsi
initializeProfile();

// Efek sederhana untuk interaksi web
document.addEventListener('DOMContentLoaded', () => {
    console.log("Halaman sudah siap!");
});
