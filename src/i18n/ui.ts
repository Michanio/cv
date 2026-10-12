export const languages = ['en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    languageName: 'English',
    dateLocale: 'en-GB',
    ogLocale: 'en_GB',
    profile: 'Profile',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    languages: 'Languages',
    interests: 'Interests',
    present: 'present',
    stack: 'Tech stack',
    print: 'Print',
    darkTheme: 'Dark theme',
    lightTheme: 'Light theme',
  },
} satisfies Record<Lang, Record<string, string>>;

// English lives at the site root, every other language under its own folder.
export const pathFor = (lang: Lang) => {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return lang === defaultLang ? base : `${base}${lang}/`;
};
