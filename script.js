// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing effect for introduction
const typedOptions = {
    strings: ["a Data Scientist.", "a Frontend Developer.", "an Innovator."],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
};

const typed = new Typed('#element', typedOptions);

// Fade-in animation on scroll
const fadeInElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(element => {
    observer.observe(element);
});

// Add fade-in class to sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.classList.add('fade-in');
});

function openModal(modalId) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');

    // Set the title and description based on the clicked project
    switch (modalId) {
        case 'modal1':
            title.textContent = "Advanced Sports Analytics for UEFA EURO 2024";
            description.innerHTML = `
                ◦ Conducted web scraping and data preprocessing, performed descriptive statistical analysis with visualizations to offer insights for coaches.<br>
                ◦ Applied a Gradient Boosting Classifier for predicting 2021 League Table Rankings and used a tuned Random Forest Regressor to analyze Top Players, achieving a 96.9 R² score.
            `;
            break;
        case 'modal2':
            title.textContent = "Dynamic Weather Dashboard";
            description.innerHTML = `
                ◦ Developed a responsive weather dashboard using HTML, CSS, and JavaScript, integrating the OpenWeatherMap API to display real-time weather data for over 50 locations.<br>
                ◦ Implemented features like location search and dynamic updates, enhancing user engagement by 30%.<br>
                ◦ Leveraged asynchronous JavaScript and robust error handling, improving performance and reliability by 20%.
            `;
            break;
        case 'modal3':
            title.textContent = "Sorting Algorithm Visualizer";
            description.innerHTML = `
                ◦ Designed and implemented a sorting algorithm visualizer in HTML, CSS, and JavaScript, showcasing Bubble Sort, Merge Sort, and Quick Sort with real-time, interactive graphics.<br>
                ◦ Optimized performance and responsiveness of the web application, improving visualization accuracy and reducing latency by 30%.
            `;
            break;
        case 'modal4':
            title.textContent = "Stock Price Prediction";
            description.innerHTML = `
                ◦ Built a stock price prediction model in Python, preprocessing data with Pandas and scaling with Scikit-Learn’s MinMaxScaler.<br>
                ◦ Trained and validated the model using Scikit-Learn’s Linear Regression, achieving accurate stock price forecasts.
            `;
            break;
        case 'modal5':
            title.textContent = "Credit Card Financial Dashboard";
            description.innerHTML = `
                ◦ Developed an interactive dashboard with data from SQL databases (over 15,000 rows) to extract valuable insights and monitor key performance metrics.<br>
                ◦ Optimized data processing and analysis, delivering actionable insights to stakeholders to enhance decision-making.
            `;
            break;
    }

    modal.style.display = "block"; // Show the modal
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none"; // Hide the modal
}

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
