// إضافة مستمع حدث لجميع عناصر القائمة
document.querySelectorAll('.menu-item').forEach((item) =>
    item.addEventListener('click', (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة

        const targetPage = item.getAttribute('data-target'); // الحصول على اسم الصفحة المطلوبة
        const mainContent = document.getElementById('main-content'); // تحديد منطقة المحتوى

        // جلب واستبدال المحتوى باستخدام Fetch API
        fetch(targetPage)
            .then((res) => res.text()) // تحويل الاستجابة إلى نص
            .then((html) => (mainContent.innerHTML = html)); // استبدال المحتوى
    })
);

/////// For direction website when you selection the language
let selectLanguage = document.querySelector('select');
let sideNav = document.querySelector('.sidebar');

selectLanguage.addEventListener('click', (eve) => {
    setLanguage(eve.target.value);
});
let setLanguage = (language) => {
    if (language == 'en') {
        sideNav.classList.add('ltr');
        console.log('English');
    } else if (language == 'ar') {
        if (sideNav.classList.contains('ltr')) {
            sideNav.classList.remove('ltr');
            sideNav.classList.add('rtl');
        }
        console.log('Arabic');
    }
};
