import type { Service, TeamMember, Testimonial, Offer, BeautyTip, BeforeAfterImage } from './types';
import { FaceIcon, HandIcon, BodyIcon } from './components/icons';

export const PHONE_NUMBER = "0653928842";

export const translations = {
  en: {
    // Nav
    nav_home: "Home",
    nav_services: "Services",
    nav_offers: "Offers",
    nav_team: "Our Team",
    nav_results: "Results",
    nav_tips: "Beauty Tips",
    
    // Hero
    hero_tagline: "Reveal your inner beauty.",
    hero_cta: "Book Your Appointment ✨",

    // Home Sections
    home_services_title: "Our Services",
    home_services_discover: "Discover More",
    home_testimonials_title: "What Our Clients Say",
    
    // Services
    service_facial_title: "Facial Treatments",
    service_facial_desc: "Rejuvenate your skin with our signature facial treatments, customized to your skin type.",
    service_manicure_title: "Manicure & Pedicure",
    service_manicure_desc: "Perfectly polished nails with our wide range of colors and high-quality products.",
    service_massage_title: "Body Massage",
    service_massage_desc: "Relax and unwind with our therapeutic body massages that soothe your mind and body.",
    service_makeup_title: "Makeup Artistry",
    service_makeup_desc: "Professional makeup for any occasion, enhancing your natural features.",
    service_hair_title: "Hair Styling",
    service_hair_desc: "From cuts to colors, our stylists will create the perfect look for you.",
    service_waxing_title: "Waxing Services",
    service_waxing_desc: "Smooth, hair-free skin with our gentle and effective waxing services.",
    
    // Testimonials
    testimonial_1_text: "An absolutely divine experience. I left feeling refreshed and beautiful. The staff is incredibly professional.",
    testimonial_1_author: "Sophie L.",
    testimonial_2_text: "Fleur de Soie is my go-to for all my beauty needs. The ambiance is so calming and luxurious.",
    testimonial_2_author: "Amina K.",
    testimonial_3_text: "The best manicure I've ever had! The attention to detail is unmatched. Highly recommend.",
    testimonial_3_author: "Emily R.",

    // Offers
    offers_title: "Exclusive Offers",
    offers_limited_time: "Limited Time Offer",
    offer_1_title: "Summer Glow Package",
    offer_1_desc: "Get a full facial, manicure, and pedicure at a special price. Shine this summer!",
    offer_2_title: "Bridal Bliss",
    offer_2_desc: "Complete bridal makeup and hair styling package. Let us make your special day perfect.",
    
    // Team
    team_title: "Meet Our Experts",
    team_member_1_name: "Elara Vance",
    team_member_1_role: "Lead Esthetician",
    team_member_2_name: "Jean-Luc Moreau",
    team_member_2_role: "Master Stylist",
    team_member_3_name: "Isabella Rossi",
    team_member_3_role: "Nail Artist",
    team_member_4_name: "Kenji Tanaka",
    team_member_4_role: "Massage Therapist",
    team_quote: "Beauty is our passion.",

    // Results
    results_title: "Our Transformations",
    
    // Tips
    tips_title: "Our Beauty Tips",
    tip_1_title: "The Secret to Radiant Skin",
    tip_1_excerpt: "Discover the daily habits that can transform your skin from dull to dazzling...",
    tip_2_title: "Choosing the Right Hairstyle",
    tip_2_excerpt: "Find the perfect hairstyle that complements your face shape and lifestyle...",
    tip_3_title: "Manicure Longevity Hacks",
    tip_3_excerpt: "Keep your manicure looking fresh and flawless for weeks with these simple tricks...",
    read_more: "Read More",

    // Booking
    book_now: "Book Now",
    booking_modal_title: "Book Your Appointment",
    form_label_name: "👩 Name:",
    form_label_phone: "📞 Phone:",
    form_label_service: "💅 Service:",
    form_label_date: "📅 Date:",
    form_placeholder_name: "Your full name",
    form_placeholder_phone: "Your phone number",
    form_select_service: "Select a service...",
    form_submit: "Confirm on WhatsApp",

    whatsapp_greeting: "👋 Hello Fleur de Soie!",
    whatsapp_intro: "I would like to book an appointment:",
    whatsapp_outro: "Thank you 🌸",
  },
  fr: {
    nav_home: "Accueil",
    nav_services: "Nos Services",
    nav_offers: "Offres",
    nav_team: "Notre Équipe",
    nav_results: "Résultats",
    nav_tips: "Conseils Beauté",

    hero_tagline: "Révélez votre beauté intérieure.",
    hero_cta: "Prendre Rendez-vous ✨",

    home_services_title: "Nos Services",
    home_services_discover: "Découvrir",
    home_testimonials_title: "Ce Que Disent Nos Clientes",

    service_facial_title: "Soins du Visage",
    service_facial_desc: "Rajeunissez votre peau avec nos soins du visage signature, adaptés à votre type de peau.",
    service_manicure_title: "Manucure & Pédicure",
    service_manicure_desc: "Des ongles parfaitement vernis avec notre large gamme de couleurs et produits de haute qualité.",
    service_massage_title: "Massage Corporel",
    service_massage_desc: "Détendez-vous avec nos massages corporels thérapeutiques qui apaisent l'esprit et le corps.",
    service_makeup_title: "Maquillage Artistique",
    service_makeup_desc: "Maquillage professionnel pour toute occasion, sublimant vos traits naturels.",
    service_hair_title: "Coiffure",
    service_hair_desc: "De la coupe à la couleur, nos stylistes créeront le look parfait pour vous.",
    service_waxing_title: "Services d'Épilation",
    service_waxing_desc: "Une peau lisse et sans poils grâce à nos services d'épilation doux et efficaces.",

    testimonial_1_text: "Une expérience absolutely divine. Je suis partie fraîche et belle. Le personnel est incroyablement professionnel.",
    testimonial_1_author: "Sophie L.",
    testimonial_2_text: "Fleur de Soie est mon adresse pour tous mes besoins beauté. L'ambiance est si calme et luxueuse.",
    testimonial_2_author: "Amina K.",
    testimonial_3_text: "La meilleure manucure que j'ai jamais eue ! L'attention aux détails est inégalée. Je recommande vivement.",
    testimonial_3_author: "Emily R.",

    offers_title: "Offres Exclusives",
    offers_limited_time: "Offre à Durée Limitée",
    offer_1_title: "Forfait Éclat d'Été",
    offer_1_desc: "Profitez d'un soin visage complet, manucure et pédicure à un prix spécial. Brillez cet été !",
    offer_2_title: "Félicité de la Mariée",
    offer_2_desc: "Forfait complet de maquillage et coiffure de mariée. Laissez-nous rendre votre journée spéciale parfaite.",

    team_title: "Rencontrez Nos Experts",
    team_member_1_name: "Elara Vance",
    team_member_1_role: "Esthéticienne Principale",
    team_member_2_name: "Jean-Luc Moreau",
    team_member_2_role: "Maître Coiffeur",
    team_member_3_name: "Isabella Rossi",
    team_member_3_role: "Artiste Ongulaire",
    team_member_4_name: "Kenji Tanaka",
    team_member_4_role: "Massothérapeute",
    team_quote: "La beauté est notre passion.",

    results_title: "Nos Transformations",

    tips_title: "Nos Conseils Beauté",
    tip_1_title: "Le Secret d'une Peau Radieuse",
    tip_1_excerpt: "Découvrez les habitudes quotidiennes qui peuvent transformer votre peau de terne à éblouissante...",
    tip_2_title: "Choisir la Bonne Coiffure",
    tip_2_excerpt: "Trouvez la coiffure parfaite qui complète la forme de votre visage et votre style de vie...",
    tip_3_title: "Astuces pour une Manucure Durable",
    tip_3_excerpt: "Gardez votre manucure fraîche et impeccable pendant des semaines avec ces astuces simples...",
    read_more: "Lire la Suite",

    book_now: "Réserver",
    booking_modal_title: "Prendre Rendez-vous",
    form_label_name: "👩 Nom :",
    form_label_phone: "📞 Téléphone :",
    form_label_service: "💅 Service :",
    form_label_date: "📅 Date :",
    form_placeholder_name: "Votre nom complet",
    form_placeholder_phone: "Votre numéro de téléphone",
    form_select_service: "Sélectionnez un service...",
    form_submit: "Confirmer sur WhatsApp",

    whatsapp_greeting: "👋 Bonjour Fleur de Soie!",
    whatsapp_intro: "Je souhaite réserver un rendez-vous :",
    whatsapp_outro: "Merci beaucoup ✨",
  },
  ar: {
    nav_home: "الرئيسية",
    nav_services: "خدماتنا",
    nav_offers: "العروض",
    nav_team: "فريقنا",
    nav_results: "النتائج",
    nav_tips: "نصائح الجمال",

    hero_tagline: "أظهري جمالك الداخلي.",
    hero_cta: "احجزي موعدك الآن ✨",

    home_services_title: "خدماتنا",
    home_services_discover: "اكتشف المزيد",
    home_testimonials_title: "ماذا يقول عملاؤنا",

    service_facial_title: "علاجات الوجه",
    service_facial_desc: "جددي بشرتك بعلاجات الوجه المميزة لدينا، والمصممة خصيصًا لنوع بشرتك.",
    service_manicure_title: "مانيكير وباديكير",
    service_manicure_desc: "أظافر مصقولة بشكل مثالي مع مجموعتنا الواسعة من الألوان والمنتجات عالية الجودة.",
    service_massage_title: "مساج الجسم",
    service_massage_desc: "استرخِي وتخلصي من التوتر مع جلسات مساج الجسم العلاجية التي تهدئ عقلك وجسدك.",
    service_makeup_title: "فن المكياج",
    service_makeup_desc: "مكياج احترافي لأي مناسبة، يعزز ملامحك الطبيعية.",
    service_hair_title: "تصفيف الشعر",
    service_hair_desc: "من القص إلى الصبغة، سيقوم مصففونا بابتكار الإطلالة المثالية لك.",
    service_waxing_title: "خدمات إزالة الشعر",
    service_waxing_desc: "بشرة ناعمة وخالية من الشعر مع خدمات إزالة الشعر اللطيفة والفعالة.",

    testimonial_1_text: "تجربة إلهية بكل معنى الكلمة. غادرت وأنا أشعر بالانتعاش والجمال. فريق العمل محترف بشكل لا يصدق.",
    testimonial_1_author: "صوفيا. ل",
    testimonial_2_text: "فلور دو سوا هو وجهتي الأولى لجميع احتياجاتي الجمالية. الأجواء هادئة وفاخرة للغاية.",
    testimonial_2_author: "أمينة. ك",
    testimonial_3_text: "أفضل مانيكير حصلت عليه على الإطلاق! الاهتمام بالتفاصيل لا مثيل له. أوصي به بشدة.",
    testimonial_3_author: "إيميلي. ر",

    offers_title: "عروض حصرية",
    offers_limited_time: "عرض لفترة محدودة",
    offer_1_title: "باقة إشراقة الصيف",
    offer_1_desc: "احصلي على علاج وجه كامل ومانيكير وباديكير بسعر خاص. تألقي هذا الصيف!",
    offer_2_title: "سعادة العروس",
    offer_2_desc: "باقة كاملة لمكياج وتصفيف شعر العروس. دعينا نجعل يومك الخاص مثالياً.",

    team_title: "تعرف على خبرائنا",
    team_member_1_name: "إلارا فانس",
    team_member_1_role: "خبيرة تجميل رئيسية",
    team_member_2_name: "جان لوك مورو",
    team_member_2_role: "مصفف شعر خبير",
    team_member_3_name: "إيزابيلا روسي",
    team_member_3_role: "فنانة أظافر",
    team_member_4_name: "كينجي تاناكا",
    team_member_4_role: "معالج بالتدليك",
    team_quote: "الجمال هو شغفنا.",

    results_title: "تحولاتنا",

    tips_title: "نصائح الجمال لدينا",
    tip_1_title: "سر البشرة المشرقة",
    tip_1_excerpt: "اكتشفي العادات اليومية التي يمكن أن تحول بشرتك من باهتة إلى متألقة...",
    tip_2_title: "اختيار تصفيفة الشعر المناسبة",
    tip_2_excerpt: "ابحثي عن تصفيفة الشعر المثالية التي تكمل شكل وجهك وأسلوب حياتك...",
    tip_3_title: "حيل لطول عمر المانيكير",
    tip_3_excerpt: "حافظي على مظهر المانيكير الخاص بك جديدًا وخاليًا من العيوب لأسابيع مع هذه الحيل البسيطة...",
    read_more: "اقرأ المزيد",

    book_now: "احجز الآن",
    booking_modal_title: "احجز موعدك",
    form_label_name: "👩 الاسم:",
    form_label_phone: "📞 الهاتف:",
    form_label_service: "💅 الخدمة:",
    form_label_date: "📅 الموعد:",
    form_placeholder_name: "اسمك الكامل",
    form_placeholder_phone: "رقم هاتفك",
    form_select_service: "اختر خدمة...",
    form_submit: "تأكيد الحجز عبر واتساب",

    whatsapp_greeting: "👋 مرحبًا! أود حجز موعد في فلور دو سوا:",
    whatsapp_intro: "",
    whatsapp_outro: "شكرًا لكم 🌸",
  },
};

