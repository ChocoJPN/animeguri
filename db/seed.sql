-- アニメデータ
INSERT INTO anime (title, slug, year, xurl, officialurl, description, image) VALUES
('ゆるキャン△', 'yurucamp', 2018, 'https://x.com/yurucamp_anime', 'https://yurucamp.jp/', '女子高生たちがキャンプを楽しむアウトドア系アニメ。山梨県を中心に静岡県など実在のキャンプ場が多数登場する。', '/images/yurucamp.jpg'),
('SLAM DUNK', 'slam-dunk', 1993, NULL, NULL, '湘南を舞台にしたバスケットボール漫画・アニメの金字塔。鎌倉高校前駅の踏切は世界中からファンが訪れる聖地。映画「THE FIRST SLAM DUNK」で再び注目を集めた。', '/images/slam-dunk.jpg'),
('花咲くいろは', 'hanasaku-iroha', 2011, NULL, 'https://www.hanasakuiroha.jp/', '石川県の温泉旅館を舞台に、女子高生が仲居として奮闘する物語。湯涌温泉がモデル。', '/images/hanasaku-iroha.jpg'),
('氷菓', 'hyouka', 2012, NULL, 'https://www.kyotoanimation.co.jp/kotenbu/', '岐阜県高山市を舞台にした青春ミステリー。高山の古い町並みや神社が美しく描かれる。', '/images/hyouka.jpg'),
('ラブライブ！', 'lovelive', 2013, 'https://x.com/LoveLive_staff', 'https://www.lovelive-anime.jp/', '東京・秋葉原と神田明神を中心に展開するスクールアイドルアニメ。神田明神は聖地として有名。', '/images/lovelive.jpg'),
('らき☆すた', 'lucky-star', 2007, 'https://x.com/AnimeLuckystar', 'https://www.lucky-ch.com/', '埼玉県久喜市の鷲宮神社が聖地として一躍有名になった作品。アニメ聖地巡礼ブームの火付け役。', '/images/lucky-star.jpg'),
('あの日見た花の名前を僕達はまだ知らない。', 'anohana', 2011, 'https://x.com/anohana_project', 'https://www.anohana.jp/', '埼玉県秩父市を舞台にした感動の青春ドラマ。秩父橋や定林寺など多くの聖地が存在する。', '/images/anohana.jpg'),
('ガールズ＆パンツァー', 'girls-und-panzer', 2012, 'https://x.com/gaaborutoretora', 'https://girls-und-panzer.jp/', '茨城県大洗町を舞台にした戦車道アニメ。大洗町は作品と一体となった町おこしで有名。', '/images/girls-und-panzer.png'),
('夏目友人帳', 'natsume-yuujinchou', 2008, 'https://x.com/NatsumeYujincho', 'https://www.natsume-anime.jp/', '熊本県人吉市を中心とした風景が美しく描かれる妖怪ファンタジー。田園風景や神社が多数登場。', '/images/natsume-yuujinchou.png'),
('けいおん！', 'k-on', 2009, NULL,'https://www.tbs.co.jp/anime/k-on/k-on_tv/index-j.html', '滋賀県豊郷町の豊郷小学校旧校舎がモデルとなった軽音楽部アニメ。校舎は今も聖地として人気。', '/images/k-on.jpg'),
('true tears', 'true-tears', 2008, NULL, 'http://www.truetears.jp/', '富山県南砺市の城端地区を舞台にした恋愛アニメ。城端むぎや祭りとのコラボでも知られる。', '/images/true-tears.jpg'),
('サマーウォーズ', 'summer-wars', 2009, NULL, 'https://s-wars.jp/', '長野県上田市を舞台にした細田守監督のアニメ映画。上田城や別所温泉が登場する。', '/images/summer-wars.jpg'),
('たまゆら', 'tamayura', 2011, NULL, 'https://tamayura.info/hitotose/', '広島県竹原市を舞台にした写真好きの少女たちの物語。竹原の町並み保存地区が美しく描かれる。', '/images/tamayura.jpg'),
('かみちゅ！', 'kamichu', 2005, NULL, 'https://www.aniplex.co.jp/kamichu/', '広島県尾道市を舞台にした神様になった中学生の日常アニメ。尾道の坂道や渡船が登場する。', '/images/kamichu.jpg'),
('境界の彼方', 'kyoukai-no-kanata', 2013, 'https://x.com/anime_kyokai', 'https://tv.anime-kyokai.com/', '奈良県をモデルにした学園ファンタジー。奈良の風景が随所に登場する。', '/images/kyoukai-no-kanata.jpg'),
('有頂天家族', 'uchouten-kazoku', 2013, NULL, 'https://uchoten-anime.com/', '京都を舞台にしたたぬき一家の物語。下鴨神社や出町桝形商店街など京都の名所が多数登場。', '/images/uchouten-kazoku.jpg'),
('TARI TARI', 'tari-tari', 2012, 'https://x.com/taritarianime', 'https://www.ponican.jp/taritari/', '神奈川県藤沢市・江ノ島を舞台にした合唱部アニメ。江ノ電沿線の風景が美しく描かれる。', '/images/tari-tari.jpg'),
('咲-Saki-', 'saki', 2009, 'https://x.com/SakiAnime', 'http://www.saki-anime.com/', '長野県を舞台にした麻雀アニメ。長野市の善光寺周辺などが登場する。', '/images/saki.jpg'),
('ヤマノススメ', 'yama-no-susume', 2013, 'https://x.com/yamanosusume', 'https://www.yamanosusume.com/1st/', '埼玉県飯能市を舞台にした登山アニメ。天覧山や飯能市街地が実在のまま描かれる。', '/images/yama-no-susume.jpg');

