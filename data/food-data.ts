export const foodData = {
  "main-dishes": [
    {
      id: "maqluba",
      name: "مقلوبة",
      image: "/public/images/maqluba.png",
      description: "طبق فلسطيني تقليدي من الأرز واللحم والخضار، يقلب عند التقديم ليصبح الأرز في الأعلى.",
      options: [
        { id: "chicken", name: "دجاج" },
        { id: "meat", name: "لحمة" },
        { id: "eggplant", name: "باذنجان" },
        { id: "cauliflower", name: "زهرة" },
        { id: "carrot", name: "جزر" },
      ],
    },
    {
      id: "musakhan",
      name: "مسخن",
      image: "/public/images/musakhan.png",
      description: "خبز طابون مغطى بالبصل المقلي والسماق والزيت، يقدم مع الدجاج المشوي.",
      options: [
        { id: "onion", name: "بصل إضافي" },
        { id: "sumac", name: "سماق إضافي" },
        { id: "pine-nuts", name: "صنوبر" },
      ],
    },
    {
      id: "maftoul",
      name: "مفتول",
      image: "/public/images/maftoul.png",
      description: "حبوب المفتول المطبوخة مع المرق والدجاج والحمص والخضار.",
      options: [
        { id: "chicken", name: "دجاج" },
        { id: "chickpeas", name: "حمص" },
        { id: "vegetables", name: "خضار" },
      ],
    },
    {
      id: "dawali",
      name: "ورق عنب",
      image: "/public/images/dawali.png",
      description: "أوراق العنب المحشوة بالأرز واللحم المفروم والتوابل.",
      options: [
        { id: "meat", name: "لحمة" },
        { id: "vegetarian", name: "نباتي" },
        { id: "yogurt", name: "مع لبن" },
        { id:"chicken", name:"دجاج"},
      ],
    },
    {
      id: "shishbarak",
      name: "ششبرك",
      image: "/public/images/shishbarak.png",
      description: "عجينة محشوة باللحم المفروم ومطبوخة باللبن.",
      options: [
        { id: "extra-meat", name: "لحمة إضافية" },
        { id: "garlic", name: "ثوم إضافي" },
        { id: "mint", name: "نعناع" },
      ],
    },
    {
      id: "malfouf",
      name: "ملفوف",
      image: "/public/images/malfouf.png",
      description: "أوراق الملفوف المحشوة بالأرز واللحم المفروم.",
      options: [
        { id: "meat", name: "لحمة" },
        { id: "vegetarian", name: "نباتي" },
        { id: "lemon", name: "ليمون إضافي" },
      ],
    },
   {
  id: "kousa-yogurt",
  name: "مخشي",
  image: "/public/images/kousa-yogurt.png", 
  description: "كوسا محشي بالأرز واللحم، مطبوخ بصلصة اللبن، يقدم ساخناً مع خبز الطابون.",
  options: [
    { id: "extra-yogurt", name: "لبن إضافي" },
    { id: "pine-nuts", name: "صنوبر" },
    { id: "garlic", name: "ثوم إضافي" },
  ],
},

    {
      id: "mulukhiyah",
      name: "ملوخية",
      image: "/public/images/mulukhiyah.png",
      description: "أوراق الملوخية المطبوخة مع الدجاج أو اللحم، تقدم مع الأرز.",
      options: [
        { id: "chicken", name: "دجاج" },
        { id: "meat", name: "لحمة" },
        { id: "garlic", name: "ثوم إضافي" },
      ],
    },
  ],
  "local-products": [
    {
      id: "zaatar",
      name: "زعتر",
      image: "/public/images/zaatar.png",
      description: "خلطة الزعتر البلدي مع السماق والسمسم وزيت الزيتون.",
      options: [
        { id: "sumac", name: "سماق إضافي" },
        { id: "sesame", name: "سمسم إضافي" },
      ],
    },
    {
      id: "olive-oil",
      name: " زيتون مكبوس",
      image: "/public/images/olive-oil.png",
      description: "زيت زيتون فلسطيني أصلي معصور على البارد من أشجار الزيتون المعمرة.",
      options: [
        { id: "small", name: "عبوة صغيرة" },
        { id: "medium", name: "عبوة متوسطة" },
        { id: "large", name: "عبوة كبيرة" },
         { id: "lemon", name: "مع ليمون" },
        { id: "chili", name: "مع فلفل حار" },
      ],
    },
    {
      id: "black-olives",
      name: "زيتون أسود",
      image: "/public/images/black-olives.png",
      description: "زيتون أسود فلسطيني مكبوس بالطريقة التقليدية.",
      options: [
         { id: "small", name: "عبوة صغيرة" },
        { id: "medium", name: "عبوة متوسطة" },
        { id: "large", name: "عبوة كبيرة" },
         { id: "lemon", name: "مع ليمون" },
        { id: "chili", name: "مع فلفل حار" },
      ],
    },
    {
      id: "labneh",
      name: "لبنة مدحبرة",
      image: "/public/images/labneh.png",
      description: "لبنة مصفاة مشكلة على هيئة كرات ومحفوظة في زيت الزيتون.",
      options: [
        { id: "zaatar", name: "مع زعتر" },
        { id: "chili", name: "مع فلفل حار" },
        { id: "small", name: "عبوة صغيرة" },
        { id: "medium", name: "عبوة متوسطة" },
        { id: "large", name: "عبوة كبيرة" },
      ],
    },
    {
      id: "makdous",
      name: "مكدوس",
      image: "/public/images/makdous.png",
      description: "باذنجان صغير محشو بالجوز والفلفل والثوم ومحفوظ في زيت الزيتون.",
      options: [
        { id: "extra-walnuts", name: "جوز إضافي" },
        { id: "extra-chili", name: "فلفل حار إضافي" },
        {id:"extra-Almond", name:"لوز اضافي"},
        { id: "small", name: "عبوة صغيرة" },
        { id: "medium", name: "عبوة متوسطة" },
        { id: "large", name: "عبوة كبيرة" },
      ],
    },
    {
      id: "chili-paste",
      name: "شطة بلدية",
      image: "/public/images/chili-paste.png",
      description: "شطة حارة بلدية مصنوعة من الفلفل الحار الطازج والتوابل.",
      options: [
        { id: "extra-hot", name: "حارة جداً" },
        { id: "medium", name: "متوسطة الحرارة" },
        { id: "small", name: "عبوة صغيرة" },
        { id: "medium", name: "عبوة متوسطة" },
        { id: "large", name: "عبوة كبيرة" },
      ],
    },
    
    {
      id: "stuffed-olives",
      name: "زيتون محشي",
      image: "/public/images/stuffed-olives.png",
      description: "زيتون محشي باللوز أو الفلفل أو الليمون.",
      options: [
        { id: "almond", name: "محشي لوز" },
        { id: "pepper", name: "محشي فلفل" },
        { id: "lemon", name: "محشي ليمون" },
        { id: "small", name: "عبوة صغيرة" },
        { id: "medium", name: "عبوة متوسطة" },
        { id: "large", name: "عبوة كبيرة" },
      ],
    },
    {
      id: "plain-olives",
      name: "زيتون مكبوس مفرغ",
      image: "/public/images/plain-olives.png",
      description: "زيتون مكبوس مفرغ من النواة.",
      options: [
        { id: "green", name: "أخضر" },
        { id: "black", name: "أسود" },
        { id: "small", name: "عبوة صغيرة" },
        { id: "medium", name: "عبوة متوسطة" },
        { id: "large", name: "عبوة كبيرة" },
      ],
    },
    {
      id: "pickles",
      name: "مخللات",
      image: "/public/images/pickles.png",
      description: "تشكيلة من المخللات البلدية المكبوسة بالخل والتوابل.",
      options: [
        { id: "cucumber", name: "خيار مخلل" },
        { id: "carrot", name: "جزر مخلل" },
        { id: "pepper", name: "فلفل مخلل" },
        { id: "mixed", name: "تشكيلة مخللات" },
        { id: "small", name: "عبوة صغيرة" },
        { id: "medium", name: "عبوة متوسطة" },
        { id: "large", name: "عبوة كبيرة" },
      ],
    },
  ],
  pastries: [
    {
      id: "cheese-pastry",
      name: "معجنات جبنة",
      image: "/public/images/cheese-pastry.png",
      description: "عجينة مخبوزة محشوة بالجبنة البلدية.",
      options: [
        { id: "sesame", name: "مع سمسم" },
        { id: "black-seed", name: "مع حبة البركة" },
      ],
    },
    {
      id: "zaatar-pastry",
      name: "معجنات زعتر",
      image: "/public/images/zaatar-pastry.png",
      description: "عجينة مخبوزة محشوة بالزعتر وزيت الزيتون.",
      options: [
        { id: "sesame", name: "مع سمسم" },
        { id: "vegetables", name: "مع خضار" },
      ],
    },
    {
      id: "taboon-bread",
      name: "خبز طابون",
      image: "/public/images/taboon-bread.png",
      description: "خبز تقليدي مخبوز في فرن الطابون.",
      options: [
        { id: "without-sesame", name: "بدون سمسم" },
        { id: "sesame", name: "مع سمسم" },
      ],
    },
    {
      id: "sausage-pastry",
      name: "معجنات نقانق",
      image: "/public/images/sausage-pastry.png",
      description: "عجينة مخبوزة محشوة بالنقانق والتوابل.",
      options: [
        { id: "cheese", name: "مع جبنة" },
        { id: "hot", name: "حار" },
      ],
    },
    {
      id: "sfeeha",
      name: "صفيحة تركية",
      image: "/public/images/sfeeha.png",
      description: "عجينة مفتوحة محشوة باللحم المفروم والبصل والبهارات.",
      options: [
        { id: "extra-meat", name: "لحم إضافي" },
        { id: "pine-nuts", name: "مع صنوبر" },
      ],
    },
    {
      id: "sausage-cheese",
      name: "نقانق وجبنة بيضاء",
      image: "/public/images/sausage-cheese.png",
      description: "عجينة محشوة بالنقانق والجبنة البيضاء.",
      options: [
        { id: "extra-cheese", name: "جبنة إضافية" },
        { id: "hot", name: "حار" },
      ],
    },
    
    {
      id: "zalabia",
      name: "زلابية",
      image: "/public/images/zalabia.png",
      description: "حلوى مقلية مغطاة بالقطر أو العسل.",
      options: [
        { id: "syrup", name: "مع قطر" },
        { id: "honey", name: "مع عسل" },
      ],
    },
    {
      id: "pizza",
      name: "بيتزا",
      image: "/public/images/pizza.png",
      description: "بيتزا محضرة على الطريقة الفلسطينية.",
      options: [
        { id: "vegetable", name: "خضار" },
        { id: "chicken", name: "دجاج" },
        { id: "meat", name: "لحمة" },
        { id: "mixed", name: "مشكل" },
      ],
    },
    {
      id: "egg-pastry",
      name: "معجنات بيض",
      image: "/public/images/egg-pastry.png",
      description: "عجينة محشوة بالبيض والجبنة.",
      options: [
        { id: "cheese", name: "مع جبنة" },
        { id: "zaatar", name: "مع زعتر" },
      ],
    },
    {
  id: "PalestinianYellowKaak",
  name: "كعك أصفر",
  image: "/public/images/yellow-kaak.png", // تأكد من توفر الصورة المناسبة
  description: "كعك فلسطيني تقليدي يُخبز بالسميد، محشو أو يُزين بالجبنة، القزحة، والسمسم. يُقدم في المناسبات والأعياد.",
  options: [
    { id: "cheese-top", name: "كعك على وجهه جبنة" },
    { id: "plain", name: "بدون إضافات" },
    { id: "extra-nigella-sesame", name: "قزحة وسمسم زيادة" },
  ],
},

  ],
  offal: [
    {
      id: "stuffed-intestines",
      name: "محشي مصارين",
      image: "/public/images/stuffed-intestines.png",
      description: "مصارين الخاروف المحشوة بالأرز والتوابل.",
      options: [
        { id: "rice", name: "رز عادي" },
        { id: "rice-chickpeas", name: "رز مع حمص" },
        { id: "rice-vegetables", name: "رز مع خضار" },
      ],
    },
    {
      id: "tripe",
      name: "كرشة",
      image: "/public/images/tripe.png",
      description: "كرشة الخاروف المطبوخة مع التوابل والحمص.",
      options: [
        { id: "chickpeas", name: "مع حمص" },
        { id: "garlic", name: "مع ثوم" },
      ],
    },
  ],
  desserts: [
    {
      id: "harissa",
      name: "هريسة",
      image: "/public/images/harissa.png",
      description: "حلوى تقليدية مصنوعة من السميد والسكر والقطر.",
      options: [
        { id: "coconut", name: "مع جوز الهند" },
        { id: "nuts", name: "مع مكسرات" },
      ],
    },
    {
      id: "qizha",
      name: "قزحة",
      image: "/public/images/qizha.png",
      description: "حلوى تقليدية مصنوعة من الطحينة السوداء والسكر.",
      options: [
        { id: "pistachios", name: "مع فستق حلبي" },
        { id: "walnuts", name: "مع جوز" },
      ],
    },
    {
      id: "maamoul",
      name: "معمول",
      image: "/public/images/maamoul.png",
      description: "كعك محشو بالتمر أو الجوز أو الفستق الحلبي.",
      options: [
        { id: "dates", name: "تمر" },
        { id: "pistachios", name: "فستق حلبي" },
        { id: "walnuts", name: "جوز" },
        { id: "almonds", name: "لوز" },
      ],
    },
    {
      id: "halba",
      name: "صواني حلبة",
      image: "/public/images/halba.png",
      description: "حلوى تقليدية مصنوعة من الحلبة والسكر والقطر.",
      options: [
        { id: "plain", name: "عادية" },
        { id: "nuts", name: "مع مكسرات" },
      ],
    },
  ],
}
