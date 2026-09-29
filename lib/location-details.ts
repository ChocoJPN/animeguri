export interface LocationDetail {
  address?: string;
  scene?: string;
  visitTip?: string;
  accessHint?: string;
}

const detailsByAnimeAndLocation: Record<string, LocationDetail> = {
  "kimi-no-na-wa::須賀神社（四ツ谷）": {
    address: "東京都新宿区須賀町5",
    scene:
      "瀧が階段を駆け上がる場面で知られる場所。作品を象徴する東京側の聖地として訪れる人が多いスポットです。",
    visitTip:
      "住宅地と神社の境内にあるため、写真撮影は短時間で、参拝者や近隣の方の通行を優先すると安心です。",
    accessHint: "四谷三丁目駅または信濃町駅から徒歩圏内です。",
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
  },
};

export function getLocationDetail(animeSlug: string, locationName: string) {
  return detailsByAnimeAndLocation[`${animeSlug}::${locationName}`] || null;
}