-- 聖地データ
INSERT INTO location (prefecture, anime_id, name) VALUES
-- ゆるキャン△
('yamanashi', 1, '本栖湖キャンプ場'),
('yamanashi', 1, '身延駅'),
('shizuoka', 1, '浩庵キャンプ場'),
('shizuoka', 1, '三保の松原'),
-- SLAM DUNK
('kanagawa', 2, '鎌倉高校前駅踏切'),
('kanagawa', 2, '湘南海岸'),
('kanagawa', 2, '鎌倉高校前駅'),
('kanagawa', 2, '江ノ島電鉄'),
-- 花咲くいろは
('ishikawa', 3, '湯涌温泉'),
('ishikawa', 3, '金沢駅'),
-- 氷菓
('gifu', 4, '高山市古い町並み'),
('gifu', 4, '日枝神社'),
('gifu', 4, '斐太高等学校'),
-- ラブライブ！
('tokyo', 5, '神田明神'),
('tokyo', 5, '秋葉原'),
('tokyo', 5, 'UTX（ベルサール秋葉原）'),
-- らき☆すた
('saitama', 6, '鷲宮神社'),
-- あの花
('saitama', 7, '秩父橋'),
('saitama', 7, '定林寺'),
('saitama', 7, '旧秩父橋'),
-- ガルパン
('ibaraki', 8, '大洗磯前神社'),
('ibaraki', 8, '大洗マリンタワー'),
('ibaraki', 8, '大洗町商店街'),
-- 夏目友人帳
('kumamoto', 9, '人吉駅'),
('kumamoto', 9, '大畑駅'),
('kumamoto', 9, '田園風景'),
-- けいおん！
('shiga', 10, '豊郷小学校旧校舎群'),
('kyoto', 10, '修学院駅周辺'),
-- true tears
('toyama', 11, '城端駅'),
('toyama', 11, '善徳寺'),
-- サマーウォーズ
('nagano', 12, '上田城'),
('nagano', 12, '別所温泉'),
-- たまゆら
('hiroshima', 13, '竹原町並み保存地区'),
('hiroshima', 13, '竹原駅'),
-- かみちゅ！
('hiroshima', 14, '尾道市街地'),
('hiroshima', 14, '千光寺'),
-- 境界の彼方
('nara', 15, '奈良公園周辺'),
-- 有頂天家族
('kyoto', 16, '下鴨神社'),
('kyoto', 16, '出町桝形商店街'),
-- TARI TARI
('kanagawa', 17, '江ノ島'),
('kanagawa', 17, '鎌倉高校前'),
-- 咲-Saki-
('nagano', 18, '善光寺'),
-- ヤマノススメ
('saitama', 19, '天覧山'),
('saitama', 19, '飯能駅');

