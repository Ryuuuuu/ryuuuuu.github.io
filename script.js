const portfolio = {
  heroTags: ['Pwnable', 'Security Automation', 'Web / Game Pentest', 'Reverse Engineering', 'DevSecOps'],
  stats: [
    { value: '7+', label: 'CVE / 취약점 리포트' },
    { value: '2017~', label: '보안 실무·연구 경험' },
    { value: '3+', label: '핵심 영역 · 리버싱/게임/웹' },
  ],
  skills: [
    {
      title: 'Security Domains',
      subtitle: '핵심 역량',
      description: '실무에서 반복적으로 다뤄온 보안 분야입니다.',
      items: ['Web Hacking', 'Game Hacking', 'Mobile Hacking', 'Reverse Engineering', 'System Hacking', 'Security Automation', 'IoT Hacking', 'DevSecOps', 'Attack Surface Management'],
    },
    {
      title: 'Engineering Stack',
      subtitle: '구현 경험',
      description: '자동화 및 도구 개발에 주로 사용한 언어와 프레임워크입니다.',
      items: ['Python', 'Django', 'Flask', 'JavaScript', 'Vue.js', 'Electron', 'ELK', 'C / C++', 'PHP', 'Shell Script', 'Node.js'],
    },
  ],
  career: [
    {
      date: '2023.01 ~ 현재',
      company: 'Smilegate Holdings',
      role: '주임',
      badge: '재직 중',
      summary:
        '사내외 서비스 모의해킹, 인프라 보안 진단 자동화, DevSecOps 구현 참여, 게임 서비스 보안 점검을 수행했습니다.',
      points: ['LostArk, Epic Seven, Lord nine, Outerplane 등 게임 서비스 보안 점검', '사내 인프라 보안 진단 자동화', '게임 보안 솔루션 운영 및 개선'],
    },
    {
      date: '2022.09 ~ 2022.11',
      company: 'Smilegate Holdings',
      role: '인턴',
      badge: '3개월',
      summary: '게임 엔진별 취약점 점검 방안을 조사하고 리버싱/모바일 분석 기반의 검토를 진행했습니다.',
      points: ['게임 엔진 취약점 점검 방법론 검토', '모바일·리버싱 기반 분석 지원'],
    },
    {
      date: '2018.07 ~ 2018.08',
      company: '한국정보기술연구원',
      role: '화이트해커리그 보안 강사',
      badge: '2개월',
      summary: '사이버 가디언즈 프로그램에서 학생 대상 보안 강의를 진행했습니다.',
      points: ['C 언어 기초', '리눅스 기초', '시스템 해킹 기초 강의'],
    },
  ],
  experience: [
    {
      date: '2022.03 ~ 2022.09',
      company: 'NCSOFT (외주 프로젝트)',
      role: '산학협력 연구원',
      badge: '7개월',
      summary:
        '외부자 관점에서 NCSOFT의 웹·모바일·게임 자산에 대한 취약점 점검과 백엔드 개발 프로젝트를 병행했습니다.',
      points: ['웹·모바일·게임 대상 취약점 점검', 'Django / MySQL 기반 보안 솔루션 백엔드 개발', 'API·소켓·DB 설계 경험'],
    },
    {
      date: '2018.03 ~ 2018.12',
      company: 'POSCO ICT (외주 프로젝트)',
      role: '산학협력 연구원',
      badge: '9개월',
      summary: '포스코 그룹사 대상 웹/모바일 어플리케이션 취약점 진단과 대응 방안 정리를 수행했습니다.',
      points: ['사내외 서비스 취약점 진단', '결과 보고 및 대응 방안 공유'],
    },
    {
      date: '2017.04 ~ 2023.03',
      company: '가톨릭대학교 침해사고대응팀 (CAT-CERT / CAT-Security)',
      role: '팀원 / 2022년 부팀장',
      badge: '6년',
      summary: '교내외 웹 취약점 진단, 침해사고 대응, 50건 이상의 취약점 제보를 진행했습니다.',
      points: ['학내망 침해사고 대응', '다수 취약점 제보', '보안 동아리/팀 활동 기반의 실전 경험 축적'],
    },
  ],
  projects: [
    {
      period: '2025.01 ~',
      title: '소켓 기반 게임 모의해킹 도구 제작',
      organization: 'Smilegate Holdings',
      description:
        '게임 소켓 통신을 중간에서 관찰·변조할 수 있는 프록시형 도구를 구현해 반복 점검 효율을 높였습니다.',
      points: ['Connect 후킹 기반 프록시 구현', 'Frida + Python + Electron 활용', 'Interceptor / Repeater / Intruder / Match & Replace 기능 구성'],
      tags: ['Game Hacking', 'Frida', 'Python', 'Electron'],
    },
    {
      period: '2024.01 ~ 2024.09',
      title: '웹 취약점 점검 자동화 도구 개발',
      organization: 'Smilegate Holdings',
      description:
        '로그인부터 페이지 수집, 자동 스캔까지 이어지는 웹 진단 자동화 솔루션을 개발했습니다.',
      points: ['메인 도메인·로그인 페이지 입력 기반 자동 점검', 'xnLinkFinder로 링크 수집', 'ZAP 기반 자동 로그인 및 스캔'],
      tags: ['Web Security', 'Automation', 'ZAP'],
    },
    {
      period: '2024.03 ~ 2024.11',
      title: 'DevSecOps 구현 참여',
      organization: 'Smilegate Holdings',
      description:
        '보안 진단 결과를 개발 프로세스 안에서 더 잘 소비할 수 있도록 GitLab 파이프라인 표현 방식을 개선했습니다.',
      points: ['DevSecOps 팀 겸직 참여', 'GitLab 파이프라인 결과 표현 방식 구현'],
      tags: ['DevSecOps', 'GitLab', 'Pipeline'],
    },
    {
      period: '2023.01 ~ 2023.09',
      title: '오픈소스 기반 취약점 점검 자동화 솔루션 개발',
      organization: 'Smilegate Holdings',
      description:
        '대역 기반 자산 식별부터 취약점 점검까지 자동으로 이어지는 스캔 코어를 구현했습니다.',
      points: ['Nmap 기반 자산 식별', 'Metasploit / Nuclei 활용 자동 점검', '스캔 코어 및 백엔드 구현'],
      tags: ['Automation', 'Nmap', 'Metasploit', 'Nuclei'],
    },
    {
      period: '2021.08 ~ 2021.12',
      title: '드론 취약성 연구 프로젝트',
      organization: 'KITRI BoB',
      description:
        'PX4 Autopilot과 MAVLink를 대상으로 취약점 분석과 전용 퍼저 개발을 진행하고 논문·가이드라인까지 확장했습니다.',
      points: ['오픈소스 드론 프로젝트 PX4 분석', 'MAVLink 구조 전용 fuzzer 개발', '취약점 제보 및 직접 패치로 오픈소스 기여'],
      tags: ['Drone Security', 'Fuzzing', 'PX4', 'Research'],
    },
    {
      period: '2022.03 ~ 2022.06',
      title: '홈 IoT 스마트 리모콘 연동 웹사이트 개발',
      organization: '가톨릭대학교',
      description:
        'IoT 장치와 연결되는 API 서버 및 웹 UI를 구현한 캡스톤 성격의 프로젝트입니다.',
      points: ['Django 기반 백엔드 개발', 'Arduino 요청 처리 API 서버 구현', '프론트엔드 UI 구현'],
      tags: ['IoT', 'Django', 'Web'],
    },
  ],
  reports: [
    {
      title: 'CVE-2021-46896',
      description: 'PX4-Autopilot의 msgid 332 handler 처리 과정에서 발생하는 Buffer Overflow 취약점 보고',
    },
    { title: 'CVE-2021-44107', description: '공개 보고 이력' },
    { title: 'CVE-2021-44996', description: '공개 보고 이력' },
    { title: 'CVE-2021-44999', description: '공개 보고 이력' },
    { title: 'CVE-2021-45000', description: '공개 보고 이력' },
    { title: 'CVE-2021-45001', description: '공개 보고 이력' },
    { title: 'CVE-2021-45002', description: '공개 보고 이력' },
  ],
  ctf: [
    { title: '2025 AI 해킹방어대회', meta: '형의 의지 · 14th' },
    { title: '2022 Codegate 본선', meta: 'CAT-Security · 6th' },
    { title: "2021 SSTF Hacker's Playground", meta: 'CAT-Security · 9th' },
    { title: '2018 SCTF Finals', meta: 'Ryuuu' },
    { title: '2018 Codegate Finals', meta: 'CAT-Security · 7th' },
  ],
  awards: [
    { title: '2022 HACKTHEON SEJONG 사이버보안 경진대회', meta: '과학기술정책연구원장상 (8위상)' },
    { title: '가톨릭대학교 캡스톤 경진대회', meta: '장려상' },
    { title: '2017 KITRI 사이버가디언즈 화이트해커리그', meta: '팀워크상 (4위상)' },
    { title: '가톨릭대학교 프로그래밍 대회', meta: '동상 (3위상)' },
  ],
  background: [
    { title: '한국정보보호학회 동계학술대회', meta: '논문 「PX4 Autopilot의 MAVLink 모듈에 대한 취약점 분석」 공동저자' },
    { title: '가톨릭대학교 졸업', meta: '컴퓨터공학 전공' },
    { title: 'KITRI BEST OF THE BEST', meta: '10기 취약점분석 트랙 수료' },
    { title: '양천고등학교 졸업', meta: '2014.03 ~ 2017.02' },
  ],
  presentations: [
    { title: '2025 Smilegate x Nexon x NC Soft 게임보안 세미나', meta: '네트워크 기반 게임 보안 검수 도구 개발' },
  ],
};

