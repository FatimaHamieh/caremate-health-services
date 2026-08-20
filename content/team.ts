import type { LocalizedText } from './types';

export type TeamRole = {
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
};

export const teamRoles: TeamRole[] = [
  {
    icon: 'Stethoscope',
    title: { en: 'Registered Nurses', ar: 'الممرضون والممرضات المجازون', fr: "Infirmiers et infirmières diplômés d'État" },
    description: {
      en: 'Delivering clinical care, medication management, and health monitoring in the comfort of your home.',
      ar: 'تقديم الرعاية السريرية، وإدارة الأدوية، ومتابعة الحالة الصحية في راحة منزلك.',
      fr: "Assurant les soins cliniques, la gestion des médicaments et le suivi de l'état de santé dans le confort de votre domicile.",
    },
  },
  {
    icon: 'Activity',
    title: { en: 'Physiotherapists', ar: 'أخصائيو العلاج الفيزيائي', fr: 'Kinésithérapeutes' },
    description: {
      en: 'Helping patients recover mobility, strength, and independence through personalized therapy.',
      ar: 'مساعدة المرضى على استعادة الحركة والقوة والاستقلالية من خلال جلسات علاجية مخصصة.',
      fr: 'Accompagnant les patients dans la récupération de leur mobilité, de leur force et de leur autonomie grâce à des programmes thérapeutiques personnalisés.',
    },
  },
  {
    icon: 'Dumbbell',
    title: { en: 'Certified Personal Trainers', ar: 'المدربون الشخصيون المعتمدون', fr: 'Personal Trainers certifiés' },
    description: {
      en: "Guiding safe, effective fitness programs tailored to each patient's goals and abilities.",
      ar: 'تقديم الإرشاد ووضع برامج لياقة بدنية آمنة وفعّالة، مصممة بما يتناسب مع أهداف كل مريض وقدراته.',
      fr: "Concevant et encadrant des programmes de remise en forme sûrs et efficaces, adaptés aux objectifs et aux capacités de chaque patient.",
    },
  },
];