-- 追加アニメデータ
INSERT INTO anime (title, slug, year, xurl, officialurl, description, image) VALUES
('ゴールデンカムイ', 'golden-kamuy', 2018, NULL, 'https://kamuy-anime.com/', '北海道を舞台に、日露戦争帰りの兵士とアイヌの少女が金塊を巡る冒険を繰り広げる。小樽、旭川、網走など北海道各地の実在の風景が多数登場する。', '/images/golden-kamuy.jpg'),
('ふらいんぐうぃっち', 'flying-witch', 2016, NULL, 'http://www.flyingwitch.jp/', '青森県弘前市を舞台に、見習い魔女の少女がのんびり暮らす日常アニメ。弘前城や岩木山など弘前の風景が美しく描かれる。', '/images/flying-witch.jpg'),
('ハイキュー!!', 'haikyu', 2014, 'https://x.com/animehaikyu_com', 'https://haikyu.jp/', '宮城県を舞台にした高校バレーボールアニメ。仙台市体育館や県内各地の風景が多数登場する。', '/images/haikyu.jpg'),
('頭文字D', 'initial-d', 1998, NULL, NULL, '群馬県の峠道を舞台にした走り屋アニメ。秋名山（榛名山）、妙義山、赤城山など群馬の峠道が実在のまま描かれる。', '/images/initial-d.jpg'),
('やはり俺の青春ラブコメはまちがっている。', 'oregairu', 2013, NULL, 'https://www.tbs.co.jp/anime/oregairu/', '千葉市を舞台にした青春ラブコメ。千葉駅、稲毛海浜公園など千葉市内の実在スポットが多数登場する。', '/images/oregairu.jpg'),
('ちはやふる', 'chihayafuru', 2011, NULL, 'https://www.ntv.co.jp/chihayafuru/', '競技かるたを題材にした青春アニメ。主要キャラ綿谷新の故郷として福井県あわら市が描かれ、聖地として有名。', '/images/chihayafuru.jpg'),
('八十亀ちゃんかんさつにっき', 'yatogame-chan', 2019, NULL, 'https://yatogame.nagoya/', '名古屋の文化やあるあるをテーマにしたご当地アニメ。名古屋城、大須商店街、熱田神宮など名古屋の名所が多数登場する。', '/images/yatogame-chan.jpeg'),
('涼宮ハルヒの憂鬱', 'haruhi', 2006, NULL, 'https://www.haruhi.tv/', '兵庫県西宮市を舞台にした学園SF。西宮北口駅や甲陽園駅周辺など西宮の街並みが忠実に描かれる。', '/images/haruhi.jpg'),
('サマータイムレンダ', 'summertime-render', 2022, NULL, 'https://summertime-rendering.com/', '和歌山県の離島を舞台にしたサスペンスアニメ。友ヶ島や加太の風景がモデルとなっている。', '/images/summertime-render.jpg'),
('Free!', 'free', 2013, NULL, 'https://iwatobi-sc.com/', '鳥取県岩美町をモデルにした水泳アニメ。岩美海岸や浦富海岸の美しい風景が描かれ、聖地巡礼で盛り上がった。', '/images/free.jpg'),
('結城友奈は勇者である', 'yuki-yuna', 2014, NULL, 'https://yuyuyu.tv/', '香川県観音寺市を舞台にした魔法少女アニメ。銭形砂絵や琴弾公園など実在の風景が登場する。', '/images/yuki-yuna.jpg'),
('ゾンビランドサガ', 'zombie-land-saga', 2018, 'https://x.com/zombielandsaga', 'https://zombielandsaga.com/', '佐賀県を舞台にしたゾンビアイドルアニメ。唐津城、嬉野温泉、佐賀城など佐賀の名所が多数登場し、佐賀県の知名度向上に貢献した。', '/images/zombie-land-saga.jpg'),
('ばらかもん', 'barakamon', 2014, NULL, 'https://www.barakamon.jp/', '長崎県五島列島を舞台にした書道家の島暮らしアニメ。五島の美しい自然や集落の風景が温かく描かれる。', '/images/barakamon.jpg'),
('進撃の巨人', 'shingeki-no-kyojin', 2013, NULL, 'https://shingeki.tv/', '作者・諫山創の出身地である大分県日田市の山間の風景が壁の中の世界のモデルとされる。日田市には進撃の巨人ミュージアムがある。', '/images/shingeki-no-kyojin.jpg'),
('推しの子', 'oshi-no-ko', 2023, NULL, 'https://ichigoproduction.com/', '物語の序盤は宮崎県の田舎町が舞台。主人公が産婦人科医として働く宮崎の自然豊かな風景が描かれる。', '/images/oshi-no-ko.jpg'),
('秒速5センチメートル', 'byousoku-5cm', 2007, NULL, NULL, '新海誠監督のアニメ映画。第一話は栃木県岩舟駅での再会、第三話は鹿児島県種子島が舞台。各地の風景が美しく描かれる。', '/images/byousoku-5cm.jpg'),
('はるかなレシーブ', 'harukana-receive', 2018, NULL, 'https://www.harukana-receive.jp/', '沖縄県を舞台にしたビーチバレーアニメ。那覇市や北谷町のビーチなど沖縄の美しい海岸が描かれる。', '/images/harukana-receive.png'),
('呪術廻戦', 'jujutsu-kaisen', 2020, 'https://x.com/animejujutsu', 'https://jujutsukaisen.jp/', '呪いをテーマにしたダークファンタジーバトルアニメ。渋谷を中心に東京都内各地が舞台として描かれ、特に渋谷事変編では渋谷駅周辺が重要な舞台となる。', '/images/jujutsu-kaisen.jpg');

