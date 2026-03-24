import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        stack: "Stack",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        greeting: "Hello, I'm",
        name: "Islombek",
        role: "Full-Stack Developer",
        description:
          "Building robust web platforms with Laravel, React.js, and hardware integrations. Specializing in biometric attendance, VoIP, and IELTS simulation systems.",
        github: "GitHub",
        youtube: "YouTube",
        scroll: "Scroll down",
      },
      stack: {
        title: "Tech Stack",
        subtitle: "Technologies I work with",
        categories: {
          backend: "Backend",
          frontend: "Frontend",
          database: "Database",
          voip: "VoIP",
          hardware: "Hardware",
          devops: "DevOps",
        },
      },
      projects: {
        title: "Projects",
        subtitle: "Things I've built",
        visit: "Visit",
        stack: "Stack",
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Let's work together",
        github: "Check my GitHub",
        youtube: "Watch on YouTube",
      },
      projectData: {
        siriussoft: {
          name: "SiriusSoft.uz",
          description:
            "Corporate website for Sirius Innovation company. Showcases services, portfolio and team information.",
        },
        faith: {
          name: "Faith.uz",
          description:
            "Full automation platform for educational centers. Manages students, attendance, payments, and reporting.",
        },
        payday: {
          name: "Payday.uz",
          description:
            "Biometric face recognition-based attendance system integrated with Hikvision IP cameras for real-time tracking.",
        },
        mynine: {
          name: "Mynine.uz",
          description:
            "Real computer-based IELTS simulator with authentic exam interface, scoring, and performance analytics.",
        },
        multitest: {
          name: "Multitest.uz",
          description:
            "Computer-based multilevel Speaking test simulator with AI-driven evaluation and detailed feedback.",
        },
        schoolday: {
          name: "SchoolDay.uz",
          description:
            "Attendance management system for schools and kindergartens using Hikvision face recognition hardware.",
        },
        onecall: {
          name: "1Call.uz",
          description:
            "Full-featured call center application built with Asterisk VoIP integration for inbound/outbound call management.",
        },
      },
    },
  },
  uz: {
    translation: {
      nav: {
        home: "Bosh sahifa",
        stack: "Texnologiyalar",
        projects: "Loyihalar",
        contact: "Aloqa",
      },
      hero: {
        greeting: "Salom, men",
        name: "Islombek",
        role: "Full-Stack Dasturchi",
        description:
          "Laravel, React.js va apparat integratsiyalari yordamida kuchli veb-platformalar yarataman. Biometrik davomat, VoIP va IELTS simulyatsiya tizimlarini ishlab chiqishda ixtisoslashganman.",
        github: "GitHub",
        youtube: "YouTube",
        scroll: "Pastga aylantiring",
      },
      stack: {
        title: "Texnologiyalar",
        subtitle: "Men ishlaydigan texnologiyalar",
        categories: {
          backend: "Backend",
          frontend: "Frontend",
          database: "Ma'lumotlar bazasi",
          voip: "VoIP",
          hardware: "Apparat",
          devops: "DevOps",
        },
      },
      projects: {
        title: "Loyihalar",
        subtitle: "Men yaratgan loyihalar",
        visit: "Ko'rish",
        stack: "Texnologiyalar",
      },
      contact: {
        title: "Bog'lanish",
        subtitle: "Birgalikda ishlaylik",
        github: "GitHub sahifam",
        youtube: "YouTube kanalim",
      },
      projectData: {
        siriussoft: {
          name: "SiriusSoft.uz",
          description:
            "Sirius Innovation kompaniyasining korporativ sayti. Xizmatlar, portfolio va jamoa ma'lumotlarini taqdim etadi.",
        },
        faith: {
          name: "Faith.uz",
          description:
            "O'quv markazlari uchun to'liq avtomatlashtirish platformasi. O'quvchilar, davomat, to'lovlar va hisobotlarni boshqaradi.",
        },
        payday: {
          name: "Payday.uz",
          description:
            "Hikvision IP kameralari bilan integratsiya qilingan yuzni tanish texnologiyasiga asoslangan davomat tizimi.",
        },
        mynine: {
          name: "Mynine.uz",
          description:
            "Real imtihon interfeysi, baholash va tahlil imkoniyatlari bilan haqiqiy kompyuter asosidagi IELTS simulyatori.",
        },
        multitest: {
          name: "Multitest.uz",
          description:
            "Sun'iy intellekt bilan baholash va batafsil fikr-mulohaza imkoniyatiga ega ko'p bosqichli Speaking test simulyatori.",
        },
        schoolday: {
          name: "SchoolDay.uz",
          description:
            "Hikvision yuzni tanish uskunalaridan foydalangan holda maktab va bog'chalar uchun davomat tizimi.",
        },
        onecall: {
          name: "1Call.uz",
          description:
            "Kiruvchi/chiquvchi qo'ng'iroqlarni boshqarish uchun Asterisk VoIP integratsiyasi bilan yaratilgan call-markaz ilovasi.",
        },
      },
    },
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        stack: "Технологии",
        projects: "Проекты",
        contact: "Контакт",
      },
      hero: {
        greeting: "Привет, я",
        name: "Исломбек",
        role: "Full-Stack Разработчик",
        description:
          "Создаю надёжные веб-платформы на Laravel, React.js и с интеграцией оборудования. Специализируюсь на биометрическом учёте, VoIP и симуляторах IELTS.",
        github: "GitHub",
        youtube: "YouTube",
        scroll: "Прокрутить вниз",
      },
      stack: {
        title: "Технологии",
        subtitle: "Технологии, с которыми я работаю",
        categories: {
          backend: "Бэкенд",
          frontend: "Фронтенд",
          database: "Базы данных",
          voip: "VoIP",
          hardware: "Оборудование",
          devops: "DevOps",
        },
      },
      projects: {
        title: "Проекты",
        subtitle: "То, что я создал",
        visit: "Открыть",
        stack: "Технологии",
      },
      contact: {
        title: "Связаться",
        subtitle: "Давайте работать вместе",
        github: "Мой GitHub",
        youtube: "Мой YouTube",
      },
      projectData: {
        siriussoft: {
          name: "SiriusSoft.uz",
          description:
            "Корпоративный сайт компании Sirius Innovation. Демонстрирует услуги, портфолио и информацию о команде.",
        },
        faith: {
          name: "Faith.uz",
          description:
            "Платформа полной автоматизации для учебных центров. Управляет студентами, посещаемостью, платежами и отчётностью.",
        },
        payday: {
          name: "Payday.uz",
          description:
            "Система учёта посещаемости на основе распознавания лиц с интеграцией IP-камер Hikvision в реальном времени.",
        },
        mynine: {
          name: "Mynine.uz",
          description:
            "Настоящий компьютерный симулятор IELTS с аутентичным интерфейсом экзамена, оценкой и аналитикой.",
        },
        multitest: {
          name: "Multitest.uz",
          description:
            "Компьютерный симулятор многоуровневого Speaking теста с ИИ-оценкой и подробной обратной связью.",
        },
        schoolday: {
          name: "SchoolDay.uz",
          description:
            "Система учёта посещаемости для школ и детских садов с использованием оборудования Hikvision.",
        },
        onecall: {
          name: "1Call.uz",
          description:
            "Полнофункциональное call-центр приложение с интеграцией Asterisk VoIP для управления входящими/исходящими звонками.",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
