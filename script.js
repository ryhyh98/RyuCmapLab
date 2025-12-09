document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // EmailJS Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Show loading state (optional)
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = '보내는 중...';
            submitBtn.disabled = true;

            // Generate these IDs from your EmailJS dashboard
            const serviceID = 'service_4m9ix1g';
            const templateID = 'template_2bpu6tq';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert('문의가 성공적으로 발송되었습니다!');
                    contactForm.reset();
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                }, (err) => {
                    alert('발송에 실패했습니다. 다시 시도해 주세요.\n에러: ' + JSON.stringify(err));
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }
});
