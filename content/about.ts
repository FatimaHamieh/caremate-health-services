import type { LocalizedText } from './types';

export const aboutParagraphs: LocalizedText[] = [
  {
    en: 'CareMate is a trusted provider of professional home and community healthcare, dedicated to delivering compassionate, evidence-based care wherever it is needed. Created with a simple mission: to make high-quality healthcare more accessible by bringing clinical services directly to patients in the comfort of their homes.',
    ar: 'كير ميت هي مزوّد موثوق للرعاية الصحية المنزلية والمجتمعية الاحترافية، ملتزمة بتقديم رعاية رحيمة وقائمة على الأدلة العلمية أينما دعت الحاجة إليها. تأسست بمهمة بسيطة: جعل الرعاية الصحية عالية الجودة أكثر سهولة من خلال إيصال الخدمات السريرية مباشرة إلى المرضى في راحة منازلهم.',
    fr: "CareMate est un fournisseur de confiance de soins de santé professionnels à domicile et communautaires, dédié à offrir des soins compatissants fondés sur des données probantes partout où le besoin se fait sentir. Créée avec une mission simple : rendre les soins de santé de haute qualité plus accessibles en apportant des services cliniques directement aux patients dans le confort de leur foyer.",
  },
  {
    en: 'Our multidisciplinary team is committed to providing personalized care that promotes recovery, independence, wellness, and peace of mind for every patient and family we serve.',
    ar: 'يلتزم فريقنا متعدد الاختصاصات بتقديم رعاية شخصية تعزز التعافي والاستقلالية والعافية وراحة البال لكل مريض وعائلة نخدمها.',
    fr: "Notre équipe multidisciplinaire s'engage à fournir des soins personnalisés qui favorisent le rétablissement, l'autonomie, le bien-être et la tranquillité d'esprit pour chaque patient et chaque famille que nous servons.",
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
    title: { en: 'Excellence in Clinical Care', ar: 'التميز في الرعاية السريرية', fr: 'Excellence des soins cliniques' },
  },
  {
    icon: 'HeartHandshake',
    title: { en: 'Compassion and Respect', ar: 'التعاطف والاحترام', fr: 'Compassion et respect' },
  },
  {
    icon: 'ShieldCheck',
    title: { en: 'Integrity and Professionalism', ar: 'النزاهة والاحترافية', fr: 'Intégrité et professionnalisme' },
  },
  {
    icon: 'ShieldPlus',
    title: { en: 'Patient Safety', ar: 'سلامة المريض', fr: 'Sécurité des patients' },
  },
  {
    icon: 'Navigation',
    title: { en: 'Accessibility and Convenience', ar: 'سهولة الوصول والراحة', fr: 'Accessibilité et commodité' },
  },
  {
    icon: 'Lightbulb',
    title: { en: 'Continuous Learning and Innovation', ar: 'التعلم المستمر والابتكار', fr: 'Apprentissage continu et innovation' },
  },
];
