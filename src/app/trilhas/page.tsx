'use client';

import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, Clock, Flame, BookOpen, ArrowRight, X } from 'lucide-react';

interface Topico {
  id: string;
  titulo: string;
  descricao: string;
  tópicos: string[];
  recursos?: string[];
  nível: 'básico' | 'intermediário' | 'avançado';
  dificuldade: number;
  prazo: string;
}

interface Trilha {
  id: string;
  nome: string;
  descrição: string;
  tópicos: Topico[];
  progresso?: number;
}

const trilhas: Trilha[] = [
  {
    id: 'internet-basico',
    nome: 'Internet & Fundamentos',
    descrição: 'Entenda como a web funciona',
    progresso: 0,
    tópicos: [
      {
        id: 'how-internet-works',
        titulo: 'Como a Internet Funciona',
        descricao: 'Conceitos fundamentais da web',
        nível: 'básico',
        dificuldade: 1,
        prazo: '1-2 semanas',
        tópicos: [
          'O que é Internet?',
          'Como funcionam os Browsers',
          'Protocolo HTTP/HTTPS',
          'DNS e Domain Names',
          'IP Addresses e Ports',
          'Request/Response Cycle',
          'Web Servers',
          'Hosting e Deployment',
        ],
        recursos: ['MDN: How the Web Works', 'HTTP/2 Explained', 'DNS Explained'],
      },
      {
        id: 'browsers-apis',
        titulo: 'APIs do Navegador',
        descricao: 'Ferramentas nativas do browser',
        nível: 'intermediário',
        dificuldade: 2,
        prazo: '2-3 semanas',
        tópicos: [
          'Window Object',
          'Document Object Model (DOM)',
          'Fetch API',
          'Local Storage & Session Storage',
          'Web Storage API',
          'Web Workers',
          'Service Workers (PWA)',
          'Geolocation API',
          'Canvas API',
          'WebSockets',
        ],
        recursos: ['MDN Web APIs', 'Web APIs Reference', 'Service Workers Guide'],
      },
    ],
  },

  {
    id: 'html-css-basico',
    nome: 'HTML & CSS Fundamentals',
    descrição: 'Estrutura e estilo web profissional',
    progresso: 0,
    tópicos: [
      {
        id: 'html-semantico',
        titulo: 'HTML Semântico',
        descricao: 'HTML estruturado corretamente',
        nível: 'básico',
        dificuldade: 1,
        prazo: '2-3 semanas',
        tópicos: [
          'Estrutura básica HTML5',
          'Tags semânticas (header, nav, main, article, section, footer)',
          'Atributos importantes (data-*, aria-*)',
          'SEO Basics (meta tags, structured data)',
          'Accessibility (a11y) fundamentals',
          'Formulários avançados',
          'Input types e validação HTML',
          'Microdata e Schema.org',
        ],
        recursos: ['MDN HTML Guide', 'HTML5 Living Standard', 'WebAIM Accessibility'],
      },
      {
        id: 'css-layout',
        titulo: 'CSS Layout & Positioning',
        descricao: 'Domine layouts modernos',
        nível: 'intermediário',
        dificuldade: 3,
        prazo: '4-5 semanas',
        tópicos: [
          'Box Model (margin, padding, border)',
          'Seletores CSS avançados',
          'Specificity e Cascade',
          'Positioning (static, relative, absolute, fixed, sticky)',
          'Flexbox (display: flex)',
          'CSS Grid (display: grid)',
          'Responsive Design (Mobile First)',
          'Media Queries',
          'Transforms e Transitions',
          'CSS Animations',
          'Z-index e Stacking Context',
        ],
        recursos: ['CSS Tricks', 'MDN CSS Guide', 'A Complete Guide to Flexbox'],
      },
      {
        id: 'css-avancado',
        titulo: 'CSS Avançado',
        descricao: 'Técnicas profissionais de estilo',
        nível: 'avançado',
        dificuldade: 3,
        prazo: '3-4 semanas',
        tópicos: [
          'CSS Preprocessors (Sass, PostCSS)',
          'CSS Custom Properties (CSS Variables)',
          'BEM Methodology (CSS Architecture)',
          'OOCSS e SMACSS',
          'CSS Performance Optimization',
          'Print Styles',
          'Gradients e Shadows avançados',
          'Clipping e Masking',
          'SVG Styling',
          'Mobile-first Responsive Design',
          'Performance: Critical CSS, Code Splitting',
        ],
        recursos: ['Sass Documentation', 'CSS Custom Properties', 'BEM Methodology'],
      },
    ],
  },

  {
    id: 'javascript-core',
    nome: 'JavaScript Core',
    descrição: 'Domine a linguagem completamente',
    progresso: 0,
    tópicos: [
      {
        id: 'js-fundamentos',
        titulo: 'Fundamentos do JavaScript',
        descricao: 'Conceitos essenciais da linguagem',
        nível: 'básico',
        dificuldade: 2,
        prazo: '3-4 semanas',
        tópicos: [
          'Variáveis (var, let, const)',
          'Tipos de dados (primitivos e objetos)',
          'Type Coercion e Type Casting',
          'Operadores (aritméticos, lógicos, comparação)',
          'Control Flow (if/else, switch)',
          'Loops (for, while, do-while, for...of, forEach)',
          'Funções (declaração, expressão, arrow)',
          'Escopo e Hoisting',
          'Closures',
          'Higher-order Functions',
          'Array Methods (map, filter, reduce, find, etc)',
        ],
        recursos: ['JavaScript.info', 'You Dont Know JS', 'MDN JavaScript Guide'],
      },
      {
        id: 'js-avancado',
        titulo: 'JavaScript Avançado',
        descricao: 'Conceitos profissionais de JS',
        nível: 'avançado',
        dificuldade: 4,
        prazo: '5-6 semanas',
        tópicos: [
          'Prototypes e Inheritance',
          'Object-Oriented JavaScript (Classes)',
          'Functional Programming Concepts',
          'Promises e Async/Await',
          'Event Loop e Call Stack',
          'Callbacks vs Promises vs Async',
          'Error Handling (try/catch)',
          'Regular Expressions',
          'Destructuring (Arrays e Objects)',
          'Spread Operator e Rest Parameters',
          'Template Literals',
          'Modules (import/export)',
          'Generators e Iterators',
          'Proxy e Reflect',
          'WeakMap, WeakSet, Map, Set',
        ],
        recursos: ['JavaScript.info Advanced', 'Exploringjs.com', 'MDN Advanced Topics'],
      },
      {
        id: 'dom-events',
        titulo: 'DOM & Event Handling',
        descricao: 'Interaja com a página web',
        nível: 'intermediário',
        dificuldade: 2,
        prazo: '3-4 semanas',
        tópicos: [
          'DOM Traversal (querySelector, getElementById, etc)',
          'DOM Manipulation (createElement, appendChild, removeChild)',
          'Event Listeners (addEventListener, removeEventListener)',
          'Event Propagation (bubbling, capturing, delegation)',
          'Event Object e Properties',
          'Delegating Events',
          'Custom Events',
          'AJAX e Fetch API',
          'XMLHttpRequest',
          'Loading external scripts',
          'Performance: Event Delegation',
          'Form Validation',
          'Drag and Drop API',
        ],
        recursos: ['MDN DOM API', 'Event Handling Guide', 'AJAX Best Practices'],
      },
    ],
  },

  {
    id: 'version-control',
    nome: 'Version Control (Git)',
    descrição: 'Controle de versão profissional',
    progresso: 0,
    tópicos: [
      {
        id: 'git-basico',
        titulo: 'Git Fundamentos',
        descricao: 'Controle de versão essencial',
        nível: 'básico',
        dificuldade: 2,
        prazo: '2-3 semanas',
        tópicos: [
          'Instalação e Configuração',
          'Git Basics (init, add, commit, push, pull)',
          'Branches (criar, mudar, deletar)',
          'Merging e Merge Conflicts',
          'Rebasing',
          '.gitignore',
          'GitHub/GitLab setup',
          'SSH Keys',
          'Cloning repositórios',
          'Remote repositories',
          'Push, Pull, Fetch',
          'Stashing Changes',
        ],
        recursos: ['Git Documentation', 'Pro Git Book', 'GitHub Guides'],
      },
      {
        id: 'git-avancado',
        titulo: 'Git Workflow Profissional',
        descricao: 'Práticas de trabalho em equipe',
        nível: 'avançado',
        dificuldade: 2,
        prazo: '2-3 semanas',
        tópicos: [
          'Git Flow Workflow',
          'Pull Requests / Merge Requests',
          'Code Review Best Practices',
          'Squashing Commits',
          'Cherry-pick',
          'Tags e Versioning',
          'Git Hooks (husky)',
          'Conventional Commits',
          'Commit Message Best Practices',
          'Rewriting History (reset, revert)',
          'Bisecting (debug with git)',
        ],
        recursos: ['Atlassian Git Tutorials', 'GitHub Workflow', 'Git Tips & Tricks'],
      },
    ],
  },

  {
    id: 'frontend-frameworks',
    nome: 'Frontend Frameworks',
    descrição: 'Bibliotecas modernas e profissionais',
    progresso: 0,
    tópicos: [
      {
        id: 'react-core',
        titulo: 'React Fundamentos',
        descricao: 'Biblioteca mais usada do mercado',
        nível: 'intermediário',
        dificuldade: 3,
        prazo: '5-7 semanas',
        tópicos: [
          'Components (Functional Components)',
          'JSX e Rendering',
          'Props (passing data to components)',
          'State Management (useState Hook)',
          'Effects (useEffect Hook)',
          'Event Handling',
          'Conditional Rendering',
          'Lists e Keys',
          'Forms em React',
          'Hooks (useContext, useReducer, useCallback, useMemo)',
          'Custom Hooks',
          'Context API',
          'Performance Optimization (React.memo, useMemo)',
          'Error Boundaries',
          'Suspense',
          'Lazy Loading com React.lazy()',
        ],
        recursos: ['React Documentation', 'React Official Tutorial', 'Epic React Course'],
      },
      {
        id: 'nextjs-full',
        titulo: 'Next.js (Full Stack)',
        descricao: 'Framework React para produção',
        nível: 'avançado',
        dificuldade: 4,
        prazo: '5-6 semanas',
        tópicos: [
          'App Router vs Pages Router',
          'File-based Routing',
          'Server Components',
          'Client Components ("use client")',
          'API Routes (Backend)',
          'Dynamic Routes ([id])',
          'SSR (Server-Side Rendering)',
          'SSG (Static Site Generation)',
          'ISR (Incremental Static Regeneration)',
          'Image Optimization (<Image />)',
          'Font Optimization',
          'Script Optimization',
          'Data Fetching (getServerSideProps, etc)',
          'Deployment (Vercel)',
          'Middleware',
          'Authentication',
        ],
        recursos: ['Next.js Documentation', 'Next.js Tutorial', 'Vercel Guides'],
      },
      {
        id: 'state-management',
        titulo: 'State Management',
        descricao: 'Gerenciamento de estado global',
        nível: 'avançado',
        dificuldade: 3,
        prazo: '3-4 semanas',
        tópicos: [
          'Context API',
          'Redux (actions, reducers, store)',
          'Redux Thunk (async actions)',
          'Redux Toolkit',
          'Zustand (alternativa simples)',
          'Jotai (atomic state management)',
          'Recoil',
          'Signals (Solid, Preact)',
          'useReducer Hook',
          'Lifting State Up',
          'Props Drilling vs Context',
          'DevTools e Debugging',
        ],
        recursos: ['Redux Documentation', 'Zustand GitHub', 'Redux Thunk Guide'],
      },
    ],
  },

  {
    id: 'web-apis-security',
    nome: 'Web APIs & Security',
    descrição: 'Segurança e padrões profissionais',
    progresso: 0,
    tópicos: [
      {
        id: 'rest-graphql',
        titulo: 'REST & GraphQL APIs',
        descricao: 'Consumo e criação de APIs',
        nível: 'intermediário',
        dificuldade: 2,
        prazo: '3-4 semanas',
        tópicos: [
          'HTTP Methods (GET, POST, PUT, DELETE, PATCH)',
          'Status Codes (2xx, 3xx, 4xx, 5xx)',
          'Headers e Content-Type',
          'CORS (Cross-Origin Resource Sharing)',
          'Authentication (JWT, OAuth)',
          'Fetch API vs Axios',
          'Error Handling em APIs',
          'GraphQL Basics',
          'GraphQL Queries e Mutations',
          'Apollo Client',
          'REST vs GraphQL (trade-offs)',
          'API Best Practices',
        ],
        recursos: ['REST API Design', 'GraphQL Documentation', 'Apollo Client Docs'],
      },
      {
        id: 'web-security',
        titulo: 'Web Security',
        descricao: 'Proteja suas aplicações',
        nível: 'avançado',
        dificuldade: 4,
        prazo: '3-4 semanas',
        tópicos: [
          'XSS (Cross-Site Scripting)',
          'CSRF (Cross-Site Request Forgery)',
          'SQL Injection',
          'HTTPS e SSL/TLS',
          'Content Security Policy (CSP)',
          'Same-Origin Policy',
          'CORS Configuration',
          'Secure Cookies',
          'Password Security e Hashing',
          'JWT vs Sessions',
          'OAuth 2.0 e OpenID Connect',
          'Security Headers (X-Frame-Options, etc)',
          'Input Validation e Sanitization',
          'Common Vulnerabilities (OWASP Top 10)',
        ],
        recursos: ['OWASP Security', 'MDN Security', 'PortSwigger Web Security'],
      },
    ],
  },

  {
    id: 'tooling-performance',
    nome: 'Build Tools & Performance',
    descrição: 'Ferramentas e otimização',
    progresso: 0,
    tópicos: [
      {
        id: 'build-tools',
        titulo: 'Build Tools',
        descricao: 'Webpack, Vite, Parcel',
        nível: 'intermediário',
        dificuldade: 3,
        prazo: '3-4 semanas',
        tópicos: [
          'Webpack Basics (entry, output, loaders)',
          'Webpack Plugins',
          'Code Splitting e Lazy Loading',
          'Vite (fast build tool)',
          'Vite Configuration',
          'Hot Module Replacement (HMR)',
          'Asset Handling',
          'Environment Variables',
          'Tree Shaking',
          'Bundle Analysis',
          'Source Maps',
          'Development vs Production builds',
        ],
        recursos: ['Webpack Documentation', 'Vite Guide', 'Parcel Docs'],
      },
      {
        id: 'performance',
        titulo: 'Performance & Optimization',
        descricao: 'Sites rápidos e eficientes',
        nível: 'avançado',
        dificuldade: 3,
        prazo: '4-5 semanas',
        tópicos: [
          'Core Web Vitals (LCP, FID, CLS)',
          'Lighthouse Audits',
          'Image Optimization (WebP, AVIF)',
          'Lazy Loading (images, components)',
          'Code Splitting',
          'Minification e Compression',
          'Caching Strategies',
          'CDN Usage',
          'Server-side Rendering Benefits',
          'CSS-in-JS Performance',
          'Bundle Size Analysis',
          'Runtime Performance',
          'Memory Leaks Prevention',
          'Rendering Performance (jank, fps)',
        ],
        recursos: ['Web Vitals Guide', 'Lighthouse', 'Performance.now() API'],
      },
      {
        id: 'testing',
        titulo: 'Testing',
        descricao: 'Testes profissionais',
        nível: 'avançado',
        dificuldade: 3,
        prazo: '4-5 semanas',
        tópicos: [
          'Unit Testing (Jest)',
          'Testing React Components (React Testing Library)',
          'Integration Tests',
          'End-to-End Testing (Cypress, Playwright)',
          'Test Driven Development (TDD)',
          'Mocking e Stubbing',
          'Test Coverage',
          'Snapshot Testing',
          'Accessibility Testing',
          'Visual Regression Testing',
          'Performance Testing',
          'Load Testing',
        ],
        recursos: ['Jest Documentation', 'React Testing Library', 'Cypress Docs'],
      },
    ],
  },

  {
    id: 'deployment-devops',
    nome: 'Deployment & DevOps',
    descrição: 'Coloque seu projeto no ar',
    progresso: 0,
    tópicos: [
      {
        id: 'deployment',
        titulo: 'Deployment',
        descricao: 'Deploy em produção',
        nível: 'intermediário',
        dificuldade: 2,
        prazo: '2-3 semanas',
        tópicos: [
          'Static Hosting (Vercel, Netlify, GitHub Pages)',
          'Vercel Deployment',
          'Netlify Deployment',
          'Self-Hosted (VPS)',
          'Docker Basics',
          'Environment Variables',
          'Domain Configuration',
          'SSL Certificates',
          'DNS Setup',
          'Continuous Deployment (CD)',
          'Database Setup',
          'Monitoring e Logging',
          'Error Tracking (Sentry)',
        ],
        recursos: ['Vercel Docs', 'Netlify Guides', 'Docker Documentation'],
      },
      {
        id: 'ci-cd',
        titulo: 'CI/CD & DevOps',
        descricao: 'Automação profissional',
        nível: 'avançado',
        dificuldade: 3,
        prazo: '3-4 semanas',
        tópicos: [
          'GitHub Actions',
          'GitLab CI/CD',
          'Jenkins',
          'Automated Testing in CI',
          'Linting e Code Quality (ESLint, Prettier)',
          'Automated Deployments',
          'Environment Management',
          'Secrets Management',
          'Build Caching',
          'Artifact Management',
          'Monitoring em Produção',
          'Alerting e Notifications',
          'Log Aggregation',
        ],
        recursos: ['GitHub Actions Docs', 'GitLab CI Guide', 'CI/CD Best Practices'],
      },
    ],
  },
];