-- 追加聖地データ
INSERT INTO location (prefecture, anime_id, name) VALUES
-- ゴールデンカムイ (ID=20)
('hokkaido', 20, '小樽運河'),
('hokkaido', 20, '旭川第七師団跡'),
('hokkaido', 20, '網走監獄'),
-- ふらいんぐうぃっち (ID=21)
('aomori', 21, '弘前城'),
('aomori', 21, '岩木山'),
-- ハイキュー!! (ID=22)
('miyagi', 22, '仙台市体育館'),
('miyagi', 22, '仙台駅'),
-- 頭文字D (ID=23)
('gunma', 23, '榛名山（秋名山）'),
('gunma', 23, '妙義山'),
('gunma', 23, '赤城山'),
-- やはり俺の青春ラブコメはまちがっている。 (ID=24)
('chiba', 24, '千葉駅'),
('chiba', 24, '稲毛海浜公園'),
-- ちはやふる (ID=25)
('fukui', 25, 'あわら市（綿谷新の故郷）'),
('fukui', 25, '芦原温泉駅'),
-- 八十亀ちゃんかんさつにっき (ID=26)
('aichi', 26, '名古屋城'),
('aichi', 26, '大須商店街'),
('aichi', 26, '熱田神宮'),
-- 涼宮ハルヒの憂鬱 (ID=27)
('hyogo', 27, '西宮北口駅'),
('hyogo', 27, '甲陽園駅周辺'),
('hyogo', 27, '県立西宮北高校'),
-- サマータイムレンダ (ID=28)
('wakayama', 28, '友ヶ島'),
('wakayama', 28, '加太海岸'),
-- Free! (ID=29)
('tottori', 29, '岩美海岸'),
('tottori', 29, '浦富海岸'),
-- 結城友奈は勇者である (ID=30)
('kagawa', 30, '銭形砂絵'),
('kagawa', 30, '琴弾公園'),
-- ゾンビランドサガ (ID=31)
('saga', 31, '唐津城'),
('saga', 31, '嬉野温泉'),
('saga', 31, '佐賀城'),
-- ばらかもん (ID=32)
('nagasaki', 32, '五島列島'),
('nagasaki', 32, '福江港'),
-- 進撃の巨人 (ID=33)
('oita', 33, '大山ダム（キャラクター像）'),
('oita', 33, '進撃の巨人ミュージアム'),
-- 推しの子 (ID=34)
('miyazaki', 34, '高千穂'),
('miyazaki', 34, '宮崎市内'),
-- 秒速5センチメートル (ID=35)
('tochigi', 35, '岩舟駅'),
('kagoshima', 35, '種子島宇宙センター'),
('kagoshima', 35, '種子島'),
-- はるかなレシーブ (ID=36)
('okinawa', 36, '那覇市ビーチ'),
('okinawa', 36, '北谷町アラハビーチ'),
-- 呪術廻戦 (ID=37)
('tokyo', 37, '渋谷駅周辺'),
('tokyo', 37, '渋谷ヒカリエ'),
('miyagi', 37, '仙台市内');

