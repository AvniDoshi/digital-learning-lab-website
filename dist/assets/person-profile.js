const people = {
  "mark-warschauer": {
    name: "Mark Warschauer",
    role: "Director & Principal Investigator",
    group: "Leadership",
    image: "mark-warschauer.jpg",
    bio: "Mark Warschauer is a Distinguished Professor of Education at UC Irvine and director of the Digital Learning Lab. His work connects digital learning, language and literacy, STEM, and equity across K–12 and higher education.",
    interests: ["Digital learning", "Language and literacy", "STEM", "Diversity and equity"],
    external: "https://www.faculty.uci.edu/profile/?facultyId=4866",
    externalLabel: "UCI faculty profile"
  },
  "tamara-tate": {
    name: "Tamara Tate",
    role: "Associate Director",
    group: "Leadership",
    image: "tamara-tate.jpg",
    bio: "Tamara Tate is a project scientist and associate director of the Digital Learning Lab. Her work focuses on literacy education, technology-supported learning, and the thoughtful integration of generative AI into writing instruction.",
    interests: ["Writing and literacy", "Generative AI", "Technology-supported learning", "Educational equity"],
    external: "https://education.uci.edu/researcher-tate-t.html",
    externalLabel: "UCI researcher profile"
  },
  "dana-saito-stehberger": {
    name: "Dana Saito-Stehberger",
    role: "Director of Curriculum & Instruction",
    group: "Lab Staff",
    image: "dana-saito-stehberger.jpg",
    bio: "Dana Saito-Stehberger leads curriculum and instruction for the Digital Learning Lab, helping translate research and emerging technologies into meaningful learning experiences for educators and students.",
    interests: ["Curriculum design", "Instruction", "Research to practice", "Educator learning"]
  },
  "sabrina-look": {
    name: "Sabrina Look",
    role: "Director of Communications & Special Projects",
    group: "Lab Staff",
    image: "sabrina-look.jpg",
    bio: "Sabrina Look directs communications and special projects for the Digital Learning Lab. Her work supports research communication, data management, and the dissemination of the lab’s work to broader communities.",
    interests: ["Research communication", "Project development", "Data management", "Dissemination"],
    external: "https://education.uci.edu/staff-look-s.html",
    externalLabel: "UCI staff profile"
  },
  "beth-harnick-shapiro": {
    name: "Beth Harnick-Shapiro",
    role: "STEM Writing Specialist",
    group: "Lab Staff",
    image: "beth-harnick-shapiro.jpg",
    bio: "Beth Harnick-Shapiro is a STEM writing specialist whose work connects writing pedagogy, engineering education, and responsible uses of generative AI in undergraduate learning.",
    interests: ["STEM writing", "Engineering education", "Writing pedagogy", "Generative AI"],
    external: "https://engineering.uci.edu/directory/faculty/dean",
    externalLabel: "UCI Engineering directory"
  },
  "waverly-tseng": {
    name: "Waverly Tseng",
    role: "PhD Candidate",
    group: "Graduate Students",
    image: "waverly-tseng.jpg",
    bio: "Waverly Tseng studies writing instruction in higher education, including how generative AI may support or disrupt the writing communities developed in undergraduate classrooms.",
    interests: ["Writing instruction", "Higher education", "Generative AI", "Digital pedagogy"],
    external: "https://dtei.uci.edu/about/waverly-tseng/",
    externalLabel: "UCI DTEI profile"
  },
  "santiago-ojeda-ramirez": {
    name: "Santiago Ojeda Ramirez",
    role: "PhD Candidate",
    group: "Graduate Students",
    image: "santiago-ojeda-ramirez.jpg",
    bio: "Santiago Ojeda Ramirez explores the intersections of AI, speculative design, and interdisciplinary STEAM education. His work centers young people as active designers of technological futures that serve their communities.",
    interests: ["AI education", "Participatory design", "STEAM", "Youth and civic engagement"],
    external: "https://www.santiagojedaramirez.com/",
    externalLabel: "Personal website"
  },
  "kunlei-he": {
    name: "Kunlei He",
    role: "PhD Candidate",
    group: "Graduate Students",
    image: "kunlei-he.jpg",
    bio: "Kunlei He studies how conversational AI can enrich children’s media and learning. Her work examines language development and STEM learning through AI-enhanced television and e-books.",
    interests: ["Conversational AI", "Children’s media", "Language development", "STEM learning"],
    external: "https://kunleihe.github.io/",
    externalLabel: "Personal website"
  },
  "julian-levine": {
    name: "Julian Levine",
    role: "PhD Candidate",
    group: "Graduate Students",
    image: "julian-levine.jpg",
    bio: "Julian Levine researches language, literacy, and learning in digital settings. His work examines early vocabulary development and how interactive technologies can support children’s learning.",
    interests: ["Language and literacy", "Vocabulary", "Educational technology", "Early childhood learning"],
    external: "https://www.julian-levine.com/",
    externalLabel: "Personal website"
  },
  "jasmine-tran": {
    name: "Jasmine Tran",
    role: "PhD Student",
    group: "Graduate Students",
    image: "jasmine-tran.jpg",
    bio: "Jasmine Tran is a doctoral student in Teaching, Learning, and Educational Improvement. Her interests connect digital literacy, design-based research, applications of AI in education, and research-practice partnerships.",
    interests: ["Digital literacy", "Design-based research", "AI in education", "Research-practice partnerships"],
    external: "https://education.uci.edu/directory-phd-students.html",
    externalLabel: "UCI doctoral directory"
  },
  "aria-gaston-panthaki": {
    name: "Aria Gastón-Panthaki",
    role: "PhD Student",
    group: "Graduate Students",
    image: "aria-gaston-panthaki.jpg",
    bio: "Aria Gastón-Panthaki is a doctoral student in Human Development in Context. Her research interests include children’s media, STEM education, and learning with communities that have historically been marginalized.",
    interests: ["Children’s media", "STEM education", "Human development", "Educational equity"],
    external: "https://education.uci.edu/directory-phd-students.html",
    externalLabel: "UCI doctoral directory"
  },
  "jaeyoon-choi": {
    name: "Jaeyoon Choi",
    role: "PhD Student",
    group: "Graduate Students",
    image: "jaeyoon-choi.jpg",
    bio: "Jaeyoon Choi studies educational data science, human–AI teaming, and collaboration analytics. Her work uses machine learning and natural language processing to better understand learning while attending to inclusion and algorithmic bias.",
    interests: ["Educational data science", "Human–AI teaming", "Learning analytics", "Algorithmic fairness"],
    external: "https://jaeyooc.github.io/",
    externalLabel: "Personal website"
  },
  "ali-keramati": {
    name: "Ali Keramati",
    role: "PhD Student",
    group: "Graduate Students",
    image: "ali-keramati.jpg",
    bio: "Ali Keramati works at the intersection of artificial intelligence, cognitive science, and education. His research examines how large language models reason and how multi-agent systems can provide adaptive support for learners and educators.",
    interests: ["AI in education", "Large language models", "Human–AI collaboration", "Multi-agent systems"],
    external: "https://alikera.github.io/education/",
    externalLabel: "Personal website"
  },
  "maura-white": {
    name: "Maura White",
    role: "PhD Student",
    group: "Graduate Students",
    image: "maura-white.jpg",
    bio: "Maura White is a doctoral researcher contributing to the Digital Learning Lab’s interdisciplinary work on learning, technology, and the design of equitable educational experiences.",
    interests: ["Digital learning", "Educational technology", "Learning design", "Educational equity"]
  },
  "melissa-wright": {
    name: "Melissa Wright",
    role: "PhD Student",
    group: "Graduate Students",
    image: "melissa-wright.jpg",
    bio: "Melissa Wright studies multilingual literacy, digital multiliteracy, and artificial intelligence in education. Her work considers how learning technologies can support differentiated experiences for multilingual and neurodivergent learners.",
    interests: ["Multilingual literacy", "Digital multiliteracy", "AI in education", "Neurodiversity"] ,
    external: "https://education.uci.edu/directory-phd-students.html",
    externalLabel: "UCI doctoral directory"
  },
  "siwon-sung": {
    name: "Siwon Sung",
    role: "PhD Student",
    group: "Graduate Students",
    image: "siwon-sung.jpg",
    bio: "Siwon Sung studies language learners’ interactions with generative AI, including how those interactions shape writing processes and everyday language practices within and beyond the classroom.",
    interests: ["Digital literacy", "Second-language writing", "Human–computer interaction", "Generative AI"],
    external: "https://education.uci.edu/directory-phd-students.html",
    externalLabel: "UCI doctoral directory"
  },
  "viridiana-murillo-panduro": {
    name: "Viridiana Murillo Panduro",
    role: "PhD Student",
    group: "Graduate Students",
    image: "viridiana-murillo-panduro.jpg",
    bio: "Viridiana Murillo Panduro is a doctoral researcher contributing to the Digital Learning Lab’s work across education, technology, and research designed to improve learning opportunities.",
    interests: ["Digital learning", "Educational research", "Learning opportunities", "Research to practice"]
  }
};