export default function TrilhasRoadmap() {
  const [trilhaSelecionada, setTrilhaSelecionada] = useState<string | null>(null);
  
  const [topicoSelecionado, setTopicoSelecionado] = useState<string | null>(null);

  const [modalAberto, setModalAberto] = useState(false);

  const obterTopicoDetalhado = (): Topico | null => {
    for (const trilha of trilhas) {
      const topico = trilha.tópicos.find((t) => t.id === topicoSelecionado);
      if (topico) return topico;
    }
    return null;
  };

  const topicoDetalhado = obterTopicoDetalhado();

  const trilhaAtual = trilhas.find((t) => t.id === trilhaSelecionada);

  return (
    <div className="min-h-screen bg-white">
      
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-olive-900 mb-6">Trilhas de Aprendizado</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {trilhas.map((trilha) => (
                    <button
                      key={trilha.id}
                      onClick={() => {
                        setTrilhaSelecionada(trilha.id);
                        setTopicoSelecionado(null);
                      }}
                      className={`group relative p-5 rounded-lg border-2 transition-all duration-300 text-left ${
                        trilhaSelecionada === trilha.id
                          ? 'bg-olive-100 border-olive-600 shadow-md'
                          : 'bg-white border-olive-200 hover:border-olive-400 hover:shadow-sm'
                      }`}
                    >
                      <h3 className="font-bold text-lg text-olive-900">{trilha.nome}</h3>
                      <p className="text-olive-600 text-sm mt-1">{trilha.descrição}</p>
                    </button>
                  ))}
                </div>
              </div>

              {trilhaSelecionada && trilhaAtual ? (
                <div>
                  <h2 className="text-2xl font-bold text-olive-900 mb-6">
                    Tópicos de {trilhaAtual.nome}
                  </h2>
                  <div className="space-y-3">
                    {trilhaAtual.tópicos.map((topico, idx) => (
                      <button
                        key={topico.id}
                        onClick={() => setTopicoSelecionado(topico.id)}
                        className={`w-full text-left p-5 rounded-lg border-2 transition-all duration-300 ${
                          topicoSelecionado === topico.id
                            ? 'bg-olive-100 border-olive-600'
                            : 'bg-white border-olive-200 hover:border-olive-400'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-olive-600 font-bold text-sm text-white">
                                {idx + 1}
                              </div>
                              <span className={`text-xs px-2 py-1 rounded font-semibold ${
                                topico.nível === 'básico'
                                  ? 'bg-green-100 text-green-700'
                                  : topico.nível === 'intermediário'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-orange-100 text-orange-700'
                              }`}>
                                {topico.nível.charAt(0).toUpperCase() + topico.nível.slice(1)}
                              </span>
                            </div>
                            <h3 className="font-bold text-lg text-olive-900">{topico.titulo}</h3>
                            <p className="text-olive-600 text-sm mt-1">{topico.descricao}</p>
                            <div className="flex gap-4 mt-3 text-sm text-olive-600">
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {topico.prazo}
                              </span>
                              <span className="flex items-center gap-1">
                                <Flame className="w-4 h-4" />
                                {topico.dificuldade}/5
                              </span>
                            </div>
                          </div>
                          <ChevronRight className="w-5 h-5 text-olive-400 mt-1 flex-shrink-0" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-olive-500">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold text-olive-700">Selecione uma trilha para começar</p>
                </div>
              )}
            </div>

            <div>
              {topicoDetalhado ? (
                <div className="bg-olive-50 rounded-lg border-2 border-olive-200 p-6 sticky top-6 max-h-[calc(100vh-80px)] overflow-y-auto">
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded font-semibold ${
                        topicoDetalhado.nível === 'básico'
                          ? 'bg-green-100 text-green-700'
                          : topicoDetalhado.nível === 'intermediário'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {topicoDetalhado.nível.toUpperCase()}
                      </span>
                      <span className="text-xs text-olive-600 font-semibold">
                        Dificuldade: {topicoDetalhado.dificuldade}/5
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-olive-900">{topicoDetalhado.titulo}</h3>
                    <p className="text-olive-600 text-sm mt-2">{topicoDetalhado.descricao}</p>
                  </div>

                  <div className="border-t border-olive-200 my-5" />

                  <div className="mb-5">
                    <h4 className="font-bold text-lg text-olive-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-olive-600" />
                      Você aprenderá
                    </h4>
                    <ul className="space-y-2">
                      {topicoDetalhado.tópicos.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-olive-700 text-sm">
                          <span className="text-olive-600 mt-1 flex-shrink-0">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-olive-200 my-5" />

                  {topicoDetalhado.recursos && topicoDetalhado.recursos.length > 0 && (
                    <div className="mb-5">
                      <h4 className="font-bold text-lg text-olive-900 mb-3">Recursos</h4>
                      <div className="space-y-2">
                        {topicoDetalhado.recursos.map((recurso, idx) => (
                          <button
                            key={idx}
                            className="w-full text-left px-3 py-2 rounded bg-white border border-olive-200 hover:border-olive-400 hover:bg-olive-50 transition-colors text-sm text-olive-700 hover:text-olive-900"
                          >
                             {recurso}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="border-t border-olive-200 my-5" />

                  <div className="bg-white border border-olive-200 rounded-lg p-4 mb-6 space-y-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-olive-600" />
                      <p className="text-sm text-olive-700">
                        <strong>Tempo:</strong> {topicoDetalhado.prazo}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-orange-600" />
                      <p className="text-sm text-olive-700">
                        <strong>Dificuldade:</strong> {topicoDetalhado.dificuldade}/5
                      </p>
                    </div>
                  </div>

                  <button className="w-full bg-olive-600 hover:bg-olive-700 text-white py-3 rounded-lg font-bold transition-colors duration-300 flex items-center justify-center gap-2 active:scale-95">
                    <ArrowRight className="w-5 h-5" />
                    Iniciar Aprendizado
                  </button>
                </div>
              ) : (
                <div className="bg-olive-50 border-2 border-olive-200 rounded-lg p-6 text-center text-olive-500 sticky top-6">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold text-olive-700">Selecione um tópico</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="px-4 py-6">
          
          <div className="mb-6">
            <h2 className="text-xl font-bold text-olive-900 mb-4">Trilhas</h2>
            <div className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4">
              {trilhas.map((trilha) => (
                <button
                  key={trilha.id}
                  onClick={() => {
                    setTrilhaSelecionada(trilha.id);
                    setTopicoSelecionado(null);
                  }}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all ${
                    trilhaSelecionada === trilha.id
                      ? 'bg-olive-600 text-white'
                      : 'bg-olive-100 text-olive-700 border border-olive-200'
                  }`}
                >
                  {trilha.nome}
                </button>
              ))}
            </div>
          </div>

          {trilhaSelecionada && trilhaAtual ? (
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-olive-900 mb-4">
                Tópicos
              </h2>
              {trilhaAtual.tópicos.map((topico, idx) => (
                <button
                  key={topico.id}
                  onClick={() => {
                    setTopicoSelecionado(topico.id);
                    setModalAberto(true);
                  }}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    topicoSelecionado === topico.id
                      ? 'bg-olive-100 border-olive-600'
                      : 'bg-white border-olive-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-olive-600 font-bold text-xs text-white flex-shrink-0">
                          {idx + 1}
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded font-semibold whitespace-nowrap ${
                          topico.nível === 'básico'
                            ? 'bg-green-100 text-green-700'
                            : topico.nível === 'intermediário'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {topico.nível.charAt(0).toUpperCase() + topico.nível.slice(1)}
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-olive-900 line-clamp-2">{topico.titulo}</h3>
                      <p className="text-olive-600 text-xs mt-1 line-clamp-1">{topico.descricao}</p>
                      <div className="flex gap-3 mt-2 text-xs text-olive-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {topico.prazo}
                        </span>
                        <span>
                          <Flame className="w-3 h-3 inline mr-1" />
                          {topico.dificuldade}/5
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-olive-400 flex-shrink-0 mt-1" />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-olive-500">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg font-semibold text-olive-700">Selecione uma trilha</p>
            </div>
          )}
        </div>
      </div>

      {modalAberto && topicoDetalhado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[90vh] overflow-y-auto">
            
            <div className="sticky top-0 bg-white border-b border-olive-200 p-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-olive-900">Detalhes</h2>
              <button
                onClick={() => setModalAberto(false)}
                className="p-2 hover:bg-olive-50 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-olive-600" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded font-semibold ${
                  topicoDetalhado.nível === 'básico'
                    ? 'bg-green-100 text-green-700'
                    : topicoDetalhado.nível === 'intermediário'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-orange-100 text-orange-700'
                }`}>
                  {topicoDetalhado.nível.toUpperCase()}
                </span>
                <span className="text-xs text-olive-600 font-semibold">
                  {topicoDetalhado.dificuldade}/5
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-olive-900">{topicoDetalhado.titulo}</h3>
                <p className="text-olive-600 text-sm mt-1">{topicoDetalhado.descricao}</p>
              </div>

              <div className="border-t border-olive-200" />

              <div>
                <h4 className="font-bold text-olive-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-olive-600" />
                  Você aprenderá
                </h4>
                <ul className="space-y-2">
                  {topicoDetalhado.tópicos.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-olive-700 text-sm">
                      <span className="text-olive-600 mt-0.5 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-olive-200" />

              {topicoDetalhado.recursos && topicoDetalhado.recursos.length > 0 && (
                <div>
                  <h4 className="font-bold text-olive-900 mb-3">Recursos</h4>
                  <div className="space-y-2">
                    {topicoDetalhado.recursos.map((recurso, idx) => (
                      <button
                        key={idx}
                        className="w-full text-left px-3 py-2 rounded bg-olive-50 border border-olive-200 text-sm text-olive-700"
                      >
                         {recurso}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-olive-200" />

              <div className="bg-olive-50 border border-olive-200 rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-olive-600" />
                  <p className="text-sm text-olive-700">
                    <strong>Tempo:</strong> {topicoDetalhado.prazo}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-600" />
                  <p className="text-sm text-olive-700">
                    <strong>Dificuldade:</strong> {topicoDetalhado.dificuldade}/5
                  </p>
                </div>
              </div>
              <div className="h-4" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}