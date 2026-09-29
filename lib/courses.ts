export interface ModelCourseStop {
  locationName: string;
  title: string;
  stayMinutes: number;
  note: string;
}

export interface ModelCourse {
  slug: string;
  title: string;
  animeTitle: string;
  animeSlug: string;
  prefecture: string;
  areaLabel: string;
  description: string;
  duration: string;
  distance: string;
  transport: string;
  image: string;
  stops: ModelCourseStop[];
}

export const modelCourses: ModelCourse[] = [
  {
    slug: "kimi-no-na-wa-tokyo",
    title: "新宿から四ツ谷へ歩く",
    animeTitle: "君の名は。",
    animeSlug: "kimi-no-na-wa",
    prefecture: "tokyo",
    areaLabel: "東京・新宿／四ツ谷",
    description:
      "新宿の都市風景から、物語終盤の須賀神社へ向かう東京側のモデルコースです。",
    duration: "約2時間30分",
    distance: "約5km",
    transport: "徒歩",
    image: "/images/kimi-no-na-wa.jpg",
    stops: [
      {
        locationName: "東京・新宿警察署裏の信号",
        title: "西新宿の街並み",
        stayMinutes: 15,
        note: "交差点付近では通行を妨げない位置から街並みを確認します。",
      },
      {
        locationName: "東京・新宿駅とバスタ新宿",
        title: "新宿駅南口エリア",
        stayMinutes: 20,
        note: "駅前は混雑しやすいため、撮影時は歩行者の流れを優先します。",
      },
      {
        locationName: "須賀神社（四ツ谷）",
        title: "須賀神社脇の階段",
        stayMinutes: 25,
        note: "住宅地にある参道です。参拝者と近隣の方に配慮して短時間で巡ります。",
      },
    ],
  },
  {
    slug: "bocchi-the-rock-shimokitazawa",
    title: "結束バンドの下北沢を巡る",
    animeTitle: "ぼっち・ざ・ろっく！",
    animeSlug: "bocchi-the-rock",
    prefecture: "tokyo",
    areaLabel: "東京・下北沢",
    description:
      "下北沢駅からライブハウス周辺、公園、アーティスト写真を思わせる街角を巡ります。",
    duration: "約2時間",
    distance: "約2km",
    transport: "徒歩",
    image: "/images/bocchi-the-rock.jpg",
    stops: [
      {
        locationName: "下北沢駅周辺",
        title: "下北沢駅から出発",
        stayMinutes: 10,
        note: "東口を起点に、商店街へ向かいます。",
      },
      {
        locationName: "ビレッジバンガード下北沢店",
        title: "商店街の街角",
        stayMinutes: 15,
        note: "店先や歩道をふさがず、買い物客の通行を優先します。",
      },
      {
        locationName: "下北沢SHELTER",
        title: "STARRYのモデル地",
        stayMinutes: 15,
        note: "営業施設のため、見学目的で階段を下りず外から確認します。",
      },
      {
        locationName: "ADRIFT•reload",
        title: "ライブハウス周辺",
        stayMinutes: 15,
        note: "イベント開催時は来場者と施設利用者を優先します。",
      },
      {
        locationName: "どんぐり広場公園",
        title: "どんぐり広場公園",
        stayMinutes: 20,
        note: "近隣の生活環境に配慮して静かに滞在します。",
      },
      {
        locationName: "タイムズ 下北沢第8",
        title: "下北沢の街並み",
        stayMinutes: 10,
        note: "駐車場内へ立ち入らず、公道から安全に確認します。",
      },
    ],
  },
  {
    slug: "steins-gate-akihabara",
    title: "ラジオ会館から秋葉原を巡る",
    animeTitle: "STEINS;GATE",
    animeSlug: "steins-gate",
    prefecture: "tokyo",
    areaLabel: "東京・秋葉原",
    description:
      "秋葉原駅を起点に、ラジオ会館、神田川沿い、作品を印象づける街角を歩きます。",
    duration: "約3時間",
    distance: "約4km",
    transport: "徒歩",
    image: "/images/steins-gate.jpg",
    stops: [
      {
        locationName: "秋葉原駅・電気街口前広場",
        title: "秋葉原駅から出発",
        stayMinutes: 10,
        note: "電気街口から駅前の風景を確認します。",
      },
      {
        locationName: "秋葉原ラジオ会館",
        title: "秋葉原ラジオ会館",
        stayMinutes: 20,
        note: "現在の建物は建て替え後です。館内では各店舗の撮影ルールに従います。",
      },
      {
        locationName: "秋葉原駅南高架下",
        title: "駅南側の高架下",
        stayMinutes: 10,
        note: "通行量が多いため、立ち止まる際は周囲を確認します。",
      },
      {
        locationName: "神田ふれあい橋",
        title: "神田川沿いへ",
        stayMinutes: 15,
        note: "橋上では自転車と歩行者の通行を優先します。",
      },
      {
        locationName: "柳森神社",
        title: "柳森神社",
        stayMinutes: 20,
        note: "参拝場所としての静けさを保ち、境内のルールに従います。",
      },
      {
        locationName: "東京タイムズタワー",
        title: "秋葉原の高層住宅街",
        stayMinutes: 10,
        note: "居住施設のため敷地内へ立ち入らず、外から確認します。",
      },
      {
        locationName: "芳林公園",
        title: "芳林公園でひと休み",
        stayMinutes: 20,
        note: "公園利用者や近隣住民に配慮して休憩します。",
      },
      {
        locationName: "カフェ・メイリッシュ",
        title: "秋葉原散策の終点",
        stayMinutes: 40,
        note: "営業日と利用ルールを公式情報で確認してから訪問します。",
      },
    ],
  },
];

export function getModelCourse(slug: string) {
  return modelCourses.find((course) => course.slug === slug) || null;
}
