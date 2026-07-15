import type { LocalizedText } from './types';

export type TeamRole = {
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
};

export const teamRoles: TeamRole[] = [
  {
    icon: 'Stethoscope',
    title: { en: 'Registered Nurses', ar: 'ممرضون مسجّلون' },
    description: {
      en: 'Delivering clinical care, medication management, and health monitoring in the comfort of your home.',
      ar: 'تقديم الرعاية السريرية، وإدارة الأدوية، والمتابعة الصحية في راحة منزلك.',
    },
  },
  {
    icon: 'Activity',
    title: { en: 'Physiotherapists', ar: 'أخصائيو العلاج الطبيعي' },
    description: {
      en: 'Helping patients recover mobility, strength, and independence through personalized therapy.',
      ar: 'مساعدة المرضى على استعادة الحركة والقوة والاستقلالية من خلال علاج طبيعي مخصص.',
    },
  },
  {
    icon: 'Apple',
    title: { en: 'Nutritionists and Dietitians', ar: 'اختصاصيو التغذية والحمية' },
    description: {
      en: 'Designing nutrition plans that support recovery, chronic disease management, and long-term wellness.',
      ar: 'تصميم خطط غذائية تدعم التعافي، وإدارة الأمراض المزمنة، والعافية على المدى الطويل.',
    },
  },
  {
    icon: 'Dumbbell',
    title: { en: 'Certified Personal Trainers', ar: 'مدربون شخصيون معتمدون' },
    description: {
      en: "Guiding safe, effective fitness programs tailored to each patient's goals and abilities.",
      ar: 'توجيه برامج لياقة بدنية آمنة وفعالة مصممة وفق أهداف وقدرات كل مريض.',
    },
  },
];
