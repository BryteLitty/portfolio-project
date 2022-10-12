// Model Dataset
const data = [
  {
    heading: 'Tonic',
    image: './images/tonic1.svg',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
    centuries, but also the leap into electronic typesetting, remaining essent`,
    liveUrl: 'https://microverse.com',
    githubUrl: 'https://github.com/BryteLitty/portfolio-project',
  },
  {
    heading: 'Project Availabity',
    image: './images/Multipost1.svg',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
    centuries, but also the leap into electronic typesetting, remaining essent`,
    liveUrl: 'https://microverse.com',
    githubUrl: 'https://github.com/BryteLitty/portfolio-project',
  },
  {
    heading: 'Redfluxx',
    image: './images/tonic2.svg',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
    centuries, but also the leap into electronic typesetting, remaining essent`,
    liveUrl: 'https://microverse.com',
    githubUrl: 'https://github.com/BryteLitty/portfolio-project',
  },
  {
    heading: 'Professional Art Printing',
    image: './images/Multpost2.svg',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
    centuries, but also the leap into electronic typesetting, remaining essent`,
    liveUrl: 'https://microverse.com',
    githubUrl: 'https://github.com/BryteLitty/portfolio-project',
  },
];

const openBtn = document.querySelector('.nav-icon');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.list-item');
// Modal functionality
const modal = document.getElementById('projectModal');
const modalContent = document.querySelector('.modal-wrapper');
const modalBtn = document.querySelectorAll('.modalBtn');

openBtn.addEventListener('click', () => {
  mobileMenu.classList.add('show-mobile-menu');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show-mobile-menu');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show-mobile-menu');
  });
});

modalBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const i = e.currentTarget.dataset.id - 1;
    modalContent.innerHTML = `
    <div class="modal-content">
                    <span id="closeBtn" class="closeModal">&times;</span>
                    <h1>${data[i].heading}</h1>
                    <ul class="below">
                        <li class="canopy">canopy</li>
                        <li><img src="./images/Counter.svg" alt=""></li>
                        <li>Back End Dev</li>
                        <li><img src="./images/Counter.svg" alt=""></li>
                        <li>2015</li>
                    </ul>
                    <div class="modal-img-container">
                        <img src="${data[i].image}" alt="">
                    </div>

                    <div class="info">
                        <div class="text">
                            <p>${data[i].paragraph}</p>    
                        </div>

                        <div class="side">
                            <ul class="skills">
                                <li>html</li>
                                <li>css</li>
                                <li>javascript</li>
                            </ul>
                            <hr>
                            <div class="btn-container">
                                <a href="${data[i].liveUrl}">
                                    <button class="modal-btn"> 
                                        See Live <img src="./images/icons/live.png" alt="see live">
                                    </button>
                                </a>
                                <a href="${data[i].githubUrl}">
                                    <button class="modal-btn">
                                    Source <img src="./images/icons/github_blue.png" alt="see live">
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`;
    modal.style.display = 'block';
    const closeModal = document.getElementById('closeBtn');
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
});


// Form Validation
const form = document.querySelector(".form");
const error = document.querySelector(".error")

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = form.elements['email'].value;
  const correctInput = emailInput.toLowerCase();

  if(emailInput == correctInput) {
    form.submit();
  } else {
    error.style.display = 'block'
  }
});