-- 追加アニメデータ3
INSERT INTO anime (title, slug, year, xurl, officialurl, description, image) VALUES
('鬼滅の刃', 'kimetsu-no-yaiba', 2019, 'https://x.com/kaborimakura', 'https://kimetsu.com/anime/', '大正時代を舞台にした鬼退治アニメ。福岡県太宰府市の竈門神社が主人公の名前の由来とされ聖地として大人気。東京・浅草の街並みも登場する。', '/images/kimetsu-no-yaiba.jpg'),
('君の名は。', 'kimi-no-na-wa', 2016, NULL, NULL, '新海誠監督の大ヒット映画。岐阜県飛騨市の飛騨古川駅や気多若宮神社、東京四ツ谷の須賀神社、長野県の諏訪湖が聖地として有名。', '/images/kimi-no-na-wa.jpg'),
('天気の子', 'tenki-no-ko', 2019, NULL, NULL, '新海誠監督のアニメ映画。東京の田端駅周辺や六本木ヒルズ、高円寺の気象神社など都内各所が舞台として描かれる。', '/images/tenki-no-ko.jpg'),
('すずめの戸締まり', 'suzume-no-tojimari', 2022, NULL, 'https://suzume-tojimari-movie.jp/', '新海誠監督のロードムービー。宮崎県日南市から愛媛、神戸、東京へと旅する物語で各地の風景が実在のまま描かれる。', '/images/suzume-no-tojimari.jpg'),
('STEINS;GATE', 'steins-gate', 2011, NULL, NULL, '東京・秋葉原を舞台にしたSFアニメ。秋葉原ラジオ会館や柳森神社など周辺の街並みが忠実に再現されている。', '/images/steins-gate.jpg'),
('新世紀エヴァンゲリオン', 'evangelion', 1995, NULL, 'https://www.evangelion.co.jp/', '第3新東京市のモデルとなった神奈川県箱根町が聖地。仙石原や芦ノ湖など箱根の風景が随所に登場する。', '/images/evangelion.jpg'),
('ラブライブ！サンシャイン!!', 'lovelive-sunshine', 2016, 'https://x.com/LoveLive_staff', NULL, '静岡県沼津市を舞台にしたスクールアイドルアニメ。内浦や淡島など沼津の風景が美しく描かれ町おこしにも貢献。', '/images/lovelive-sunshine.jpg'),
('響け！ユーフォニアム', 'hibike-euphonium', 2015, NULL, 'https://anime-eupho.com/', '京都府宇治市を舞台にした吹奏楽アニメ。宇治橋や大吉山展望台など宇治の風景が美しく描かれる。', '/images/hibike-euphonium.jpg'),
('ぼっち・ざ・ろっく！', 'bocchi-the-rock', 2022, NULL, 'https://bocchi.rocks/', '東京・下北沢を中心に描かれるバンドアニメ。下北沢のライブハウスや商店街が実在のまま登場する。', '/images/bocchi-the-rock.jpg'),
('からかい上手の高木さん', 'karakai-takagi-san', 2018, NULL, NULL, '香川県小豆島を舞台にした青春ラブコメ。土庄港やエンジェルロードなど島の風景が描かれる。', '/images/karakai-takagi-san.jpg'),
('僕だけがいない街', 'boku-dake-ga-inai-machi', 2016, NULL, NULL, '北海道苫小牧市を舞台にしたサスペンスアニメ。苫小牧の冬景色や街並みが物語の重要な背景となっている。', '/images/boku-dake-ga-inai-machi.jpg'),
('青春ブタ野郎はバニーガール先輩の夢を見ない', 'aobuta', 2018, NULL, 'https://ao-buta.com/', '神奈川県藤沢市・湘南エリアを舞台にした青春ファンタジー。藤沢駅や七里ヶ浜、江ノ島が登場する。', '/images/aobuta.jpg'),
('宇宙よりも遠い場所', 'yorimoi', 2018, NULL, 'http://yorimoi.com/', '群馬県館林市を舞台に南極を目指す少女たちの物語。館林駅やつつじが岡公園など実在の風景が描かれる。', '/images/yorimoi.jpg'),
('四月は君の嘘', 'shigatsu-wa-kimi-no-uso', 2014, NULL, NULL, '東京都練馬区を中心に描かれる音楽青春アニメ。練馬区の公園や街並みが作品のモデルとなっている。', '/images/shigatsu-wa-kimi-no-uso.jpg'),
('3月のライオン', 'sangatsu-no-lion', 2016, NULL, NULL, '東京都中央区月島を舞台にした将棋アニメ。月島のもんじゃストリートや隅田川沿いの風景が描かれる。', '/images/sangatsu-no-lion.jpg'),
('月がきれい', 'tsuki-ga-kirei', 2017, NULL, NULL, '埼玉県川越市を舞台にした中学生の恋愛アニメ。川越の蔵造りの町並みや氷川神社が美しく描かれる。', '/images/tsuki-ga-kirei.jpg'),
('のんのんびより', 'non-non-biyori', 2013, NULL, NULL, '埼玉県小川町など田舎の風景をモデルにしたほのぼの日常アニメ。のどかな田園風景が魅力的に描かれる。', '/images/non-non-biyori.jpg'),
('言の葉の庭', 'kotonoha-no-niwa', 2013, NULL, NULL, '新海誠監督のアニメ映画。東京・新宿御苑が主要な舞台で、雨の日の日本庭園が美しく描かれる。', '/images/kotonoha-no-niwa.jpg'),
('リコリス・リコイル', 'lycoris-recoil', 2022, NULL, 'https://lycoris-recoil.com/', '東京都墨田区を中心に描かれるガンアクションアニメ。東京スカイツリー周辺や浅草の街並みが登場する。', '/images/lycoris-recoil.jpg'),
('色づく世界の明日から', 'iroduku', 2018, NULL, NULL, '長崎県長崎市を舞台にした青春ファンタジー。グラバー園や長崎の坂道、港の風景が美しく描かれる。', '/images/iroduku.jpg'),
('凪のあすから', 'nagi-no-asukara', 2013, NULL, NULL, '三重県熊野市をモデルにした海辺の町のファンタジー。熊野の海岸線や漁港の風景が幻想的に描かれる。', '/images/nagi-no-asukara.jpg'),
('ひぐらしのなく頃に', 'higurashi', 2006, NULL, NULL, '岐阜県白川郷をモデルにしたミステリーホラー。白川郷の合掌造り集落が作品の舞台「雛見沢」のモデル。', '/images/higurashi.jpg'),
('デュラララ!!', 'durarara', 2010, NULL, NULL, '東京・池袋を舞台にした群像劇。池袋駅東口やサンシャイン60通りなど池袋の街並みが忠実に描かれる。', '/images/durarara.jpg'),
('とある科学の超電磁砲', 'toaru-kagaku-no-railgun', 2009, NULL, 'https://toaru-project.com/', '東京都立川市をモデルにした「学園都市」が舞台のSFアニメ。立川駅周辺やモノレールが登場する。', '/images/toaru-kagaku-no-railgun.jpg'),
('名探偵コナン', 'detective-conan', 1996, NULL, NULL, '作者・青山剛昌の出身地である鳥取県北栄町が聖地。青山剛昌ふるさと館やコナン通りが人気スポット。', '/images/detective-conan.jpg'),
('スーパーカブ', 'super-cub', 2021, NULL, NULL, '山梨県北杜市を舞台にしたバイクアニメ。北杜市の自然豊かな風景や通学路が実在のまま描かれる。', '/images/super-cub.jpg'),
('白い砂のアクアトープ', 'aquatope', 2021, NULL, NULL, '沖縄県南城市を舞台にした水族館アニメ。南城市の海岸や沖縄の自然が美しく描かれる。', '/images/aquatope.jpg'),
('かげきしょうじょ!!', 'kageki-shoujo', 2021, NULL, NULL, '兵庫県宝塚市をモデルにした歌劇アニメ。宝塚大劇場周辺の街並みが作品の舞台となっている。', '/images/kageki-shoujo.jpg'),
('スキップとローファー', 'skip-to-loafer', 2023, NULL, 'https://skip-and-loafer.com/', '主人公の故郷として石川県能登地方が描かれる青春アニメ。能登の自然豊かな風景が印象的に登場する。', '/images/skip-to-loafer.jpg'),
('放課後ていぼう日誌', 'houkago-teibou-nisshi', 2020, NULL, NULL, '熊本県芦北町を舞台にした釣りアニメ。芦北の海岸や堤防、のどかな港町の風景が描かれる。', '/images/houkago-teibou-nisshi.jpg');

