export interface EvidenceSource {
  label: string;
  url: string;
}

export interface EvidenceImage {
  src: string;
  alt: string;
  credit?: string;
  sourceUrl?: string;
  license?: string;
  licenseUrl?: string;
}

export interface SceneEvidence {
  episode: string;
  description: string;
  verification: "verified" | "reported";
  verificationNote: string;
  sources: EvidenceSource[];
  animeImage?: EvidenceImage;
  realImage?: EvidenceImage;
}

export interface LocationDetail {
  address?: string;
  scene?: string;
  visitTip?: string;
  accessHint?: string;
  evidence?: SceneEvidence[];
}

const detailsByAnimeAndLocation: Record<string, LocationDetail> = {
  "kimi-no-na-wa::須賀神社（四ツ谷）": {
    address: "東京都新宿区須賀町5",
    scene:
      "瀧と三葉が階段ですれ違い、再会する終盤の場面で登場する場所。作品を象徴する東京側の聖地として知られています。",
    visitTip:
      "住宅地と神社の境内にあるため、写真撮影は短時間で、参拝者や近隣の方の通行を優先すると安心です。",
    accessHint: "四谷三丁目駅または信濃町駅から徒歩圏内です。",
    evidence: [
      {
        episode: "劇場版・終盤",
        description:
          "瀧と三葉が互いを探し、須賀神社脇の階段ですれ違ったあとに再会する場面。赤い手すり、階段、その先の住宅街が現地の構図と対応します。",
        verification: "verified",
        verificationNote:
          "新宿観光振興協会が、アニメ映画に登場した須賀神社の階段として紹介しています。",
        sources: [
          {
            label: "新宿観光振興協会「#新宿 フォトジェニック」",
            url: "https://kanko-shinjuku.jp/special/-/article_3578.html",
          },
        ],
        animeImage: {
          src: "/images/locations/kimi-no-na-wa-suga-stairs-ending.jpg",
          alt: "『君の名は。』終盤に登場する須賀神社脇の階段",
          credit: "サイト管理者提供",
        },
        realImage: {
          src: "/images/locations/suga-shrine-stairs.jpg",
          alt: "須賀神社脇の赤い手すりがある階段",
          credit: "Yuet Man Lee",
          sourceUrl:
            "https://commons.wikimedia.org/wiki/File:Suga_Shrine_staircase,_9_December_2024.jpg",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
        },
      },
    ],
  },
  "kimi-no-na-wa::東京・新宿駅とバスタ新宿": {
    address: "東京都渋谷区千駄ヶ谷5丁目24-55 周辺",
    scene:
      "瀧たちが暮らす東京の都市感を印象づける新宿周辺のカットで登場します。",
    visitTip:
      "駅前は人通りが非常に多いため、立ち止まって撮影する場所は周囲を確認して選ぶのがおすすめです。",
    accessHint: "JR新宿駅新南改札、バスタ新宿周辺から回れます。",
  },
  "kimi-no-na-wa::東京・新宿警察署裏の信号": {
    address: "東京都新宿区西新宿 周辺",
    scene:
      "新宿の街並みを描くカットのモデルとして知られるスポットです。",
    visitTip:
      "交差点付近では歩行者や車両の妨げにならない位置から確認してください。",
    accessHint: "新宿駅西口または都庁前駅から徒歩圏内です。",
  },
  "bocchi-the-rock::下北沢SHELTER": {
    address: "東京都世田谷区北沢2丁目6-10 仙田ビルB1",
    scene:
      "作中のライブハウス「STARRY」のモデルとして知られる下北沢のライブハウスです。",
    visitTip:
      "営業中のライブハウスなので、外観撮影や周辺滞在は店舗や来場者の迷惑にならない範囲にしましょう。",
    accessHint: "下北沢駅から徒歩数分です。",
    evidence: [
      {
        episode: "TVアニメ 第1話",
        description:
          "虹夏に連れられたひとりが、結束バンドの活動拠点「STARRY」へ初めて向かう場面。地下へ下りる外階段と入口の構成がSHELTERと対応します。",
        verification: "reported",
        verificationNote:
          "公式は作中モデル地への訪問について告知し、地域メディアと聖地データベースがSHELTERを第1話の登場地として記録しています。",
        sources: [
          {
            label: "作品公式「作中モデル地への訪問に関して」",
            url: "https://bocchi.rocks/omnibus/news/?article_id=63005",
          },
          {
            label: "下北沢ローカルメディア しもブロ",
            url: "https://www.shimokitazawa.info/news/2023/01/bocchitherocks-location/",
          },
          {
            label: "Anime Pilgrimage（第1話）",
            url: "https://www.animepilgrimage.com/ja/maps/anime/g2gEzS0je4xmz8DFES7D/bocchi-the-rock",
          },
        ],
        animeImage: {
          src: "/images/locations/bocchi-the-rock-shelter-ep01.jpg",
          alt: "『ぼっち・ざ・ろっく！』第1話に登場するSTARRY入口",
          credit: "サイト管理者提供",
        },
        realImage: {
          src: "/images/locations/shimokitazawa-shelter.jpg",
          alt: "下北沢SHELTERの地下入口へ続く階段",
          credit: "Syced",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:SHELTER.jpg",
          license: "CC0 1.0",
          licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
        },
      },
    ],
  },
  "bocchi-the-rock::下北沢駅周辺": {
    address: "東京都世田谷区北沢2丁目 周辺",
    scene:
      "結束バンドの活動エリアとして、下北沢の駅前や商店街の空気感が作品に反映されています。",
    visitTip:
      "商店街は実際に買い物や食事をする人が多いので、撮影時は店先をふさがないようにすると巡りやすいです。",
    accessHint: "小田急線・京王井の頭線の下北沢駅周辺です。",
  },
  "steins-gate::秋葉原ラジオ会館": {
    address: "東京都千代田区外神田1丁目15-16",
    scene:
      "秋葉原を舞台にした本作を象徴するスポットのひとつ。物語序盤から強い印象を残す場所です。",
    visitTip:
      "商業施設のため、館内撮影や店内での行動は各店舗のルールに従ってください。",
    accessHint: "JR秋葉原駅電気街口のすぐ近くです。",
    evidence: [
      {
        episode: "TVアニメ 第1話",
        description:
          "岡部とまゆりがドクター中鉢の発表会へ向かい、その後、屋上付近に人工衛星のような物体が現れる物語冒頭の重要な場面です。",
        verification: "verified",
        verificationNote:
          "作品公式のプロローグがラジオ会館への人工衛星墜落を記載し、公式コラボも同施設で継続して行われています。",
        sources: [
          {
            label: "『STEINS;GATE』作品公式・プロローグ",
            url: "https://steinsgate.jp/sgflash.html",
          },
          {
            label: "STEINS;GATE 15周年公式・ラジオ会館コラボ",
            url: "https://steinsgate.jp/15th/event/radiokaikan/",
          },
          {
            label: "Anime Pilgrimage（第1話）",
            url: "https://www.animepilgrimage.com/ja/maps/anime/VYoUbJBIkUiLX3HPYQGl/steins-gate",
          },
        ],
        animeImage: {
          src: "/images/locations/steins-gate-radio-kaikan-ep01.png",
          alt: "『STEINS;GATE』第1話に登場する秋葉原ラジオ会館",
          credit: "サイト管理者提供",
        },
        realImage: {
          src: "/images/locations/akihabara-radio-kaikan.jpg",
          alt: "2010年当時の秋葉原ラジオ会館",
          credit: "street viewer",
          sourceUrl:
            "https://commons.wikimedia.org/wiki/File:Akihabara_Radio_Kaikan,_2010-03-06.jpg",
          license: "CC BY 2.0",
          licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
        },
      },
    ],
  },
  "lucky-star::鷲宮神社": {
    address: "埼玉県久喜市鷲宮1丁目6-1",
    scene:
      "オープニング映像で鷲宮神社の鳥居前と同じ風景が背景として登場し、主要キャラクターの柊姉妹ゆかりの地としても扱われています。",
    visitTip:
      "現在も参拝客や地域の方が多い場所です。境内や鳥居前で撮影するときは、参拝動線をふさがないよう短時間で楽しみましょう。",
    accessHint: "東武伊勢崎線 鷲宮駅から徒歩圏内です。",
    evidence: [
      {
        episode: "TVアニメ オープニング",
        description:
          "鷲宮神社の鳥居前の風景がオープニング背景として登場し、放送後にファンが舞台地として訪れるきっかけになった場所です。",
        verification: "verified",
        verificationNote:
          "外務省の地域事例紹介が、オープニングに鷲宮神社と同じ光景が映ったことを記録しています。作品公式も鷲宮神社での公式参拝イベントを案内しています。",
        sources: [
          {
            label: "外務省・久喜市鷲宮と「らき☆すた」の取り組み",
            url: "https://www.mofa.go.jp/mofaj/gaiko/local/page24_002273.html",
          },
          {
            label: "「らき☆すた」公式・公式参拝in鷲宮",
            url: "https://www.lucky-ch.com/info/info_washinomiya.html",
          },
        ],
      },
    ],
  },
  "tenki-no-ko::田端駅周辺": {
    address: "東京都北区東田端1丁目周辺",
    scene:
      "帆高が陽菜の家へ向かう場面や、物語終盤の再会につながる田端駅南口付近の坂道として知られる場所です。",
    visitTip:
      "田端駅南口付近は生活道路です。坂道や改札付近で立ち止まる場合は、通行の妨げにならない位置を選んでください。",
    accessHint: "JR田端駅南口からすぐの崖沿いの道周辺です。",
    evidence: [
      {
        episode: "劇場版・田端周辺の場面",
        description:
          "田端駅南口を出たところにある崖沿いの道が、陽菜の住まい周辺や物語上の重要な場面の舞台として使われています。",
        verification: "verified",
        verificationNote:
          "北区立図書館の地域資料が、田端駅南口付近の崖沿いの道を『天気の子』の重要なシーンの舞台として紹介しています。",
        sources: [
          {
            label: "北区立図書館・北区の部屋だより 第123号",
            url: "https://www.library.city.kita.tokyo.jp/manage/contents/upload/5e043d585b06e.pdf",
          },
          {
            label: "Anime Pilgrimage・田端駅",
            url: "https://www.animepilgrimage.com/ja/maps/place/b710b717-1688-44b5-a423-d3c2a65285eb?ctx=anime%2CNpEZnChVAaNhV5wOpnTr%2Cweathering-with-you",
          },
        ],
      },
    ],
  },
  "koe-no-katachi::大垣市・美登鯉橋": {
    address: "岐阜県大垣市西外側町2丁目46 周辺",
    scene:
      "将也や硝子たちが集まる大切な場所として描かれ、映画のキービジュアルにも使われた大垣市の代表的な聖地です。",
    visitTip:
      "水門川沿いの遊歩道にある橋です。橋上や川沿いで撮影するときは、散策する人の通行を優先してください。",
    accessHint: "JR大垣駅南口から徒歩圏内、水門川沿いの四季の広場周辺です。",
    evidence: [
      {
        episode: "劇場版・美登鯉橋の場面",
        description:
          "美登鯉橋は、将也や硝子、友人たちが集まる重要な場所として描かれます。作品の象徴的な風景として、桜の時期の橋も印象的に扱われています。",
        verification: "verified",
        verificationNote:
          "岐阜県観光公式サイトが、美登鯉橋を『聲の形』で将也や硝子たちが集まる大切な場所として紹介しています。Anime Tourism DBにも同地点が登録されています。",
        sources: [
          {
            label: "岐阜県観光公式サイト・大垣市周辺ロケ地紹介",
            url: "https://www.kankou-gifu.jp/blog/detail_132.html",
          },
          {
            label: "Anime Tourism 聖地巡礼DB・聲の形",
            url: "https://anime-tourism.jp/t/195//",
          },
        ],
      },
    ],
  },
  "hibike-euphonium::宇治橋": {
    address: "京都府宇治市宇治",
    scene:
      "宇治の街並みを象徴する橋として、通学・移動・会話の場面などで繰り返し登場するスポットです。",
    visitTip:
      "観光客と地元の通行が多い橋です。歩道上での長時間撮影や夜間の会話は控えめにしましょう。",
    accessHint: "京阪宇治駅、JR宇治駅から徒歩圏内です。",
    evidence: [
      {
        episode: "TVアニメシリーズ・宇治市内の場面",
        description:
          "宇治橋は、宇治市内の登場スポットとして扱われており、宇治の風景と登場人物たちの日常をつなぐ場所です。",
        verification: "verified",
        verificationNote:
          "京阪電車の公式コラボページが、作品に登場した宇治のまちのスポットを巡る舞台探訪MAPを案内し、宇治橋をスポットに含めています。KITASUIも宇治橋を登場スポットとして掲載しています。",
        sources: [
          {
            label: "京阪電車×響け！ユーフォニアム 舞台探訪MAP",
            url: "https://www.keihan.co.jp/euphonium/",
          },
          {
            label: "KITASUI・響け！ユーフォニアム 宇治 登場スポット",
            url: "https://kitasuiuji.com/media/videos/eupho/area/uji/",
          },
        ],
      },
    ],
  },
  "girls-und-panzer::大洗磯前神社": {
    address: "茨城県東茨城郡大洗町磯浜町6890",
    scene:
      "大洗町内の戦車道シーンや劇場版のエキシビション戦で印象的に扱われる、大洗を代表する聖地のひとつです。",
    visitTip:
      "参拝者の多い神社です。境内や階段での撮影は参拝を優先し、階段や参道をふさがないようにしましょう。",
    accessHint: "鹿島臨海鉄道 大洗駅からバスまたは徒歩でアクセスできます。",
    evidence: [
      {
        episode: "劇場版・エキシビション戦",
        description:
          "劇場版の冒頭エキシビション戦で、あんこうチームが神社境内から階段を下りる一連の場面として知られています。",
        verification: "reported",
        verificationNote:
          "茨城県のフィルムコミッション資料が大洗磯前神社をロケ地として紹介し、複数の聖地巡礼記録でも劇場版の登場場面として照合されています。",
        sources: [
          {
            label: "いばらきフィルムコミッション・ガールズ&パンツァー ロケ地資料",
            url: "https://www.ibarakiguide.jp/ibaraki-fc/data/doc/1758081388_doc_2_0.pdf",
          },
          {
            label: "舞台探訪アーカイブ・大洗磯前神社",
            url: "https://animepilgrimage.blog.fc2.com/blog-entry-163.html",
          },
        ],
      },
    ],
  },
};

export function getLocationDetail(animeSlug: string, locationName: string) {
  return detailsByAnimeAndLocation[`${animeSlug}::${locationName}`] || null;
}

export function isLocationVerified(animeSlug: string, locationName: string) {
  return Boolean(
    getLocationDetail(animeSlug, locationName)?.evidence?.length
  );
}
