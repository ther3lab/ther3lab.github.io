// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by members of the $R^3$ Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "broad research directions in the $R^3$ Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "teaching and course materials for courses taught by PI James Holehouse",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the $R^3$ Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "talks from the PI, James Holehouse",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-students-and-postdocs",
          title: "students and postdocs",
          description: "suggested readings and advice for prospective members",
          section: "Navigation",
          handler: () => {
            window.location.href = "/students_and_postdocs/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-the-rules-regulations-and-randomness-r-3-lab-will-be-starting-at-washu-s-department-of-biology-in-fall-2026",
          title: 'The Rules, Regulations and Randomness ($R^3$) Lab will be starting at WashU’s department...',
          description: "",
          section: "News",},{id: "news-leonardo-estrella-dzib-minerva-university-and-james-have-recently-submitted-an-article-on-gene-regulatory-evolution-in-the-presence-of-cell-to-cell-variability-find-the-pre-print-here",
          title: 'Leonardo Estrella Dzib (Minerva University) and James have recently submitted an article on...',
          description: "",
          section: "News",},{id: "news-james-article-do-distinct-subpopulations-signify-modes-of-behaviour-in-a-noisy-single-cell-is-out-now-at-proceedings-of-the-royal-society-b-find-the-article-here",
          title: 'James’ article Do distinct subpopulations signify modes of behaviour in a noisy single...',
          description: "",
          section: "News",},{id: "news-james-gave-a-talk-at-washu-s-symposium-on-advances-in-digital-innovation-across-arts-amp-amp-science-and-beyond-on-the-topic-the-science-of-regulation",
          title: 'James gave a talk at WashU’s Symposium on Advances in Digital Innovation Across...',
          description: "",
          section: "News",},{id: "projects-the-evolution-of-regulatory-systems",
          title: 'the evolution of regulatory systems',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-stochastic-regulatory-systems",
          title: 'stochastic regulatory systems',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-diversity-in-complex-systems",
          title: 'diversity in complex systems',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%6D%65%73%68%6F%6C%65%68%6F%75%73%65%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/James-Holehouse-2/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=mNYEw90AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
