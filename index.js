// Model Dataset
const data = [
  {
    heading: 'Awesome Books',
    image: './projects-img/awesome-books.png',
    paragraph: `A single-page web application built with HTML, 
    CSS and JavaScript which allows users to add Books and names of the author. Added books are displayed on a separate page with remove 
    buttons assigned for easy removal of books`,
    liveUrl: 'https://brytelitty.github.io/Awesome-books/#',
    githubUrl: 'https://github.com/BryteLitty/Awesome-books',
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
    heading: 'Project Availabity',
    image: './projects-img/todo-list.png',
    paragraph: `A Todo-List web application build with HTML, CSS, JavaScript and which allows you to add items, mark items as completed and deleted them, and also allows 
    user to make edits to items already in the todo list.`,
    liveUrl: 'https://brytelitty.github.io/Todo-App/dist/',
    githubUrl: 'https://github.com/BryteLitty/Todo-App',
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

// Form Validation Selectors
const form = document.querySelector('.form');
const error = document.querySelector('.error');
// Local Storage
const email = document.querySelector('.emailInput');
const fullName = document.querySelector('.nameInput');
const message = document.querySelector('.msgInput');

const inputInfo = {
  fullName: '',
  email: '',
  message: '',
};

// function to save form inputs
const saveData = () => {
  inputInfo.fullName = fullName.value;
  inputInfo.email = email.value;
  inputInfo.message = message.value;
  // Stringify data
  const storeData = JSON.stringify(inputInfo);

  localStorage.setItem('userInfo', storeData);
};
// Form Validation
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = form.elements.email.value;
  const correctInput = emailInput.toLowerCase();

  if (emailInput === correctInput) {
    saveData();
    form.submit();
  } else {
    error.style.display = 'block';
    form.elements.email.style.border = '1px solid red';
  }
});

// get data from local storage and show in the form input
const getData = localStorage.getItem('userInfo');
const newData = JSON.parse(getData);

fullName.value = newData.fullName;
email.value = newData.email;
message.value = newData.message;
