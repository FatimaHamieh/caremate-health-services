import type { LocalizedText } from './types';

export const aboutParagraphs: LocalizedText[] = [
  {
    en: 'CareMate is a trusted provider of professional home and community healthcare, dedicated to delivering compassionate, evidence-based care wherever it is needed. Created with a simple mission: to make high-quality healthcare more accessible by bringing clinical services directly to patients in the comfort of their homes.',
    ar: 'CareMate هي جهة موثوقة متخصصة في تقديم خدمات الرعاية الصحية المنزلية، وتلتزم بتوفير رعاية إنسانية قائمة على الأدلة العلمية. تأسست CareMate انطلاقًا من رسالة بسيطة: جعل الرعاية الصحية عالية الجودة أكثر تواجدًا، من خلال تقديم الخدمات السريرية مباشرة إلى المرضى، في راحة وأمان منازلهم.',
    fr: "CareMate est un prestataire de confiance spécialisé dans les soins de santé professionnels à domicile et au sein de la communauté, engagé à offrir des soins bienveillants et fondés sur des données probantes, là où ils sont nécessaires. CareMate a été créée avec une mission simple : rendre les soins de santé de haute qualité plus accessibles en proposant des services cliniques directement aux patients, dans le confort et la sécurité de leur domicile.",
  },
  {
    en: 'Our multidisciplinary team is committed to providing personalized care that promotes recovery, independence, wellness, and peace of mind for every patient and family we serve.',
    ar: 'يلتزم فريقنا متعدد التخصصات بتقديم رعاية صحية مخصصة تساهم في تعزيز التعافي والاستقلالية والعافية وراحة البال لكل مريض وعائلة نخدمها.',
    fr: "Notre équipe multidisciplinaire s'engage à offrir des soins personnalisés qui favorisent le rétablissement, l'autonomie, le bien-être et la tranquillité d'esprit de chaque patient et de chaque famille que nous accompagnons.",
  },
];

export const vision: LocalizedText = {
  en: "To become Lebanon's leading provider of mobile healthcare services, delivering accessible, high-quality, and patient-centered care wherever it is needed.",
  ar: 'أن نصبح الشركة الرائدة في لبنان لتقديم خدمات الرعاية الصحية المتنقلة، من خلال تقديم رعاية ميسّرة وعالية الجودة تتمحور حول المريض أينما دعت الحاجة إليها.',
  fr: "Devenir le principal fournisseur de services de santé mobiles au Liban, en offrant des soins accessibles, de haute qualité et centrés sur le patient partout où le besoin se fait sentir.",
};

export const mission: LocalizedText = {
  en: 'To provide safe, professional, and compassionate healthcare services that improve the health, well-being, and quality of life of individuals and families in their homes and communities.',
  ar: 'تقديم خدمات رعاية صحية آمنة واحترافية ورحيمة تُحسّن من صحة الأفراد والعائلات وسلامتهم وجودة حياتهم في منازلهم ومجتمعاتهم.',
  fr: "Fournir des services de santé sûrs, professionnels et compatissants qui améliorent la santé, le bien-être et la qualité de vie des individus et des familles dans leurs foyers et leurs communautés.",
};

export const values: Array<{ icon: string; title: LocalizedText }> = [
  {
    icon: 'Award',
    title: { en: 'Excellence in Clinical Care', ar: 'التميّز في الرعاية السريرية', fr: 'Excellence des soins cliniques' },
  },
  {
    icon: 'HeartHandshake',
    title: { en: 'Compassion and Respect', ar: 'الرحمة والاحترام', fr: 'Bienveillance et respect' },
  },
  {
    icon: 'ShieldCheck',
    title: { en: 'Integrity and Professionalism', ar: 'النزاهة والمهنية', fr: 'Intégrité et professionnalisme' },
  },
  {
    icon: 'ShieldPlus',
    title: { en: 'Patient Safety', ar: 'سلامة المرضى', fr: 'Sécurité des patients' },
  },
  {
    icon: 'Navigation',
    title: { en: 'Accessibility and Convenience', ar: 'سهولة الوصول والراحة', fr: 'Accessibilité et praticité' },
  },
  {
    icon: 'Lightbulb',
    title: { en: 'Continuous Learning and Innovation', ar: 'التعلّم المستمر والابتكار', fr: 'Apprentissage continu et innovation' },
  },
];
