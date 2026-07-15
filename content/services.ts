import type { LocalizedText } from './types';

export type Service = {
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
};

export const nursingServices: Service[] = [
  {
    icon: 'Pill',
    title: { en: 'Medication Administration', ar: 'إعطاء الأدوية' },
    description: {
      en: 'Accurate administration of prescribed medications, monitored by a qualified nurse in your home.',
      ar: 'إعطاء دقيق للأدوية الموصوفة، بمتابعة من ممرض مؤهل في منزلك.',
    },
  },
  {
    icon: 'Syringe',
    title: { en: 'Intramuscular (IM) Injections', ar: 'الحقن العضلية' },
    description: {
      en: 'Safe, professional administration of intramuscular injections as prescribed.',
      ar: 'إعطاء آمن واحترافي للحقن العضلية وفق الوصفة الطبية.',
    },
  },
  {
    icon: 'Droplet',
    title: { en: 'Intravenous (IV) Therapy and Cannulation', ar: 'العلاج الوريدي وتركيب القسطرة الوريدية' },
    description: {
      en: 'IV line insertion and fluid or medication therapy delivered with clinical precision.',
      ar: 'تركيب خط وريدي وتقديم السوائل أو الأدوية بدقة سريرية عالية.',
    },
  },
  {
    icon: 'TestTube2',
    title: { en: 'Blood Sample Collection', ar: 'سحب عينات الدم' },
    description: {
      en: 'Convenient at-home blood draws for lab testing, sparing you a clinic visit.',
      ar: 'سحب عينات دم منزلي مريح لإجراء الفحوصات المخبرية، دون الحاجة لزيارة العيادة.',
    },
  },
  {
    icon: 'Bandage',
    title: { en: 'Wound Care and Dressing Changes', ar: 'العناية بالجروح وتغيير الضمادات' },
    description: {
      en: 'Professional wound assessment, cleaning, and dressing changes to support healing.',
      ar: 'تقييم احترافي للجروح، وتنظيفها، وتغيير الضمادات لدعم عملية الشفاء.',
    },
  },
  {
    icon: 'HeartPulse',
    title: { en: 'Post-Surgical Care', ar: 'الرعاية بعد العمليات الجراحية' },
    description: {
      en: 'Dedicated nursing support to aid recovery and monitor healing after surgery.',
      ar: 'دعم تمريضي مخصص لمساعدة المريض على التعافي ومتابعة الشفاء بعد الجراحة.',
    },
  },
  {
    icon: 'Activity',
    title: { en: 'Vital Signs Monitoring', ar: 'متابعة العلامات الحيوية' },
    description: {
      en: 'Regular tracking of blood pressure, heart rate, temperature, and oxygen levels.',
      ar: 'متابعة منتظمة لضغط الدم، ومعدل ضربات القلب، ودرجة الحرارة، ومستوى الأكسجين.',
    },
  },
  {
    icon: 'Gauge',
    title: { en: 'Blood Glucose Monitoring', ar: 'متابعة سكر الدم' },
    description: {
      en: 'Routine blood sugar checks to help manage diabetes and related conditions.',
      ar: 'فحوصات دورية لمستوى السكر في الدم للمساعدة في إدارة السكري والحالات المرتبطة به.',
    },
  },
  {
    icon: 'ClipboardPlus',
    title: { en: 'Chronic Disease Management', ar: 'إدارة الأمراض المزمنة' },
    description: {
      en: 'Ongoing nursing support for patients managing long-term health conditions.',
      ar: 'دعم تمريضي مستمر للمرضى الذين يتابعون حالات صحية طويلة الأمد.',
    },
  },
  {
    icon: 'Heart',
    title: { en: 'Elderly Care and Support', ar: 'رعاية ودعم كبار السن' },
    description: {
      en: 'Compassionate day-to-day support tailored to the needs of aging patients.',
      ar: 'دعم يومي متعاطف مصمم وفق احتياجات المرضى المسنين.',
    },
  },
  {
    icon: 'Droplets',
    title: { en: 'Catheter Care', ar: 'العناية بالقسطرة البولية' },
    description: {
      en: 'Safe insertion, maintenance, and monitoring of urinary catheters.',
      ar: 'تركيب آمن للقسطرة البولية، وصيانتها، ومتابعتها.',
    },
  },
  {
    icon: 'ClipboardList',
    title: { en: 'Health Assessments and Patient Education', ar: 'التقييمات الصحية وتثقيف المريض' },
    description: {
      en: 'Comprehensive health checks paired with guidance to support informed care decisions.',
      ar: 'فحوصات صحية شاملة مع إرشادات تدعم اتخاذ قرارات رعاية واعية.',
    },
  },
];

