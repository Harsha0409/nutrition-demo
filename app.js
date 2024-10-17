
//frequenctly asked questions js
document.querySelectorAll('.faq-header').forEach(faqHeader => {
    faqHeader.addEventListener('click', () => {
      const faq = faqHeader.parentElement;
  
      // Close all other FAQs
      document.querySelectorAll('.faq').forEach(f => {
        if (f !== faq) {
          f.classList.remove('active');
          f.querySelector('.faq-toggle').textContent = '+';
          f.querySelector('.faq-content').style.display = 'none';
        }
      });
  
      // Toggle the current one
      faq.classList.toggle('active');
      
      const faqContent = faq.querySelector('.faq-content');
      const toggle = faq.querySelector('.faq-toggle');
      
      if (faq.classList.contains('active')) {
        faqContent.style.display = 'block';
        toggle.textContent = '-';
      } else {
        faqContent.style.display = 'none';
        toggle.textContent = '+';
      }
    });
  });