const $ = (selector) => document.querySelector(selector);
const create = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
};

function renderHero() {
  const tagList = $('#hero-tags');
  portfolio.heroTags.forEach((tag) => {
    const item = create('li', '', tag);
    tagList.appendChild(item);
  });

  const statGrid = $('#hero-stats');
  portfolio.stats.forEach((stat) => {
    const wrapper = create('div', 'stat-item');
    const strong = create('strong', '', stat.value);
    const span = create('span', '', stat.label);
    wrapper.append(strong, span);
    statGrid.appendChild(wrapper);
  });
}

function renderSkills() {
  const root = $('#skills-grid');
  portfolio.skills.forEach((skill) => {
    const card = create('article', 'skill-card reveal');
    const top = create('div', 'skill-top');
    const titleWrap = create('div');
    titleWrap.append(create('h3', '', skill.title), create('p', '', skill.description));
    top.append(titleWrap, create('span', '', skill.subtitle));

    const list = create('ul', 'skill-list');
    skill.items.forEach((item) => list.appendChild(create('li', '', item)));
    card.append(top, list);
    root.appendChild(card);
  });

}

function renderTimeline(selector, items) {
  const root = $(selector);
  items.forEach((item) => {
    const wrapper = create('article', 'timeline-item reveal');
    const left = create('div');
    left.append(create('div', 'timeline-date', item.date), create('div', 'timeline-badge', item.badge));

    const right = create('div');
    right.append(create('div', 'timeline-company', item.company), create('div', 'timeline-role', item.role), create('p', '', item.summary));

    const list = create('ul', 'meta-list');
    item.points.forEach((point) => list.appendChild(create('li', '', point)));
    right.appendChild(list);

    wrapper.append(left, right);
    root.appendChild(wrapper);
  });
}