export const SERVICES: Service[] = [
  { id: 'facial', icon: FaceIcon, images: ['https://picsum.photos/400/300?random=1', 'https://picsum.photos/400/300?random=2', 'https://picsum.photos/400/300?random=3', 'https://picsum.photos/400/300?random=61', 'https://picsum.photos/400/300?random=62'] },
  { id: 'manicure', icon: HandIcon, images: ['https://picsum.photos/400/300?random=4', 'https://picsum.photos/400/300?random=5', 'https://picsum.photos/400/300?random=6', 'https://picsum.photos/400/300?random=63', 'https://picsum.photos/400/300?random=64'] },
  { id: 'massage', icon: BodyIcon, images: ['https://picsum.photos/400/300?random=7', 'https://picsum.photos/400/300?random=8', 'https://picsum.photos/400/300?random=9', 'https://picsum.photos/400/300?random=65', 'https://picsum.photos/400/300?random=66'] },
  { id: 'makeup', icon: FaceIcon, images: ['https://picsum.photos/400/300?random=10', 'https://picsum.photos/400/300?random=11', 'https://picsum.photos/400/300?random=12', 'https://picsum.photos/400/300?random=67', 'https://picsum.photos/400/300?random=68'] },
  { id: 'hair', icon: BodyIcon, images: ['https://picsum.photos/400/300?random=13', 'https://picsum.photos/400/300?random=14', 'https://picsum.photos/400/300?random=15', 'https://picsum.photos/400/300?random=69', 'https://picsum.photos/400/300?random=70'] },
  { id: 'waxing', icon: BodyIcon, images: ['https://picsum.photos/400/300?random=16', 'https://picsum.photos/400/300?random=17', 'https://picsum.photos/400/300?random=18', 'https://picsum.photos/400/300?random=71', 'https://picsum.photos/400/300?random=72'] },
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 1, image: 'https://picsum.photos/400/400?random=21' },
  { id: 2, image: 'https://picsum.photos/400/400?random=22' },
  { id: 3, image: 'https://picsum.photos/400/400?random=23' },
  { id: 4, image: 'https://picsum.photos/400/400?random=24' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

export const OFFERS: Offer[] = [
    { id: '1', image: 'https://picsum.photos/1200/800?random=31', endDate: '2024-09-30T23:59:59' },
    { id: '2', image: 'https://picsum.photos/1200/800?random=32', endDate: '2024-12-31T23:59:59' },
];

export const BEAUTY_TIPS: BeautyTip[] = [
    { id: '1', image: 'https://picsum.photos/800/500?random=41' },
    { id: '2', image: 'https://picsum.photos/800/500?random=42' },
    { id: '3', image: 'https://picsum.photos/800/500?random=43' },
];

export const BEFORE_AFTER_IMAGES: BeforeAfterImage[] = [
    { id: 1, before: 'https://picsum.photos/450/600?random=51', after: 'https://picsum.photos/450/600?random=52' },
    { id: 2, before: 'https://picsum.photos/450/600?random=53', after: 'https://picsum.photos/450/600?random=54' },
    { id: 3, before: 'https://picsum.photos/450/600?random=55', after: 'https://picsum.photos/450/600?random=56' },
];