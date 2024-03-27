const rootElement = document.getElementById("root");
let data = {};
//let html = "";

apiRequest();

function apiRequest() {
  fetch("../js/db.json")
    .then((res) => res.json())
    .then((response) => {
      data = response;
      gotoHome();
      gotoAbout();
      gotoServices();
      gotoPortfolio();
      gotoContact();
      gotoFooter();
    });
}

function gotoHome() {
  const home = data.home;
  let html = "";

  html += `
    <!-- home section design -->
     <section class="home" id="home">
         <div class="home-content">
         <h3>${home.h3}</h3>
         <h1>${home.h1}</h1>
             <h3>And I'm a <span class="multiple-text"></span></h3>
             <p>${home.p}</p>
             <div class="social-media">`;

  for (let sc of home.socialMedias) {
    html += `<a href="${sc.url}" target="_blank" title="${sc.name}"><i class='${sc.icon}'></i></a>`;
  }

  html += `</div>
             <a href="../images/cv.pdf" target="_blank" class="btn">Download CV</a>
         </div>

         <div class="home-img">
             <img src="${home.homeImg}" alt="homeImage">
         </div>
     </section>`;

  rootElement.innerHTML += html;
}

function gotoAbout() {
  const about = data.about;
  let html = "";

  html += `
    <!-- about section design -->
    <section class="about" id="about">
        <div class="about-img">
            <img src="${about.aboutImg}" alt="aboutImage">
        </div>

        <div class="about-content">
            <h2 class="heading">About <span>Me</span></h2>
            <h3>${about.h3}</h3>
            <p>${about.p}</p>
            <a href="javascript:void(0);" class="btn">Read More</a>
        </div>
    </section>
    `;

  rootElement.innerHTML += html;
}

function gotoServices() {
  const services = data.services;
  let html = "";

  html += `
    <!-- services section design -->
    <section class="services" id="services">
        <h2 class="heading">Our <span>Services</span></h2>
        <div class="services-container">`;

  for (let service of services) {
    html += `<div class="services-box">
    <i class="${service.icon}"></i>
    <h3>${service.name}</h3>
    <p>${service.description}</p>
    <a href="javascript:void(0);" class="btn">
      Read More
    </a>
  </div>`;
  }

  html += `</div>
    </section>`;

  rootElement.innerHTML += html;
}

function gotoPortfolio() {
  const portfolios = data.portfolios;
  let html = "";

  html += `
  <!-- portfolio section design -->
    <section class="portfolio" id="portfolio">
        <h2 class="heading">Latest <span>Project</span></h2>
        <div class="portfolio-container">`;

  for (let portfolio of portfolios) {
    html += `
            <div class="portfolio-box">
            <img src="${portfolio.img}" alt="${portfolio.name}">
            <div class="portfolio-layer">
                <h4>${portfolio.name}</h4>
                <p>${portfolio.description}</p>
                <a href="${portfolio.url}" target="_blank"><i class="bx bx-link-external"></i></a>
            </div>
            </div>`;
  }

  html += `
        </div>
        </section>`;

  rootElement.innerHTML += html;
}

function gotoContact() {
  let html = "";

  html += `
  <!-- contact section design -->
    <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me!</span></h2>

        <form action="#">
            <div class="input-box">
                <input type="text" placeholder="Full Name">
                <input type="email" placeholder="Email Address">
            </div>

            <div class="input-box">
                <input type="number" placeholder="Mobile Number">
                <input type="text" placeholder="Email Subject">
            </div>
            <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" class="btn">
        </form>
    </section>
  `;

  rootElement.innerHTML += html;
}

function gotoFooter() {
  let html = "";

  html += `
  <!-- footer design -->
    <footer class="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2024 by Osman Yıldız | All Rights Reserved.</p>
        </div>

        <div class="footer-iconTop">
            <a href="#home"><i class="bx bx-up-arrow-alt"></i></a>
        </div>
    </footer>
  `;

  rootElement.innerHTML += html;
}
