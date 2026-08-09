import type { LocalizedText } from './types';

export type Service = {
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
  comingSoon?: boolean;
  image?: string;
};

export const nursingServices: Service[] = [
  {
    icon: 'Pill',
    title: { en: 'Medication Administration', ar: 'إعطاء الأدوية', fr: 'Administration des médicaments' },
    description: {
      en: 'Accurate administration of prescribed medications, monitored by a qualified nurse in your home.',
      ar: 'إعطاء دقيق للأدوية الموصوفة، بمتابعة من ممرض مؤهل في منزلك.',
      fr: "Administration précise des médicaments prescrits, sous la supervision d'un infirmier qualifié à votre domicile.",
    },
    image: '/images/services/medication-administration.jpg',
  },
  {
    icon: 'TestTube2',
    title: { en: 'Lab Services', ar: 'الخدمات المخبرية', fr: 'Services de laboratoire' },
    description: {
      en: 'Convenient at-home sample collection and lab testing coordination, sparing you a clinic visit.',
      ar: 'جمع العينات وتنسيق الفحوصات المخبرية في المنزل بكل سهولة، دون الحاجة لزيارة العيادة.',
      fr: "Prélèvement d'échantillons à domicile et coordination des analyses de laboratoire, vous évitant une visite en clinique.",
    },
    image: '/images/services/lab-services.jpg',
  },
  {
    icon: 'Bandage',
    title: { en: 'Wound Care and Dressing Changes', ar: 'العناية بالجروح وتغيير الضمادات', fr: 'Soins des plaies et changement de pansements' },
    description: {
      en: 'Professional wound assessment, cleaning, and dressing changes to support healing.',
      ar: 'تقييم احترافي للجروح، وتنظيفها، وتغيير الضمادات لدعم عملية الشفاء.',
      fr: 'Évaluation professionnelle des plaies, nettoyage et changement de pansements pour favoriser la guérison.',
    },
    image: '/images/services/wound-care.jpg',
  },
  {
    icon: 'HeartPulse',
    title: { en: 'Post-Surgical Care', ar: 'الرعاية بعد العمليات الجراحية', fr: 'Soins post-opératoires' },
    description: {
      en: 'Dedicated nursing support to aid recovery and monitor healing after surgery.',
      ar: 'دعم تمريضي مخصص لمساعدة المريض على التعافي ومتابعة الشفاء بعد الجراحة.',
      fr: 'Soutien infirmier dédié pour favoriser le rétablissement et surveiller la guérison après une intervention chirurgicale.',
    },
    image: '/images/services/post-surgical-care.jpg',
  },
  {
    icon: 'Activity',
    title: { en: 'Vital Signs Monitoring', ar: 'متابعة العلامات الحيوية', fr: 'Surveillance des signes vitaux' },
    description: {
      en: 'Regular tracking of blood pressure, heart rate, temperature, and oxygen levels.',
      ar: 'متابعة منتظمة لضغط الدم، ومعدل ضربات القلب، ودرجة الحرارة، ومستوى الأكسجين.',
      fr: 'Suivi régulier de la tension artérielle, de la fréquence cardiaque, de la température et du taux d\'oxygène.',
    },
    image: '/images/services/vital-signs-monitoring.jpg',
  },
  {
    icon: 'Baby',
    title: { en: 'Maternal and Baby Care', ar: 'رعاية الأم والطفل', fr: 'Soins maternels et infantiles' },
    description: {
      en: 'Compassionate nursing support for new mothers and newborns, from postnatal recovery to infant care guidance.',
      ar: 'دعم تمريضي رحيم للأمهات الجدد وحديثي الولادة، من التعافي بعد الولادة إلى إرشادات العناية بالرضيع.',
      fr: "Soutien infirmier bienveillant pour les nouvelles mères et les nouveau-nés, du rétablissement postnatal aux conseils sur les soins du nourrisson.",
    },
    image: '/images/services/maternal-baby-care.jpg',
  },
  {
    icon: 'Gauge',
    title: { en: 'Blood Glucose Monitoring', ar: 'متابعة سكر الدم', fr: 'Surveillance de la glycémie' },
    description: {
      en: 'Routine blood sugar checks to help manage diabetes and related conditions.',
      ar: 'فحوصات دورية لمستوى السكر في الدم للمساعدة في إدارة السكري والحالات المرتبطة به.',
      fr: 'Contrôles réguliers de la glycémie pour aider à gérer le diabète et les affections connexes.',
    },
    image: '/images/services/blood-glucose-monitoring.jpg',
  },
  {
    icon: 'Heart',
    title: { en: 'Elderly Care and Support', ar: 'رعاية ودعم كبار السن', fr: 'Soins et accompagnement des personnes âgées' },
    description: {
      en: 'Compassionate day-to-day support tailored to the needs of aging patients.',
      ar: 'دعم يومي متعاطف مصمم وفق احتياجات المرضى المسنين.',
      fr: 'Accompagnement quotidien bienveillant adapté aux besoins des patients âgés.',
    },
    image: '/images/services/elderly-care.jpg',
  },
  {
    icon: 'ClipboardList',
    title: { en: 'Health Assessments and Patient Education', ar: 'التقييمات الصحية وتثقيف المريض', fr: 'Évaluations de santé et éducation du patient' },
    description: {
      en: 'Comprehensive health checks paired with guidance to support informed care decisions.',
      ar: 'فحوصات صحية شاملة مع إرشادات تدعم اتخاذ قرارات رعاية واعية.',
      fr: 'Bilans de santé complets accompagnés de conseils pour soutenir des décisions de soins éclairées.',
    },
    image: '/images/services/health-assessments-education.jpg',
  },
];

export const wellnessServices: Service[] = [
  {
    icon: 'Bone',
    title: { en: 'Physiotherapy', ar: 'العلاج الطبيعي', fr: 'Physiothérapie' },
    description: {
      en: 'Personalized physical therapy to restore movement, strength, and function.',
      ar: 'علاج طبيعي مخصص لاستعادة الحركة والقوة والوظيفة الجسدية.',
      fr: 'Thérapie physique personnalisée pour restaurer le mouvement, la force et la fonction.',
    },
    image: '/images/services/physiotherapy.jpg',
  },
  {
    icon: 'Stethoscope',
    title: { en: 'Medical Equipment', ar: 'المعدات الطبية', fr: 'Équipement médical' },
    description: {
      en: 'Guidance and support in sourcing the right home medical equipment for your care needs.',
      ar: 'إرشاد ودعم في تأمين المعدات الطبية المنزلية المناسبة لاحتياجات رعايتك.',
      fr: "Conseils et accompagnement pour trouver l'équipement médical à domicile adapté à vos besoins de soins.",
    },
    image: '/images/services/medical-equipment.jpg',
  },
  {
    icon: 'Dumbbell',
    title: { en: 'Home-Based Fitness Training', ar: 'التدريب الرياضي المنزلي', fr: 'Entraînement physique à domicile' },
    description: {
      en: 'One-on-one fitness sessions delivered safely in your own home.',
      ar: 'جلسات لياقة بدنية فردية تُقدَّم بأمان داخل منزلك.',
      fr: 'Séances de remise en forme individuelles dispensées en toute sécurité chez vous.',
    },
    image: '/images/services/home-fitness-training.jpg',
  },
];
