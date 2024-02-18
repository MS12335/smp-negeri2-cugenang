// Toggle Class Active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", function (event) {
    event.preventDefault();
    navbarNav.classList.toggle("active");
});

// Klik di luar sidebar untuk menghilangkan nav
const hm = document.getElementById("hamburger-menu");
const sb = document.getElementById("search-button");
document.addEventListener("click", function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove("active");
    }
});

// Untuk mengirimkan whatsapp
const formSendWhatsApp = document.getElementById("sendWhatsapp");

const sendWhatsAppMessage = () => {
    const name = document.getElementById("nama-lengkap").value;
    const email = document.getElementById("email").value;
    const nomor_telepon = document.getElementById("nomor-telepon").value;
    const topik = document.getElementById("topik").value;
    const pesan = document.getElementById("pesan").value;
    console.log(name, email, nomor_telepon, topik, pesan);

    let templateMessage = "Selamat Pagi Bapak/Ibu SMP Negeri 2 Cugenang, perkenalkan nama saya " + name + ". Ada beberapa hal yang mau saya tanyakan/sampaikan\n\nTopik : " + topik + "\n\n" + "Pesan : \n" + pesan + "\n\nDemikian hal-hal yang mau saya tanyakan/sampaikan kepada Bapak/Ibu SMP Negeri 2 Cugenang\n\nBapak/Ibu dapat menghubungi saya melalui telpon : " + nomor_telepon + " atau melalui email : " + email + "\n\nTerimakasih";

    let encodedMessage = encodeURIComponent(templateMessage);

    let whatsappURL = "https://wa.me/6287872611668?text=" + encodedMessage;

    window.open(whatsappURL);
}

// Lalu kita dapat tambahkan event listener setelah di submit
formSendWhatsApp.addEventListener("submit", (event) => {
    event.preventDefault();

    //Lalu, kita dapat jalankan function send whatsapp message
    sendWhatsAppMessage();
})