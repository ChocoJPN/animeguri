export interface Prefecture {
  code: number;
  slug: string;
  nameJa: string;
  nameEn: string;
  region: string;
}

export const prefectures: Prefecture[] = [
  { code: 1, slug: "hokkaido", nameJa: "北海道", nameEn: "Hokkaido", region: "北海道" },
  { code: 2, slug: "aomori", nameJa: "青森県", nameEn: "Aomori", region: "東北" },
  { code: 3, slug: "iwate", nameJa: "岩手県", nameEn: "Iwate", region: "東北" },
  { code: 4, slug: "miyagi", nameJa: "宮城県", nameEn: "Miyagi", region: "東北" },
  { code: 5, slug: "akita", nameJa: "秋田県", nameEn: "Akita", region: "東北" },
  { code: 6, slug: "yamagata", nameJa: "山形県", nameEn: "Yamagata", region: "東北" },
  { code: 7, slug: "fukushima", nameJa: "福島県", nameEn: "Fukushima", region: "東北" },
  { code: 8, slug: "ibaraki", nameJa: "茨城県", nameEn: "Ibaraki", region: "関東" },
  { code: 9, slug: "tochigi", nameJa: "栃木県", nameEn: "Tochigi", region: "関東" },
  { code: 10, slug: "gunma", nameJa: "群馬県", nameEn: "Gunma", region: "関東" },
  { code: 11, slug: "saitama", nameJa: "埼玉県", nameEn: "Saitama", region: "関東" },
  { code: 12, slug: "chiba", nameJa: "千葉県", nameEn: "Chiba", region: "関東" },
  { code: 13, slug: "tokyo", nameJa: "東京都", nameEn: "Tokyo", region: "関東" },
  { code: 14, slug: "kanagawa", nameJa: "神奈川県", nameEn: "Kanagawa", region: "関東" },
  { code: 15, slug: "niigata", nameJa: "新潟県", nameEn: "Niigata", region: "中部" },
  { code: 16, slug: "toyama", nameJa: "富山県", nameEn: "Toyama", region: "中部" },
  { code: 17, slug: "ishikawa", nameJa: "石川県", nameEn: "Ishikawa", region: "中部" },
  { code: 18, slug: "fukui", nameJa: "福井県", nameEn: "Fukui", region: "中部" },
  { code: 19, slug: "yamanashi", nameJa: "山梨県", nameEn: "Yamanashi", region: "中部" },
  { code: 20, slug: "nagano", nameJa: "長野県", nameEn: "Nagano", region: "中部" },
  { code: 21, slug: "gifu", nameJa: "岐阜県", nameEn: "Gifu", region: "中部" },
  { code: 22, slug: "shizuoka", nameJa: "静岡県", nameEn: "Shizuoka", region: "中部" },
  { code: 23, slug: "aichi", nameJa: "愛知県", nameEn: "Aichi", region: "中部" },
  { code: 24, slug: "mie", nameJa: "三重県", nameEn: "Mie", region: "近畿" },
  { code: 25, slug: "shiga", nameJa: "滋賀県", nameEn: "Shiga", region: "近畿" },
  { code: 26, slug: "kyoto", nameJa: "京都府", nameEn: "Kyoto", region: "近畿" },
  { code: 27, slug: "osaka", nameJa: "大阪府", nameEn: "Osaka", region: "近畿" },
  { code: 28, slug: "hyogo", nameJa: "兵庫県", nameEn: "Hyogo", region: "近畿" },
  { code: 29, slug: "nara", nameJa: "奈良県", nameEn: "Nara", region: "近畿" },
  { code: 30, slug: "wakayama", nameJa: "和歌山県", nameEn: "Wakayama", region: "近畿" },
  { code: 31, slug: "tottori", nameJa: "鳥取県", nameEn: "Tottori", region: "中国" },
  { code: 32, slug: "shimane", nameJa: "島根県", nameEn: "Shimane", region: "中国" },
  { code: 33, slug: "okayama", nameJa: "岡山県", nameEn: "Okayama", region: "中国" },
  { code: 34, slug: "hiroshima", nameJa: "広島県", nameEn: "Hiroshima", region: "中国" },
  { code: 35, slug: "yamaguchi", nameJa: "山口県", nameEn: "Yamaguchi", region: "中国" },
  { code: 36, slug: "tokushima", nameJa: "徳島県", nameEn: "Tokushima", region: "四国" },
  { code: 37, slug: "kagawa", nameJa: "香川県", nameEn: "Kagawa", region: "四国" },
  { code: 38, slug: "ehime", nameJa: "愛媛県", nameEn: "Ehime", region: "四国" },
  { code: 39, slug: "kochi", nameJa: "高知県", nameEn: "Kochi", region: "四国" },
  { code: 40, slug: "fukuoka", nameJa: "福岡県", nameEn: "Fukuoka", region: "九州" },
  { code: 41, slug: "saga", nameJa: "佐賀県", nameEn: "Saga", region: "九州" },
  { code: 42, slug: "nagasaki", nameJa: "長崎県", nameEn: "Nagasaki", region: "九州" },
  { code: 43, slug: "kumamoto", nameJa: "熊本県", nameEn: "Kumamoto", region: "九州" },
  { code: 44, slug: "oita", nameJa: "大分県", nameEn: "Oita", region: "九州" },
  { code: 45, slug: "miyazaki", nameJa: "宮崎県", nameEn: "Miyazaki", region: "九州" },
  { code: 46, slug: "kagoshima", nameJa: "鹿児島県", nameEn: "Kagoshima", region: "九州" },
  { code: 47, slug: "okinawa", nameJa: "沖縄県", nameEn: "Okinawa", region: "九州" },
];

export const prefectureBySlug = new Map(prefectures.map((p) => [p.slug, p]));
export const prefectureByCode = new Map(prefectures.map((p) => [p.code, p]));
