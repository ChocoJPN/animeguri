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
};

export function getLocationDetail(animeSlug: string, locationName: string) {
  return detailsByAnimeAndLocation[`${animeSlug}::${locationName}`] || null;
}

export function isLocationVerified(animeSlug: string, locationName: string) {
  return Boolean(
    getLocationDetail(animeSlug, locationName)?.evidence?.length
  );
}
