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
    heading: 'Muliti Stores',
    image: './images/Multipost1.svg',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
    centuries, but also the leap into electronic typesetting, remaining essent`,
    liveUrl: 'https://microverse.com',
    githubUrl: 'https://github.com/BryteLitty/portfolio-project',
  },
  {
    heading: 'Muliti Stores',
    image: './images/tonic2.svg',
    paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
    centuries, but also the leap into electronic typesetting, remaining essent`,
    liveUrl: 'https://microverse.com',
    githubUrl: 'https://github.com/BryteLitty/portfolio-project',
  },
  {
    heading: 'Muliti Stores',
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


// Modal functionality
const modal = document.getElementById('projectModal');
const modalContent = document.querySelector('.modal-content');
const modalBtn = document.querySelectorAll('.modalBtn');

modalBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let i = e.currentTarget.dataset.id - 1;
    modalContent.innerHTML = `
    <div class="modal-header">
                    <span id="closeBtn" class="close-btn">&times;</span>
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
                        <p>
                           ${data[i].paragraph}
                        </p>
                        <ul class="skills">
                            <li>html</li>
                            <li>css</li>
                            <li>javascript</li>
                        </ul>
                        <hr>
                        <div class="btn-container">
                            <button class="modal-btn">
                                See Live
                                <img src="./images/icons/live.png" alt="see live">
                            </button>
                                <button class="modal-btn">
                                Source
                                <img src="./images/icons/github_blue.png" alt="see live">
                            </button>
                        </div>
                    </div>
                </div>`
    modal.style.display = "block";
  });
});