const slug = document.body.dataset.person;
const person = people[slug];
const root = document.querySelector('[data-profile-root]');

if (!person || !root) {
  document.title = "Profile not found | UCI Digital Learning Lab";
  if (root) root.innerHTML = '<main id="main" class="section"><div class="container"><h1>Profile not found.</h1><p><a href="../people.html">Return to the People page</a></p></div></main>';
} else {
  document.title = `${person.name} | UCI Digital Learning Lab`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', `Learn about ${person.name}, ${person.role} at the UCI Digital Learning Lab.`);
  const interests = person.interests.map((interest) => `<li>${interest}</li>`).join('');
  const external = person.external ? `<a class="btn btn-secondary" href="${person.external}" target="_blank" rel="noopener">${person.externalLabel} ↗</a>` : '';
  root.innerHTML = `
    <header class="site-header"><div class="header-inner"><a class="brand" href="../index.html" aria-label="Digital Learning Lab home"><img class="brand-logo" src="../assets/dll-logo.png" alt=""><span>Digital Learning Lab<small>UC Irvine</small></span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Open navigation">☰</button><nav class="main-nav" id="main-nav" aria-label="Primary navigation"><a href="../about.html">About</a><a href="../platforms.html">Platforms</a><a href="../projects.html">Projects</a><a href="../grants.html">Grants</a><a href="../people.html" aria-current="page">People</a><a href="../professional-learning.html">Professional Learning</a><a class="nav-cta" href="../get-involved.html">Get Involved</a></nav></div></header>
    <main id="main">
      <section class="profile-hero"><div class="container profile-hero-grid"><div><div class="breadcrumbs"><a href="../index.html">Home</a><span>/</span><a href="../people.html">People</a><span>/</span><span>${person.name}</span></div><p class="eyebrow">${person.group}</p><h1>${person.name}</h1><p class="profile-role">${person.role}</p><p class="profile-bio">${person.bio}</p><ul class="interest-list" aria-label="Research and professional interests">${interests}</ul><div class="profile-actions"><a class="btn btn-primary" href="../people.html">← All people</a>${external}</div></div><figure class="profile-portrait"><img src="../assets/people/${person.image}" alt="${person.name}"></figure></div></section>
      <section class="section section-white"><div class="container profile-context"><div><p class="eyebrow">Part of the lab</p><h2>Research, design, and connected learning.</h2></div><div><p class="lede">The Digital Learning Lab brings researchers, educators, designers, and students together to create and study more meaningful and equitable digital learning opportunities.</p><div class="btn-row"><a class="text-link" href="../projects.html">Explore DLL projects →</a><a class="text-link" href="../get-involved.html">Get involved →</a></div></div></div></section>
    </main>
    <footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a class="brand" href="../index.html"><img class="brand-logo" src="../assets/dll-logo.png" alt=""><span>Digital Learning Lab<small>UC Irvine</small></span></a><p>Advancing equitable and meaningful digital learning through research, design, and collaboration.</p></div><div class="footer-links"><h2>Explore</h2><a href="../platforms.html">Platforms</a><a href="../projects.html">Projects</a><a href="../grants.html">Grants</a><a href="../people.html">People</a></div><div class="footer-links"><h2>Connect</h2><a href="../professional-learning.html">Professional Learning</a><a href="../get-involved.html">Get Involved</a><a href="https://digitallearninglab.substack.com/">Substack</a></div></div><div class="footer-bottom"><span>© <span data-year></span> Digital Learning Lab, UC Irvine</span><span>Irvine, California</span></div></div></footer>`;

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('is-open', !open);
  });
  document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });
}