export const wellnessServices: Service[] = [
  {
    icon: 'Bone',
    title: { en: 'Physiotherapy', ar: 'العلاج الطبيعي' },
    description: {
      en: 'Personalized physical therapy to restore movement, strength, and function.',
      ar: 'علاج طبيعي مخصص لاستعادة الحركة والقوة والوظيفة الجسدية.',
    },
  },
  {
    icon: 'Hand',
    title: { en: 'Occupational Therapy', ar: 'العلاج الوظيفي' },
    description: {
      en: 'Practical support to help patients regain independence in daily activities.',
      ar: 'دعم عملي لمساعدة المرضى على استعادة استقلاليتهم في الأنشطة اليومية.',
    },
  },
  {
    icon: 'Salad',
    title: { en: 'Nutritional Counseling', ar: 'الإرشاد الغذائي' },
    description: {
      en: 'Tailored dietary guidance from qualified nutritionists and dietitians.',
      ar: 'إرشادات غذائية مخصصة من اختصاصيي تغذية وحمية مؤهلين.',
    },
  },
  {
    icon: 'Sparkles',
    title: { en: 'Personalized Wellness Programs', ar: 'برامج العافية الشخصية' },
    description: {
      en: "Custom wellness plans designed around each patient's goals and lifestyle.",
      ar: 'خطط عافية مخصصة تُصمَّم وفق أهداف ونمط حياة كل مريض.',
    },
  },
  {
    icon: 'Dumbbell',
    title: { en: 'Home-Based Fitness Training', ar: 'التدريب الرياضي المنزلي' },
    description: {
      en: 'One-on-one fitness sessions delivered safely in your own home.',
      ar: 'جلسات لياقة بدنية فردية تُقدَّم بأمان داخل منزلك.',
    },
  },
  {
    icon: 'PersonStanding',
    title: { en: 'Senior Mobility and Fall Prevention Programs', ar: 'برامج حركة كبار السن والوقاية من السقوط' },
    description: {
      en: 'Targeted exercises and guidance to improve balance and reduce fall risk.',
      ar: 'تمارين موجهة وإرشادات لتحسين التوازن وتقليل خطر السقوط.',
    },
  },
  {
    icon: 'TrendingUp',
    title: { en: 'Post-Rehabilitation Exercise Programs', ar: 'برامج التمارين بعد إعادة التأهيل' },
    description: {
      en: 'Structured exercise plans to support recovery after injury or rehabilitation.',
      ar: 'خطط تمارين منظمة لدعم التعافي بعد الإصابة أو إعادة التأهيل.',
    },
  },
  {
    icon: 'Compass',
    title: { en: 'Health Promotion and Lifestyle Coaching', ar: 'تعزيز الصحة والتدريب على نمط الحياة' },
    description: {
      en: 'Guidance and motivation to help build healthier, sustainable daily habits.',
      ar: 'إرشاد وتحفيز للمساعدة في بناء عادات يومية أكثر صحة واستدامة.',
    },
  },
  {
    icon: 'HeartHandshake',
    title: { en: 'Caregiver Support and Education', ar: 'دعم وتثقيف مقدمي الرعاية' },
    description: {
      en: 'Training and emotional support for families caring for a loved one at home.',
      ar: 'تدريب ودعم نفسي للعائلات التي ترعى أحد أفرادها في المنزل.',
    },
  },
  {
    icon: 'ClipboardCheck',
    title: { en: 'Wellness Assessments', ar: 'تقييمات العافية' },
    description: {
      en: 'A full picture of your current health and wellness to guide next steps.',
      ar: 'صورة شاملة عن حالتك الصحية الحالية لتوجيه الخطوات التالية.',
    },
  },
];
