import type { LocalizedText } from './types';

export const founder = {
  name: 'Hassan Hamieh',
  credentials: {
    en: 'RN, BSN, PgCert in Psychology & Neuroscience of Mental Health',
    ar: 'ممرض مسجل، بكالوريوس في التمريض، شهادة عليا في علم النفس وعلم الأعصاب للصحة النفسية',
  } satisfies LocalizedText,
  role: {
    en: 'Founder & Clinical Director, CareMate Mobile Healthcare',
    ar: 'المؤسس والمدير السريري، كير ميت للرعاية الصحية المتنقلة',
  } satisfies LocalizedText,
  bioParagraphs: [
    {
      en: 'CareMate Mobile Healthcare was founded by Hassan Hamieh, a Registered Nurse with over 10 years of experience in critical care, emergency medicine, anesthesia, respiratory therapy, and community healthcare.',
      ar: 'تأسست كير ميت للرعاية الصحية المتنقلة على يد حسن حمية، ممرض مسجل يتمتع بخبرة تفوق 10 سنوات في الرعاية الحرجة، وطب الطوارئ، والتخدير، والعلاج التنفسي، والرعاية الصحية المجتمعية.',
    },
    {
      en: 'Having worked in leading healthcare institutions across Lebanon and the United Arab Emirates, Hassan has built a strong foundation in delivering safe, evidence-based, and patient-centered care.',
      ar: 'بعد عمله في مؤسسات صحية رائدة في لبنان والإمارات العربية المتحدة، بنى حسن أساساً متيناً لتقديم رعاية آمنة، قائمة على الأدلة، ومتمحورة حول المريض.',
    },
    {
      en: "Hassan holds a Bachelor of Science in Nursing and has pursued advanced studies at King's College London in Psychology and Neuroscience of Mental Health. His clinical experience, combined with advanced mental health training, enables him to deliver holistic, patient-centered care that addresses both physical and psychological well-being. In addition, Hassan is a Certified Personal Trainer through the Sport Performance Institute (SPI), reflecting his passion for health promotion, physical wellness, and preventive care. He believes that healthcare extends beyond treating illness to supporting healthier lifestyles, long-term well-being, and improved quality of life.",
      ar: 'يحمل حسن درجة البكالوريوس في علوم التمريض، وتابع دراسات متقدمة في كلية كينغز كوليدج لندن في علم النفس وعلم الأعصاب للصحة النفسية. تمكّنه خبرته السريرية، إلى جانب تدريبه المتقدم في الصحة النفسية، من تقديم رعاية شاملة ومتمحورة حول المريض تعالج الجانبين الجسدي والنفسي معاً. بالإضافة إلى ذلك، حسن مدرب شخصي معتمد من معهد الأداء الرياضي (SPI)، ما يعكس شغفه بتعزيز الصحة، واللياقة البدنية، والرعاية الوقائية. وهو يؤمن بأن الرعاية الصحية تتجاوز علاج المرض لتشمل دعم أنماط حياة أكثر صحة، ورفاهية طويلة الأمد، وجودة حياة أفضل.',
    },
  ] as LocalizedText[],
  closingQuote: {
    en: 'At CareMate, his vision is simple: to deliver trusted, compassionate, and professional healthcare wherever it is needed.',
    ar: 'في كير ميت، رؤيته بسيطة: تقديم رعاية صحية موثوقة، رحيمة، واحترافية أينما دعت الحاجة إليها.',
  } satisfies LocalizedText,
};