-- 追加聖地データ3
INSERT INTO location (prefecture, anime_id, name) VALUES
-- 鬼滅の刃 (ID=38)
('fukuoka', 38, '竈門神社（太宰府市）'),
('tokyo', 38, '浅草寺周辺'),
('nara', 38, '葛木坐火雷神社'),
-- 君の名は。 (ID=39)
('gifu', 39, '飛騨古川駅'),
('tokyo', 39, '須賀神社（四ツ谷）'),
('nagano', 39, '諏訪湖'),
-- 天気の子 (ID=40)
('tokyo', 40, '田端駅周辺'),
('tokyo', 40, '六本木ヒルズ展望台'),
('tokyo', 40, '気象神社（高円寺）'),
-- すずめの戸締まり (ID=41)
('miyazaki', 41, '日南市油津'),
('ehime', 41, '八幡浜港'),
('hyogo', 41, '神戸市'),
-- STEINS;GATE (ID=42)
('tokyo', 42, '秋葉原ラジオ会館'),
('tokyo', 42, '柳森神社'),
-- 新世紀エヴァンゲリオン (ID=43)
('kanagawa', 43, '箱根仙石原'),
('kanagawa', 43, '芦ノ湖'),
-- ラブライブ！サンシャイン!! (ID=44)
('shizuoka', 44, '沼津市内浦'),
('shizuoka', 44, '淡島'),
-- 響け！ユーフォニアム (ID=45)
('kyoto', 45, '宇治橋'),
('kyoto', 45, '大吉山展望台'),
('kyoto', 45, '京阪宇治駅'),
-- ぼっち・ざ・ろっく！ (ID=46)
('tokyo', 46, '下北沢'),
-- からかい上手の高木さん (ID=47)
('kagawa', 47, '小豆島土庄港'),
('kagawa', 47, 'エンジェルロード'),
-- 僕だけがいない街 (ID=48)
('hokkaido', 48, '苫小牧市'),
-- 青春ブタ野郎はバニーガール先輩の夢を見ない (ID=49)
('kanagawa', 49, '藤沢駅'),
('kanagawa', 49, '七里ヶ浜'),
-- 宇宙よりも遠い場所 (ID=50)
('gunma', 50, '館林駅'),
('gunma', 50, 'つつじが岡公園'),
-- 四月は君の嘘 (ID=51)
('tokyo', 51, '練馬区周辺'),
-- 3月のライオン (ID=52)
('tokyo', 52, '月島'),
('tokyo', 52, '勝どき橋'),
-- 月がきれい (ID=53)
('saitama', 53, '川越市蔵造りの町並み'),
('saitama', 53, '川越氷川神社'),
-- のんのんびより (ID=54)
('saitama', 54, '小川町'),
-- 言の葉の庭 (ID=55)
('tokyo', 55, '新宿御苑'),
-- リコリス・リコイル (ID=56)
('tokyo', 56, '東京スカイツリー周辺'),
('tokyo', 56, '浅草'),
-- 色づく世界の明日から (ID=57)
('nagasaki', 57, 'グラバー園'),
('nagasaki', 57, '長崎市内'),
-- 凪のあすから (ID=58)
('mie', 58, '熊野市'),
('mie', 58, '熊野灘沿岸'),
-- ひぐらしのなく頃に (ID=59)
('gifu', 59, '白川郷'),
-- デュラララ!! (ID=60)
('tokyo', 60, '池袋駅東口'),
('tokyo', 60, 'サンシャイン60通り'),
-- とある科学の超電磁砲 (ID=61)
('tokyo', 61, '立川駅周辺'),
('tokyo', 61, '多摩モノレール'),
-- 名探偵コナン (ID=62)
('tottori', 62, '青山剛昌ふるさと館（北栄町）'),
('tottori', 62, 'コナン通り'),
-- スーパーカブ (ID=63)
('yamanashi', 63, '北杜市'),
-- 白い砂のアクアトープ (ID=64)
('okinawa', 64, '南城市'),
-- かげきしょうじょ!! (ID=65)
('hyogo', 65, '宝塚大劇場周辺'),
-- スキップとローファー (ID=66)
('ishikawa', 66, '能登地方'),
-- 放課後ていぼう日誌 (ID=67)
('kumamoto', 67, '芦北町'),
('kumamoto', 67, '芦北海岸');