function renderExperience() {
  renderTimeline('#career-timeline', portfolio.career);
  renderTimeline('#experience-timeline', portfolio.experience);
}

function renderProjects() {
  const root = $('#project-grid');
  portfolio.projects.forEach((project) => {
    const card = create('article', 'project-card reveal');
    card.tabIndex = 0;

    const top = create('div', 'project-top');
    const textWrap = create('div');
    textWrap.append(create('h3', '', project.title), create('p', '', project.organization));
    top.append(textWrap, create('span', '', project.period));

    const desc = create('p', '', project.description);
    const tags = create('div', 'project-tags');
    project.tags.forEach((tag) => tags.appendChild(create('span', '', tag)));

    card.append(top, desc, tags);
    root.appendChild(card);
  });
}

function renderCredentials() {
  const panels = [
    { selector: '#report-list', data: portfolio.reports },
    { selector: '#award-list', data: portfolio.awards },
    { selector: '#background-list', data: portfolio.background },
    { selector: '#ctf-list', data: portfolio.ctf },
    { selector: '#presentation-list', data: portfolio.presentations },
  ];

  panels.forEach(({ selector, data }) => {
    const root = $(selector);
    data.forEach((item) => {
      const panelItem = create('div', 'panel-item');
      panelItem.append(create('h4', '', item.title), create('p', '', item.description || item.meta));
      root.appendChild(panelItem);
    });
  });
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function initScrollProgress() {
  const progress = $('#scroll-progress');
  const update = () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = height > 0 ? (scrollTop / height) * 100 : 0;
    progress.style.width = `${ratio}%`;
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
}

function initActiveNav() {
  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.site-nav a')];

  const update = () => {
    const offset = window.scrollY + 120;
    let current = sections[0]?.id;

    sections.forEach((section) => {
      if (offset >= section.offsetTop) current = section.id;
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
}

function initPointerGlow() {
  const glow = document.querySelector('.page-glow');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !glow) return;

  window.addEventListener(
    'pointermove',
    (event) => {
      const x = event.clientX - glow.offsetWidth / 2;
      const y = event.clientY - glow.offsetHeight / 2;
      glow.style.transform = `translate(${x}px, ${y}px)`;
    },
    { passive: true }
  );
}

function initProjectTilt() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;

  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 7;
      const rotateX = (0.5 - (y / rect.height)) * 7;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    const reset = () => {
      card.style.transform = '';
    };

    card.addEventListener('pointerleave', reset);
    card.addEventListener('blur', reset);
  });
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', targetId);
    });
  });
}

function initYear() {
  $('#current-year').textContent = String(new Date().getFullYear());
}


function initInteractivePolish() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cards = document.querySelectorAll('.hero-copy, .hero-card, .skill-card, .project-card, .credential-panel, .timeline-item, .contact-card');

  cards.forEach((card) => {
    card.classList.add('interactive-sheen');
    if (reduced) return;

    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', `${x}%`);
      card.style.setProperty('--my', `${y}%`);
    });
  });
}

renderHero();
renderSkills();
renderExperience();
renderProjects();
renderCredentials();
initReveal();
initScrollProgress();
initActiveNav();
initPointerGlow();
initProjectTilt();
initSmoothAnchors();
initYear();
initInteractivePolish();
