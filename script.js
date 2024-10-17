// const testimonials = [
//     {
//         name: "Name 1",
//         text: "Joining this gym has been life-changing! The personalized coaching and supportive community helped me reach my fitness goals faster than I imagined."
//     },
//     {
//         name: "Name 2",
//         text: "This gym provided me the best fitness environment! The trainers are so motivating, and the equipment is top-notch."
//     },
//     {
//         name: "Name 3",
//         text: "I’ve seen amazing results in just a few months! It’s the perfect place for fitness enthusiasts at any level."
//     }
// ];

// let currentTestimonial = 0;

// const clientName = document.getElementById('client-name');
// const testimonialText = document.getElementById('testimonial-text');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const dots = document.querySelectorAll('.dot');

// function updateTestimonial(index) {
//     clientName.textContent = testimonials[index].name;
//     testimonialText.textContent = testimonials[index].text;
//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[index].classList.add('active');

//     // Enable/disable arrows based on position
//     prevBtn.disabled = index === 0;
//     nextBtn.disabled = index === testimonials.length - 1;

//     // Change the color of the next button if no more testimonials
//     nextBtn.classList.toggle('disabled', index === testimonials.length - 1);
// }

// prevBtn.addEventListener('click', () => {
//     if (currentTestimonial > 0) {
//         currentTestimonial--;
//         updateTestimonial(currentTestimonial);
//     }
// });

// nextBtn.addEventListener('click', () => {
//     if (currentTestimonial < testimonials.length - 1) {
//         currentTestimonial++;
//         updateTestimonial(currentTestimonial);
//     }
// });

// // Initialize with the first testimonial
// updateTestimonial(currentTestimonial);



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
  
  