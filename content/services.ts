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
      ar: 'إعطاء الأدوية الموصوفة بدقة، تحت إشراف ممرض/ممرضة مؤهل/ة في منزلك.',
      fr: "Administration précise des médicaments prescrits, assurée à votre domicile par un(e) infirmier(ère) qualifié(e).",
    },
    image: '/images/services/medication-administration.jpg',
  },
  {
    icon: 'TestTube2',
    title: { en: 'Lab Services', ar: 'خدمات الفحوصات المخبرية', fr: 'Services de laboratoire' },
    description: {
      en: 'Convenient at-home sample collection and lab testing coordination, sparing you a clinic visit.',
      ar: 'جمع العينات وإجراء الفحوصات المخبرية بالتنسيق مع المختبرات من منزلك، مما يوفر عليك عناء زيارة العيادة.',
      fr: "Prélèvement d'échantillons à domicile et coordination des analyses de laboratoire, vous évitant ainsi un déplacement en clinique.",
    },
    image: '/images/services/lab-services.jpg',
  },
  {
    icon: 'Bandage',
    title: { en: 'Wound Care and Dressing Changes', ar: 'العناية بالجروح وتغيير الضمادات', fr: 'Soins des plaies et changement des pansements' },
    description: {
      en: 'Professional wound assessment, cleaning, and dressing changes to support healing.',
      ar: 'تقييم الجروح وتنظيفها وتغيير الضمادات بطريقة مهنية لدعم عملية الالتئام والتعافي.',
      fr: 'Évaluation professionnelle des plaies, nettoyage et changement des pansements afin de favoriser la cicatrisation et la guérison.',
    },
    image: '/images/services/wound-care.jpg',
  },
  {
    icon: 'HeartPulse',
    title: { en: 'Post-Surgical Care', ar: 'الرعاية بعد العمليات الجراحية', fr: 'Soins post-opératoires' },
    description: {
      en: 'Dedicated nursing support to aid recovery and monitor healing after surgery.',
      ar: 'دعم تمريضي متخصص للمساعدة في التعافي ومتابعة التئام الجروح بعد العمليات الجراحية.',
      fr: 'Accompagnement infirmier personnalisé pour favoriser la récupération et surveiller la cicatrisation après une intervention chirurgicale.',
    },
    image: '/images/services/post-surgical-care.jpg',
  },
  {
    icon: 'Activity',
    title: { en: 'Vital Signs Monitoring', ar: 'مراقبة العلامات الحيوية', fr: 'Surveillance des signes vitaux' },
    description: {
      en: 'Regular tracking of blood pressure, heart rate, temperature, and oxygen levels.',
      ar: 'المتابعة المنتظمة لضغط الدم، ومعدل ضربات القلب، ودرجة الحرارة، ونسبة الأكسجين في الدم.',
      fr: "Surveillance régulière de la tension artérielle, de la fréquence cardiaque, de la température et du taux d'oxygène dans le sang.",
    },
    image: '/images/services/vital-signs-monitoring.jpg',
  },
  {
    icon: 'Baby',
    title: { en: 'Maternal and Baby Care', ar: 'رعاية الأم والطفل', fr: 'Soins maternels et soins du nouveau-né' },
    description: {
      en: 'Compassionate nursing support for new mothers and newborns, from postnatal recovery to infant care guidance.',
      ar: 'دعم تمريضي متعاطف للأمهات الجدد وحديثي الولادة، بدءًا من رعاية ما بعد الولادة وصولًا إلى الإرشاد حول رعاية الرضيع.',
      fr: "Accompagnement infirmier bienveillant pour les jeunes mamans et les nouveau-nés, de la période postnatale aux conseils pour les soins du nourrisson.",
    },
    image: '/images/services/maternal-baby-care.jpg',
  },
  {
    icon: 'Gauge',
    title: { en: 'Blood Glucose Monitoring', ar: 'مراقبة مستوى سكر الدم', fr: 'Surveillance de la glycémie' },
    description: {
      en: 'Routine blood sugar checks to help manage diabetes and related conditions.',
      ar: 'قياس منتظم لمستوى السكر في الدم للمساعدة في إدارة مرض السكري والحالات المرتبطة به.',
      fr: 'Contrôle régulier de la glycémie afin de contribuer à la prise en charge du diabète et des affections associées.',
    },
    image: '/images/services/blood-glucose-monitoring.jpg',
  },
  {
    icon: 'Heart',
    title: { en: 'Elderly Care and Support', ar: 'رعاية ودعم كبار السن', fr: 'Soins et accompagnement des personnes âgées' },
    description: {
      en: 'Compassionate day-to-day support tailored to the needs of aging patients.',
      ar: 'دعم يومي إنساني ومخصص يتناسب مع احتياجات كبار السن.',
      fr: 'Un accompagnement quotidien, bienveillant et adapté aux besoins spécifiques des personnes âgées.',
    },
    image: '/images/services/elderly-care.jpg',
  },
  {
    icon: 'ClipboardList',
    title: { en: 'Health Assessments and Patient Education', ar: 'التقييمات الصحية وتثقيف المرضى', fr: 'Évaluations de santé et éducation du patient' },
    description: {
      en: 'Comprehensive health checks paired with guidance to support informed care decisions.',
      ar: 'تقييمات صحية شاملة، إلى جانب إرشادات تساعد المرضى وعائلاتهم على اتخاذ قرارات صحية مستنيرة.',
      fr: 'Évaluations de santé complètes accompagnées de conseils visant à favoriser une meilleure compréhension et des décisions de santé éclairées.',
    },
    image: '/images/services/health-assessments-education.jpg',
  },
];

export const wellnessServices: Service[] = [
  {
    icon: 'Bone',
    title: { en: 'Physiotherapy', ar: 'العلاج الفيزيائي', fr: 'Kinésithérapie' },
    description: {
      en: 'Personalized physical therapy to restore movement, strength, and function.',
      ar: 'جلسات علاج فيزيائي مخصصة للمساعدة على استعادة الحركة والقوة والقدرة الوظيفية.',
      fr: 'Séances de kinésithérapie personnalisées visant à restaurer la mobilité, la force et les capacités fonctionnelles.',
    },
    image: '/images/services/physiotherapy.jpg',
  },
  {
    icon: 'Stethoscope',
    title: { en: 'Medical Equipment', ar: 'المعدات الطبية', fr: 'Équipements médicaux' },
    description: {
      en: 'Guidance and support in sourcing the right home medical equipment for your care needs.',
      ar: 'الإرشاد والدعم في اختيار وتأمين المعدات الطبية المنزلية المناسبة لاحتياجاتك الصحية.',
      fr: "Conseils et accompagnement pour identifier et obtenir les équipements médicaux à domicile adaptés à vos besoins.",
    },
    image: '/images/services/medical-equipment.jpg',
  },
  {
    icon: 'Dumbbell',
    title: { en: 'Home-Based Fitness Training', ar: 'التدريب الرياضي في المنزل', fr: 'Coaching sportif à domicile' },
    description: {
      en: 'One-on-one fitness sessions delivered safely in your own home.',
      ar: 'جلسات تدريب رياضي فردية تُقدَّم بأمان وخصوصية في منزلك.',
      fr: 'Séances individuelles de remise en forme dispensées en toute sécurité et dans le confort de votre domicile.',
    },
    image: '/images/services/home-fitness-training.jpg',
  },
];
