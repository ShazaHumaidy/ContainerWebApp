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
