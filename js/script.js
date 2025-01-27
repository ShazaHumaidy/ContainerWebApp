// إضافة مستمع حدث لجميع عناصر القائمة
document.querySelectorAll(".menu-item").forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const targetPage = item.getAttribute("data-target"); // الحصول على اسم الصفحة المطلوبة
    const mainContent = document.getElementById("main-content"); // تحديد منطقة المحتوى

    // جلب واستبدال المحتوى باستخدام Fetch API
    fetch(targetPage)
      .then((res) => res.text()) // تحويل الاستجابة إلى نص
      .then((html) => (mainContent.innerHTML = html)); // استبدال المحتوى
  })
);
///////

(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
/////// For direction website when you selection the language
let selectLanguage = document.querySelector(".lang-menu");
let sideNav = document.querySelector(".sidebar");

let HTMLTag = document.querySelector("html");

let LanguageFile = document.createElement("link");

selectLanguage.addEventListener("click", (eve) => {
  setLanguage(eve.target.classList[1]);
});
let setLanguage = (language) => {
  if (language == "en") {
    sideNav.classList.add("ltr");
    HTMLTag.lang = "en";
    HTMLTag.dir = "ltr";
    LanguageFile.rel = "stylesheet";
    LanguageFile.href = "../css/styles.css";
    console.log(LanguageFile);
    document.head.appendChild(LanguageFile);
  } else if (language == "ar") {
    sideNav.classList.remove("ltr");
    sideNav.classList.add("rtl");
    HTMLTag.lang = "ar";
    HTMLTag.dir = "rtl";

    LanguageFile.rel = "stylesheet";
    LanguageFile.href = "../css/styleRTL.css";
    console.log(LanguageFile);
    document.head.appendChild(LanguageFile);
  }
};

function toggleBankFields() {
  const payMethod = document.getElementById("PayMethod").value;
  const bankField = document.getElementById("BankField");
  const transferImageField = document.getElementById("TransferImageField");

  // إخفاء الحقول في البداية
  bankField.style.display = "none";
  transferImageField.style.display = "none";

  // تحقق من القيمة وإذا كانت 3 أو 6، أظهر الحقول
  if (payMethod == "3" || payMethod == "6") {
    bankField.style.display = "block";
    transferImageField.style.display = "block";
  }
}

console.log(document.querySelector("html").dir);
