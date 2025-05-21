// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "The most up-to-date list can be found on my Google Scholar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-mitigating-heterogeneous-token-overfitting-in-llm-knowledge-editing-was-accepted-at-icml-25",
          title: 'Our paper “Mitigating Heterogeneous Token Overfitting in LLM Knowledge Editing” was accepted at...',
          description: "",
          section: "News",},{id: "news-our-paper-roserag-robust-retrieval-augmented-generation-with-small-scale-llms-via-margin-aware-preference-optimization-was-accepted-at-acl-25-findings",
          title: 'Our paper “RoseRAG: Robust Retrieval-augmented Generation with Small-scale LLMs via Margin-aware Preference Optimization”...',
          description: "",
          section: "News",},{id: "news-recruiting-phds-and-interns-i-am-seeking-students-for-ph-d-in-26-spring-fall-or-research-intern-roles-please-email-me-with-your-cv-and-brief-descriptions-of-your-preferred-research-topics-kindly-mark-the-subject-with-phd-research-intern-application-note-unfortunately-due-to-the-large-amount-of-emails-i-won-t-be-able-to-reply-to-them-all-but-i-encourage-you-to-submit-your-application",
          title: 'Recruiting PhDs and Interns: I am seeking students for Ph.D. in 26 Spring/Fall...',
          description: "",
          section: "News",},{
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
