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

selectLanguage.addEventListener("click", (eve) => {
  console.log(eve.target.value);
  console.log(eve.target.classList[1]);
  setLanguage(eve.target.classList[1]);
});
let setLanguage = (language) => {
  if (language == "en") {
    sideNav.classList.add("ltr");
  } else if (language == "ar") {
    sideNav.classList.remove("ltr");
    sideNav.classList.add("rtl");
  }
};
