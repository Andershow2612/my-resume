import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type Language = 'pt' | 'en';

export const translations = {
  // Navbar
  navAbout: { pt: 'Sobre', en: 'About' },
  navExperience: { pt: 'Experiência', en: 'Experience' },
  navEducation: { pt: 'Formação', en: 'Education' },
  navSkills: { pt: 'Skills', en: 'Skills' },
  navProjects: { pt: 'Projetos', en: 'Projects' },
  navContact: { pt: 'Contato', en: 'Contact' },

  // Hero
  heroGreeting: { pt: 'Olá, eu sou', en: 'Hello, I am' },
  heroRole: { pt: 'Desenvolvedor Backend JR | QA | GoLang', en: 'Junior Backend Developer | QA | GoLang' },
  heroDesc: { pt: 'Apaixonado por tecnologia, com experiência em qualidade de software e desenvolvimento backend focado em arquiteturas limpas e escaláveis.', en: 'Passionate about technology, with experience in software quality and backend development focused on clean and scalable architectures.' },
  heroContactBtn: { pt: 'Entrar em contato', en: 'Get in touch' },
  heroExpBtn: { pt: 'Ver experiências', en: 'View experiences' },

  // About
  aboutTitle: { pt: 'Sobre Mim', en: 'About Me' },
  aboutP1_1: { pt: 'Sou um profissional focado em tecnologia com base sólida em backend e qualidade de software. Tenho forte apreço por código limpo, estruturado e com boas práticas de engenharia, como a ', en: 'I am a technology-focused professional with a solid background in backend and software quality. I have a strong appreciation for clean, structured code and good engineering practices, such as ' },
  aboutP1_2: { pt: 'Clean Architecture', en: 'Clean Architecture' },
  aboutP2_1: { pt: 'Minha experiência com QA me proporcionou uma visão crítica sobre como o software deve se comportar em produção, me ajudando a desenvolver soluções backend muito mais resilientes utilizando ', en: 'My QA experience has given me a critical view of how software should behave in production, helping me develop much more resilient backend solutions using ' },
  aboutP2_2: { pt: 'GoLang', en: 'GoLang' },
  aboutCard1Title: { pt: 'Backend', en: 'Backend' },
  aboutCard1Desc: { pt: 'Desenvolvimento de APIs RESTful utilizando Go (Golang) com Clean Architecture e padrões modernos.', en: 'Development of RESTful APIs using Go (Golang) with Clean Architecture and modern patterns.' },
  aboutCard2Title: { pt: 'Quality Assurance', en: 'Quality Assurance' },
  aboutCard2Desc: { pt: 'Automação de testes e validação de fluxos complexos para garantir a entrega de software sem bugs.', en: 'Test automation and validation of complex flows to ensure bug-free software delivery.' },
  aboutCard3Title: { pt: 'Data & Infra', en: 'Data & Infra' },
  aboutCard3Desc: { pt: 'Experiência intermediária com bancos de dados relacionais e compreensão de fluxos de deploy.', en: 'Intermediate experience with relational databases and understanding of deployment flows.' },

  // Experience
  expTitle: { pt: 'Experiência Profissional', en: 'Professional Experience' },
  exp1Role: { pt: 'QA Jr', en: 'QA Jr' },
  exp1Period: { pt: 'Ano 2024 - Presente', en: 'Year 2024 - Present' },
  exp1Desc: { pt: 'Atuação como analista de qualidade, realizando validações de novas funcionalidades em portais B2B e B2C, aplicativos mobile e APIs. Experiência com automação de testes utilizando Cypress, além de manutenção e melhorias em fluxos automatizados.', en: 'Acting as a quality analyst, validating new features in B2B and B2C portals, mobile apps, and APIs. Experience with test automation using Cypress, as well as maintenance and improvements in automated flows.' },
  exp2Role: { pt: 'Suporte Técnico', en: 'Technical Support' },
  exp2Period: { pt: 'Ano 2023 - Ano 2024', en: 'Year 2023 - Year 2024' },
  exp2Desc: { pt: 'Responsável por manutenção de hardware e suporte técnico geral dentro da empresa. Atendimento a usuários e resolução de problemas técnicos do dia a dia.', en: 'Responsible for hardware maintenance and general technical support within the company. Assisting users and resolving day-to-day technical issues.' },

  // Education
  eduTitle: { pt: 'Formação', en: 'Education' },
  edu1Title: { pt: 'Análise e Desenvolvimento de Software', en: 'Systems Analysis and Development' },
  edu1Desc: { pt: 'Formação com foco em engenharia de software, desenvolvimento de sistemas web e boas práticas de programação.', en: 'Education focused on software engineering, web systems development, and good programming practices.' },
  edu2Title: { pt: 'Inglês Fluente', en: 'Fluent English' },
  edu2Sub: { pt: 'Nível C1', en: 'C1 Level' },
  edu2Desc: { pt: 'Capacidade de comunicação fluida, leitura técnica avançada e facilidade para atuar em times globais.', en: 'Fluent communication skills, advanced technical reading, and ease of working in global teams.' },

  // Skills
  skillsTitle: { pt: 'Skills / Conhecimentos', en: 'Skills / Knowledge' },
  skillsCat1: { pt: 'Backend & Arquitetura', en: 'Backend & Architecture' },
  skill1_1: { pt: 'Arquitetura em camadas (Model, Service, Controller)', en: 'Layered Architecture (Model, Service, Controller)' },
  skillsCat2: { pt: 'Frontend & QA', en: 'Frontend & QA' },
  skill2_1: { pt: 'Automação de Testes', en: 'Test Automation' },
  skillsCat3: { pt: 'Outros Conhecimentos', en: 'Other Knowledge' },
  skill3_1: { pt: 'Banco de dados relacional (Intermediário)', en: 'Relational Databases (Intermediate)' },

  // Projects
  projTitleSection: { pt: 'Projetos em Destaque', en: 'Featured Projects' },
  proj1Title: { pt: 'Projeto em Destaque', en: 'Featured Project' },
  proj1Desc: { pt: 'Um sistema completo desenvolvido para promover cursos de idiomas. Conta com uma arquitetura escalável no backend utilizando GoLang com gin e gorm e uma interface moderna para os usuários em react. A galeria abaixo ilustra as principais telas e o fluxo da aplicação.', en: 'A complete system developed to promote language courses. It features a scalable backend architecture using GoLang with gin and gorm, and a modern user interface in React. The gallery below illustrates the main screens and the application flow.' },

  // Footer
  footerDesc: { pt: 'Desenvolvedor Backend JR focando em construir soluções escaláveis e de alta qualidade.', en: 'Junior Backend Developer focusing on building high-quality, scalable solutions.' },
} as const;

export type TranslationKey = keyof typeof translations;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      return savedLang || 'pt';
    }
    return 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'pt' ? 'en' : 'pt'));
  };

  const t = (key: TranslationKey) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
