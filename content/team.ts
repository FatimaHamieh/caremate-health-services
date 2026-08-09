import type { LocalizedText } from './types';

export type TeamRole = {
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
};

export const teamRoles: TeamRole[] = [
  {
    icon: 'Stethoscope',
    title: { en: 'Registered Nurses', ar: 'ممرضون مسجّلون', fr: 'Infirmiers diplômés' },
    description: {
      en: 'Delivering clinical care, medication management, and health monitoring in the comfort of your home.',
      ar: 'تقديم الرعاية السريرية، وإدارة الأدوية، والمتابعة الصحية في راحة منزلك.',
      fr: 'Prodiguer des soins cliniques, gérer les médicaments et assurer un suivi de santé dans le confort de votre domicile.',
    },
  },
  {
    icon: 'Activity',
    title: { en: 'Physiotherapists', ar: 'أخصائيو العلاج الطبيعي', fr: 'Physiothérapeutes' },
    description: {
      en: 'Helping patients recover mobility, strength, and independence through personalized therapy.',
      ar: 'مساعدة المرضى على استعادة الحركة والقوة والاستقلالية من خلال علاج طبيعي مخصص.',
      fr: 'Aider les patients à retrouver mobilité, force et autonomie grâce à une thérapie personnalisée.',
    },
  },
  {
    icon: 'Dumbbell',
    title: { en: 'Certified Personal Trainers', ar: 'مدربون شخصيون معتمدون', fr: 'Entraîneurs personnels certifiés' },
    description: {
      en: "Guiding safe, effective fitness programs tailored to each patient's goals and abilities.",
      ar: 'توجيه برامج لياقة بدنية آمنة وفعالة مصممة وفق أهداف وقدرات كل مريض.',
      fr: "Encadrer des programmes de remise en forme sûrs et efficaces, adaptés aux objectifs et aux capacités de chaque patient.",
    },
  },
];
