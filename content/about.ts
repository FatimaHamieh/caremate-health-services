import type { LocalizedText } from './types';

export const aboutParagraphs: LocalizedText[] = [
  {
    en: 'At CareMate Mobile Healthcare, we believe that quality healthcare should be accessible, convenient, and delivered with compassion. Our mission is to bring professional nursing and healthcare services directly to patients in the comfort and safety of their homes.',
    ar: 'في كير ميت للرعاية الصحية المتنقلة، نؤمن بأن الرعاية الصحية الجيدة يجب أن تكون متاحة وميسّرة ومقدَّمة بروح من التعاطف. مهمتنا هي إيصال خدمات التمريض والرعاية الصحية الاحترافية مباشرة إلى المرضى في راحة منازلهم وأمانها.',
  },
  {
    en: 'CareMate was established to meet the growing need for reliable, professional home-based healthcare services in Lebanon. We support individuals and families through every stage of their healthcare journey by providing services such as blood collection, medication administration, injections, wound care, post-operative support, chronic disease monitoring, elderly care, and health education.',
    ar: 'تأسست كير ميت لتلبية الحاجة المتنامية إلى خدمات رعاية صحية منزلية موثوقة واحترافية في لبنان. ندعم الأفراد والعائلات في كل مرحلة من رحلتهم الصحية من خلال تقديم خدمات مثل سحب عينات الدم، وإعطاء الأدوية، والحقن، والعناية بالجروح، والدعم بعد العمليات الجراحية، ومتابعة الأمراض المزمنة، ورعاية كبار السن، والتثقيف الصحي.',
  },
];

export const vision: LocalizedText = {
  en: "To become Lebanon's leading provider of mobile healthcare services, delivering accessible, high-quality, and patient-centered care wherever it is needed.",
  ar: 'أن نصبح الشركة الرائدة في لبنان لتقديم خدمات الرعاية الصحية المتنقلة، من خلال تقديم رعاية ميسّرة وعالية الجودة تتمحور حول المريض أينما دعت الحاجة إليها.',
};

export const mission: LocalizedText = {
  en: 'To provide safe, professional, and compassionate healthcare services that improve the health, well-being, and quality of life of individuals and families in their homes and communities.',
  ar: 'تقديم خدمات رعاية صحية آمنة واحترافية ورحيمة تُحسّن من صحة الأفراد والعائلات وسلامتهم وجودة حياتهم في منازلهم ومجتمعاتهم.',
};

export const values: Array<{ icon: string; title: LocalizedText }> = [
  {
    icon: 'Award',
    title: { en: 'Excellence in Clinical Care', ar: 'التميز في الرعاية السريرية' },
  },
  {
    icon: 'HeartHandshake',
    title: { en: 'Compassion and Respect', ar: 'التعاطف والاحترام' },
  },
  {
    icon: 'ShieldCheck',
    title: { en: 'Integrity and Professionalism', ar: 'النزاهة والاحترافية' },
  },
  {
    icon: 'ShieldPlus',
    title: { en: 'Patient Safety', ar: 'سلامة المريض' },
  },
  {
    icon: 'Navigation',
    title: { en: 'Accessibility and Convenience', ar: 'سهولة الوصول والراحة' },
  },
  {
    icon: 'Lightbulb',
    title: { en: 'Continuous Learning and Innovation', ar: 'التعلم المستمر والابتكار' },
  },
];
