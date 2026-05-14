export const sections = [
  {
    id: "temeller",
    number: 1,
    title: "Enerji ve Maddenin Temelleri",
    icon: "Zap",
    color: "from-amber-500 to-orange-600",
    subsections: [
      {
        title: "Enerji Nedir?",
        content: [
          "Enerji, iş yapabilme kapasitesidir.",
          "Doğada birçok farklı enerji türü bulunur: Kinetik enerji, Potansiyel enerji, Elektrik enerjisi, Kimyasal enerji, Nükleer enerji.",
        ],
      },
      {
        title: "Nükleer Enerji Nedir?",
        content: [
          "Atom çekirdeğinde depolanan enerjidir.",
          "Çekirdeği bir arada tutan güçlü nükleer kuvvet sayesinde oluşur.",
          "Çok küçük miktarda maddeden çok büyük miktarda enerji elde edilebilir.",
        ],
      },
      {
        title: "Einstein'ın Kütle-Enerji İlişkisi",
        formula: "E = mc²",
        content: [
          "E: enerji, m: kütle, c: ışık hızı (yaklaşık 300.000 km/s)",
          "Çok küçük bir kütle kaybı bile çok büyük enerjiye dönüşebilir.",
        ],
      },
    ],
  },
  {
    id: "atom",
    number: 2,
    title: "Atomun Yapısı",
    icon: "Atom",
    color: "from-blue-500 to-cyan-600",
    subsections: [
      {
        title: "Atomun Temel Bileşenleri",
        content: ["Proton (+ yüklü)", "Nötron (yüksüz)", "Elektron (- yüklü)"],
      },
      {
        title: "Atom Çekirdeği",
        content: [
          "Proton ve nötronlardan oluşur.",
          "Atomun kütlesinin neredeyse tamamını içerir.",
          "Boyutu çok küçüktür ancak yoğunluğu son derece yüksektir.",
        ],
      },
    ],
  },
  {
    id: "parcacik",
    number: 3,
    title: "Basit Parçacık Fiziği",
    icon: "Orbit",
    color: "from-violet-500 to-purple-600",
    subsections: [
      {
        title: "Standart Model",
        content: [
          "Maddeyi ve temel kuvvetleri açıklayan modern fizik teorisidir.",
        ],
      },
      {
        title: "Kuarklar",
        content: [
          "Up (u), Down (d), Charm (c), Strange (s), Top (t), Bottom (b)",
        ],
      },
      {
        title: "Leptonlar",
        content: [
          "Elektron, Müon, Tau",
          "Elektron nötrinosu, Müon nötrinosu, Tau nötrinosu",
        ],
      },
      {
        title: "Proton ve Nötronun Yapısı",
        content: [
          "Proton = uud (iki up, bir down)",
          "Nötron = udd (bir up, iki down)",
        ],
      },
      {
        title: "Kuvvet Taşıyıcı Parçacıklar",
        content: [
          "Foton → elektromanyetik kuvvet",
          "Gluon → güçlü nükleer kuvvet",
          "W ve Z bozonları → zayıf kuvvet",
          "(Kuramsal) Graviton → kütleçekim",
        ],
      },
      {
        title: "Higgs Bozonu",
        content: [
          "Parçacıklara kütle kazandıran Higgs alanının kuantumudur.",
          "2012 yılında CERN (Avrupa Nükleer Araştırma Merkezi) tarafından keşfedildi.",
        ],
      },
    ],
  },
  // ... (the rest of the sections – too long to paste here, but you already have the original file)
];
export const resources = [
  {
    name: "CERN",
    url: "https://home.cern",
    description: "Avrupa Nükleer Araştırma Merkezi",
  },
  {
    name: "ITER Organization",
    url: "https://www.iter.org",
    description: "Uluslararası Termonükleer Deneysel Reaktör",
  },
  {
    name: "IAEA Fusion Energy",
    url: "https://www.iaea.org/topics/fusion-energy",
    description: "Uluslararası Atom Enerjisi Ajansı — Füzyon",
  },
  {
    name: "National Ignition Facility",
    url: "https://lasers.llnl.gov",
    description: "ABD Ulusal Ateşleme Tesisi",
  },
];
export const closingMessage =
  '"Yıldızların içinde çalışan fizik, bir gün Dünya\'nın enerji sorununu çözebilir. Füzyonu anlamak, hem evreni hem de geleceğimizi anlamaktır."';
export const topicGroups = [
  { label: "Temeller", icon: "BookOpen", ids: ["temeller", "atom"] },
  {
    label: "Parçacık Fiziği",
    icon: "Orbit",
    ids: ["parcacik", "kuvvetler", "guclu-kuvvet", "baglanma"],
  },
  {
    label: "Fisyon",
    icon: "Split",
    ids: ["fisyon", "zincir", "fisyon-reaktor"],
  },
  {
    label: "Füzyon",
    icon: "Merge",
    ids: [
      "fuzyon",
      "fuzyon-zorluk",
      "plazma",
      "coulomb",
      "tunelleme",
      "gunes-fuzyon",
    ],
  },
  {
    label: "Reaktörler",
    icon: "Cpu",
    ids: ["fuzyon-reaktor", "tokamak", "stellarator", "lazer", "iter"],
  },
  {
    label: "Karşılaştırma & Gelecek",
    icon: "Rocket",
    ids: [
      "fuzyon-avantaj",
      "fuzyon-zorluklar",
      "karsilastirma",
      "enerji-yogunlugu",
    ],
  },
  {
    label: "Derin Konular",
    icon: "Telescope",
    ids: ["notrinolar", "antimadde", "kozmik", "guncel", "gelecek"],
  },
  {
    label: "Kapanış",
    icon: "GraduationCap",
    ids: ["ilginc", "tartisma", "ozet"],
  },
];
