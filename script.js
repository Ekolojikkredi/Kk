// Okul Kayıt ve Şifre Kontrolü
const schools = {};  // Okul bilgilerini saklamak için

document.getElementById("school-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const schoolName = document.getElementById("school-name").value;
    const schoolPassword = document.getElementById("school-password").value;

    // Okul verisi kaydını yap
    schools[schoolName] = schoolPassword;
    alert("Okul kaydı yapıldı!");

    // Veri giriş alanını aktif et
    document.getElementById("data-entry").style.display = "block";
});

// Veri Girişi
document.getElementById("data-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const schoolName = document.getElementById("school-name").value;
    const password = document.getElementById("school-password").value;

    // Şifreyi kontrol et
    if (schools[schoolName] !== password) {
        alert("Yanlış şifre!");
        return;
    }

    // Atık bilgilerini kaydet
    const studentName = document.getElementById("data-student-name").value;
    const studentSurname = document.getElementById("data-student-surname").value;
    const studentNumber = document.getElementById("data-student-number").value;
    const wasteType = document.getElementById("data-waste-type").value;
    const wasteWeight = document.getElementById("data-waste-weight").value;
    const recordedBy = document.getElementById("data-recorded-by").value;

    // Bu noktada veriyi saklamak için backend kullanılabilir (JSON, veritabanı vs.)
    console.log("Öğrenci Kaydı:", studentName, studentSurname, studentNumber, wasteType, wasteWeight, recordedBy);

    alert("Veri başarıyla kaydedildi!");
});

// Öğrenci Verisi Görüntüleme
const studentData = {};

studentData["12345"] = [
    { wasteType: "Kağıt", wasteWeight: 2, date: "2024-12-08" },
    { wasteType: "Plastik", wasteWeight: 1.5, date: "2024-12-09" },
];

document.getElementById("view-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const studentEmail = document.getElementById("view-email").value;
    const studentNumber = document.getElementById("view-student-number").value;

    if (studentData[studentNumber]) {
        document.getElementById("student-data").style.display = "block";
        const wasteList = document.getElementById("waste-list");
        wasteList.innerHTML = "";

        studentData[studentNumber].forEach((waste) => {
            const li = document.createElement("li");
            li.textContent = `${waste.date}: ${waste.wasteType} - ${waste.wasteWeight} kg`;
            wasteList.appendChild(li);
        });
    } else {
        alert("Veri bulunamadı.");
    }
});
