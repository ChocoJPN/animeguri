-- 既存データをクリア（locationはanimeに依存しているので先に削除）
DELETE FROM location;
DELETE FROM anime;

-- アニメデータ
INSERT INTO anime (title, slug, year, xurl, officialurl, description, image) VALUES
('ゆるキャン△', 'yurucamp', 2018, 'https://x.com/yurucamp_anime', 'https://yurucamp.jp/', '女子高生たちがキャンプを楽しむアウトドア系アニメ。山梨県を中心に静岡県など実在のキャンプ場が多数登場する。', '/images/yurucamp.jpg'),
('SLAM DUNK', 'slam-dunk', 1993, NULL, NULL, '湘南を舞台にしたバスケットボール漫画・アニメの金字塔。鎌倉高校前駅の踏切は世界中からファンが訪れる聖地。映画「THE FIRST SLAM DUNK」で再び注目を集めた。', '/images/slam-dunk.jpg'),
('花咲くいろは', 'hanasaku-iroha', 2011, NULL, 'https://www.hanasakuiroha.jp/', '石川県の温泉旅館を舞台に、女子高生が仲居として奮闘する物語。湯涌温泉がモデル。', '/images/hanasaku-iroha.jpg'),
('氷菓', 'hyouka', 2012, NULL, 'https://www.kyotoanimation.co.jp/kotenbu/', '岐阜県高山市を舞台にした青春ミステリー。高山の古い町並みや神社が美しく描かれる。', '/images/hyouka.jpg'),
('ラブライブ！', 'lovelive', 2013, 'https://x.com/LoveLive_staff', 'https://www.lovelive-anime.jp/', '東京・秋葉原と神田明神を中心に展開するスクールアイドルアニメ。神田明神は聖地として有名。', '/images/lovelive.jpg'),
('らき☆すた', 'lucky-star', 2007, 'https://x.com/AnimeLuckystar', 'https://www.lucky-ch.com/', '埼玉県久喜市の鷲宮神社が聖地として一躍有名になった作品。アニメ聖地巡礼ブームの火付け役。', '/images/lucky-star.jpg'),
('あの日見た花の名前を僕達はまだ知らない。', 'anohana', 2011, 'https://x.com/anohana_project', 'https://www.anohana.jp/', '埼玉県秩父市を舞台にした感動の青春ドラマ。秩父橋や定林寺など多くの聖地が存在する。', '/images/anohana.jpg'),
('ガールズ＆パンツァー', 'girls-und-panzer', 2012, 'https://x.com/garupan', 'https://girls-und-panzer.jp/', '茨城県大洗町を舞台にした戦車道アニメ。大洗町は作品と一体となった町おこしで有名。', '/images/girls-und-panzer.png'),
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
('ゴールデンカムイ', 'golden-kamuy', 2018, 'https://x.com/kamuy_anime', 'https://kamuy-anime.com/', '北海道を舞台に、日露戦争帰りの兵士とアイヌの少女が金塊を巡る冒険を繰り広げる。小樽、旭川、網走など北海道各地の実在の風景が多数登場する。', '/images/golden-kamuy.jpg'),
('ふらいんぐうぃっち', 'flying-witch', 2016, 'https://x.com/flying_tv', 'https://www.vap.co.jp/flyingwitch/', '青森県弘前市を舞台に、見習い魔女の少女がのんびり暮らす日常アニメ。弘前城や岩木山など弘前の風景が美しく描かれる。', '/images/flying-witch.jpg'),
('ハイキュー!!', 'haikyu', 2014, 'https://x.com/animehaikyu_com', 'https://haikyu.jp/', '宮城県を舞台にした高校バレーボールアニメ。仙台市体育館や県内各地の風景が多数登場する。', '/images/haikyu.jpg'),
('頭文字D', 'initial-d', 1998, NULL, NULL, '群馬県の峠道を舞台にした走り屋アニメ。秋名山（榛名山）、妙義山、赤城山など群馬の峠道が実在のまま描かれる。', '/images/initial-d.jpg'),
('やはり俺の青春ラブコメはまちがっている。', 'oregairu', 2013, 'https://x.com/anime_oregairu?lang=ja', 'https://www.tbs.co.jp/anime/oregairu/', '千葉市を舞台にした青春ラブコメ。千葉駅、稲毛海浜公園など千葉市内の実在スポットが多数登場する。', '/images/oregairu.jpg'),
('ちはやふる', 'chihayafuru', 2011, NULL, 'https://www.ntv.co.jp/chihayafuru/', '競技かるたを題材にした青春アニメ。主要キャラ綿谷新の故郷として福井県あわら市が描かれ、聖地として有名。', '/images/chihayafuru.jpg'),
('八十亀ちゃんかんさつにっき', 'yatogame-chan', 2019, NULL, 'https://yatogame.nagoya/', '名古屋の文化やあるあるをテーマにしたご当地アニメ。名古屋城、大須商店街、熱田神宮など名古屋の名所が多数登場する。', '/images/yatogame-chan.jpeg'),
('涼宮ハルヒの憂鬱', 'haruhi', 2006, 'https://x.com/haruhi_official', 'https://www.haruhi.tv/', '兵庫県西宮市を舞台にした学園SF。西宮北口駅や甲陽園駅周辺など西宮の街並みが忠実に描かれる。', '/images/haruhi.jpg'),
('サマータイムレンダ', 'summertime-render', 2022, 'https://x.com/summertime_PR', 'https://summertime-anime.com/', '和歌山県の離島を舞台にしたサスペンスアニメ。友ヶ島や加太の風景がモデルとなっている。', '/images/summertime-render.png'),
('Free!', 'free', 2013, NULL, 'https://iwatobi-sc.com/', '鳥取県岩美町をモデルにした水泳アニメ。岩美海岸や浦富海岸の美しい風景が描かれ、聖地巡礼で盛り上がった。', '/images/free.jpg'),
('結城友奈は勇者である', 'yuki-yuna', 2014, 'https://x.com/anime_yukiyuna', 'https://yuyuyu.tv/', '香川県観音寺市を舞台にした魔法少女アニメ。銭形砂絵や琴弾公園など実在の風景が登場する。', '/images/yuki-yuna.jpg'),
('ゾンビランドサガ', 'zombie-land-saga', 2018, 'https://x.com/zombielandsaga', 'https://zombielandsaga.com/', '佐賀県を舞台にしたゾンビアイドルアニメ。唐津城、嬉野温泉、佐賀城など佐賀の名所が多数登場し、佐賀県の知名度向上に貢献した。', '/images/zombie-land-saga.jpg'),
('ばらかもん', 'barakamon', 2014, 'https://x.com/brkmn_anime', 'https://www.barakamon.jp/', '長崎県五島列島を舞台にした書道家の島暮らしアニメ。五島の美しい自然や集落の風景が温かく描かれる。', '/images/barakamon.jpg'),
('進撃の巨人', 'shingeki-no-kyojin', 2013, 'https://x.com/anime_shingeki', 'https://shingeki.tv/', '作者・諫山創の出身地である大分県日田市の山間の風景が壁の中の世界のモデルとされる。日田市には進撃の巨人ミュージアムがある。', '/images/shingeki-no-kyojin.jpg'),
('推しの子', 'oshi-no-ko', 2023, 'https://x.com/anime_oshinoko', 'https://ichigoproduction.com/', '物語の序盤は宮崎県の田舎町が舞台。主人公が産婦人科医として働く宮崎の自然豊かな風景が描かれる。', '/images/oshi-no-ko.jpg'),
('秒速5センチメートル', 'byousoku-5cm', 2007, NULL, 'https://www.cwfilms.jp/5cm/', '新海誠監督のアニメ映画。第一話は栃木県岩舟駅での再会、第三話は鹿児島県種子島が舞台。各地の風景が美しく描かれる。', '/images/byousoku-5cm.jpg'),
('はるかなレシーブ', 'harukana-receive', 2018, 'https://x.com/harukana_anime', 'https://www.harukana-receive.jp/', '沖縄県を舞台にしたビーチバレーアニメ。那覇市や北谷町のビーチなど沖縄の美しい海岸が描かれる。', '/images/harukana-receive.png'),
('呪術廻戦', 'jujutsu-kaisen', 2020, 'https://x.com/animejujutsu', 'https://jujutsukaisen.jp/', '呪いをテーマにしたダークファンタジーバトルアニメ。渋谷を中心に東京都内各地が舞台として描かれ、特に渋谷事変編では渋谷駅周辺が重要な舞台となる。', '/images/jujutsu-kaisen.jpg');

-- 追加聖地データ
INSERT INTO location (prefecture, anime_id, name) VALUES
-- ゴールデンカムイ (ID=20)
('hokkaido', 20, '小樽運河'),
('hokkaido', 20, '旭川第七師団跡'),
('hokkaido', 20, '網走監獄'),
('hokkaido', 20, '北海道開拓の村'),
-- ふらいんぐうぃっち (ID=21)
('aomori', 21, '弘前公園'),
('aomori', 21, '岩木山神社'),
('aomori', 21, 'ミズバショウ沼公園'),
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
('tokyo', 37, '吉祥寺プラザ'),
('tokyo', 37, 'ボートレース多摩川'),
('iwate', 37, '正法寺');

-- 追加アニメデータ3
INSERT INTO anime (title, slug, year, xurl, officialurl, description, image) VALUES
('鬼滅の刃', 'kimetsu-no-yaiba', 2019, 'https://x.com/kimetsu_off', 'https://kimetsu.com/anime/', '大正時代を舞台にした鬼退治アニメ。福岡県太宰府市の竈門神社が主人公の名前の由来とされ聖地として大人気。東京・浅草の街並みも登場する。', '/images/kimetsu-no-yaiba.jpg'),
('君の名は。', 'kimi-no-na-wa', 2016, 'https://x.com/kiminona_movie', 'https://www.kiminona.com/', '新海誠監督の大ヒット映画。岐阜県飛騨市の飛騨古川駅や気多若宮神社、東京四ツ谷の須賀神社、長野県の諏訪湖が聖地として有名。', '/images/kimi-no-na-wa.jpg'),
('天気の子', 'tenki-no-ko', 2019, 'https://x.com/tenkinoko_movie', 'https://tenkinoko.com/', '新海誠監督のアニメ映画。東京の田端駅周辺や六本木ヒルズ、高円寺の気象神社など都内各所が舞台として描かれる。', '/images/tenki-no-ko.jpg'),
('すずめの戸締まり', 'suzume-no-tojimari', 2022, NULL, 'https://suzume-tojimari-movie.jp/', '新海誠監督のロードムービー。宮崎県日南市から愛媛、神戸、東京へと旅する物語で各地の風景が実在のまま描かれる。', '/images/suzume-no-tojimari.jpg'),
('STEINS;GATE', 'steins-gate', 2011, 'https://x.com/SG_anime', 'http://steinsgate.tv/index.html', '東京・秋葉原を舞台にしたSFアニメ。秋葉原ラジオ会館や柳森神社など周辺の街並みが忠実に再現されている。', '/images/steins-gate.jpg'),
('新世紀エヴァンゲリオン', 'evangelion', 1995, NULL, 'https://www.evangelion.co.jp/', '第3新東京市のモデルとなった神奈川県箱根町が聖地。仙石原や芦ノ湖など箱根の風景が随所に登場する。', '/images/evangelion.jpg'),
('ラブライブ！サンシャイン!!', 'lovelive-sunshine', 2016, 'https://x.com/LoveLive_staff', 'https://www.lovelive-anime.jp/uranohoshi/', '静岡県沼津市を舞台にしたスクールアイドルアニメ。内浦や淡島など沼津の風景が美しく描かれ町おこしにも貢献。', '/images/lovelive-sunshine.jpg'),
('響け！ユーフォニアム', 'hibike-euphonium', 2015, 'https://x.com/anime_eupho', 'https://anime-eupho.com/', '京都府宇治市を舞台にした吹奏楽アニメ。宇治橋や大吉山展望台など宇治の風景が美しく描かれる。', '/images/hibike-euphonium.jpg'),
('ぼっち・ざ・ろっく！', 'bocchi-the-rock', 2022, 'https://x.com/BTR_anime', 'https://bocchi.rocks/', '東京・下北沢を中心に描かれるバンドアニメ。下北沢のライブハウスや商店街が実在のまま登場する。', '/images/bocchi-the-rock.jpg'),
('からかい上手の高木さん', 'karakai-takagi-san', 2018, 'https://x.com/takagi3_anime', 'https://takagi3.me/1st/', '香川県小豆島を舞台にした青春ラブコメ。土庄港やエンジェルロードなど島の風景が描かれる。', '/images/karakai-takagi-san.jpg'),
('僕だけがいない街', 'boku-dake-ga-inai-machi', 2016, 'https://x.com/bokumachi_anime', 'https://bokumachi-anime.com/', '北海道苫小牧市を舞台にしたサスペンスアニメ。苫小牧の冬景色や街並みが物語の重要な背景となっている。', '/images/boku-dake-ga-inai-machi.jpg'),
('青春ブタ野郎はバニーガール先輩の夢を見ない', 'aobuta', 2018, 'https://x.com/aobuta_anime', 'https://ao-buta.com/', '神奈川県藤沢市・湘南エリアを舞台にした青春ファンタジー。藤沢駅や七里ヶ浜、江ノ島が登場する。', '/images/aobuta.jpg'),
('宇宙よりも遠い場所', 'yorimoi', 2018, 'https://x.com/yorimoi', 'http://yorimoi.com/', '群馬県館林市を舞台に南極を目指す少女たちの物語。館林駅やつつじが岡公園など実在の風景が描かれる。', '/images/yorimoi.jpg'),
('四月は君の嘘', 'shigatsu-wa-kimi-no-uso', 2014, NULL, 'https://www.kimiuso.jp/', '東京都練馬区を中心に描かれる音楽青春アニメ。練馬区の公園や街並みが作品のモデルとなっている。', '/images/shigatsu-wa-kimi-no-uso.jpg'),
('3月のライオン', 'sangatsu-no-lion', 2016, 'https://x.com/3_lion', 'https://3lion-anime.com/', '東京都中央区月島を舞台にした将棋アニメ。月島のもんじゃストリートや隅田川沿いの風景が描かれる。', '/images/sangatsu-no-lion.jpg'),
('月がきれい', 'tsuki-ga-kirei', 2017, 'https://x.com/tsukigakirei_tv', 'https://tsukigakirei.jp/', '埼玉県川越市を舞台にした中学生の恋愛アニメ。川越の蔵造りの町並みや氷川神社が美しく描かれる。', '/images/tsuki-ga-kirei.jpg'),
('のんのんびより', 'non-non-biyori', 2013, 'https://x.com/nonnontv', 'https://nonnontv.com/', '埼玉県小川町など田舎の風景をモデルにしたほのぼの日常アニメ。のどかな田園風景が魅力的に描かれる。', '/images/non-non-biyori.jpg'),
('言の葉の庭', 'kotonoha-no-niwa', 2013, NULL, 'https://kotonohanoniwa.jp/', '新海誠監督のアニメ映画。東京・新宿御苑が主要な舞台で、雨の日の日本庭園が美しく描かれる。', '/images/kotonoha-no-niwa.jpg'),
('リコリス・リコイル', 'lycoris-recoil', 2022, 'https://x.com/lycoris_recoil', 'https://lycoris-recoil.com/', '東京都墨田区を中心に描かれるガンアクションアニメ。東京スカイツリー周辺や浅草の街並みが登場する。', '/images/lycoris-recoil.jpg'),
('色づく世界の明日から', 'iroduku', 2018, 'https://x.com/iroduku_anime', 'http://www.iroduku.jp/', '長崎県長崎市を舞台にした青春ファンタジー。グラバー園や長崎の坂道、港の風景が美しく描かれる。', '/images/iroduku.jpg'),
('凪のあすから', 'nagi-no-asukara', 2013, 'https://x.com/naginoasukara', 'http://www.nagiasu.jp/', '三重県熊野市をモデルにした海辺の町のファンタジー。熊野の海岸線や漁港の風景が幻想的に描かれる。', '/images/nagi-no-asukara.jpg'),
('ひぐらしのなく頃に', 'higurashi', 2006, NULL, 'http://www.oyashirosama.com/web/top/', '岐阜県白川郷をモデルにしたミステリーホラー。白川郷の合掌造り集落が作品の舞台「雛見沢」のモデル。', '/images/higurashi.jpg'),
('デュラララ!!', 'durarara', 2010, 'https://x.com/drrr_anime', 'https://www.durarara.com/', '東京・池袋を舞台にした群像劇。池袋駅東口やサンシャイン60通りなど池袋の街並みが忠実に描かれる。', '/images/durarara.jpg'),
('とある科学の超電磁砲', 'toaru-kagaku-no-railgun', 2009, 'https://x.com/toaru_project', 'https://toaru-project.com/railgun/', '東京都立川市をモデルにした「学園都市」が舞台のSFアニメ。立川駅周辺やモノレールが登場する。', '/images/toaru-kagaku-no-railgun.jpg'),
('名探偵コナン', 'detective-conan', 1996, NULL, 'https://www.ytv.co.jp/conan/', '作者・青山剛昌の出身地である鳥取県北栄町が聖地。青山剛昌ふるさと館やコナン通りが人気スポット。', '/images/detective-conan.jpg'),
('スーパーカブ', 'super-cub', 2021, 'https://x.com/supercub_anime', 'https://supercub-anime.com/', '山梨県北杜市を舞台にしたバイクアニメ。北杜市の自然豊かな風景や通学路が実在のまま描かれる。', '/images/super-cub.jpg'),
('白い砂のアクアトープ', 'aquatope', 2021, 'https://x.com/aquatope_anime', 'https://aquatope-anime.com/', '沖縄県南城市を舞台にした水族館アニメ。南城市の海岸や沖縄の自然が美しく描かれる。', '/images/aquatope.jpg'),
('かげきしょうじょ!!', 'kageki-shoujo', 2021, 'https://x.com/kageki_anime', 'https://kageki-anime.com/', '兵庫県宝塚市をモデルにした歌劇アニメ。宝塚大劇場周辺の街並みが作品の舞台となっている。', '/images/kageki-shoujo.jpg'),
('スキップとローファー', 'skip-to-loafer', 2023, 'https://x.com/takamatsumisaki', 'https://skip-and-loafer.com/', '主人公の故郷として石川県能登地方が描かれる青春アニメ。能登の自然豊かな風景が印象的に登場する。', '/images/skip-to-loafer.jpg'),
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
('hyogo', 41, '二宮商店街'),
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
('hokkaido', 48, '苫小牧市立美園小学校'),
('hokkaido', 48, '苫小牧市科学センター '),
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

-- 追加アニメデータ4（岩手・秋田・山形・福島・新潟・大阪・岡山・島根・山口・徳島・高知）
INSERT INTO anime (title, slug, year, xurl, officialurl, description, image) VALUES
('ルックバック', 'lookback', 2024, 'https://x.com/lookback_anime', 'https://lookback-anime.com/', '藤本タツキ原作の劇場アニメ。作者の出身地である秋田県にかほ市が舞台のモデルとなっており、田園風景や町並みが忠実に描かれている。', '/images/lookback.jpg'),
('好きでも嫌いなあまのじゃく', 'amanojaku', 2024, NULL, 'https://www.amanojaku-movie.com/', 'スタジオコロリド制作の劇場アニメ。山形県米沢市を舞台に、高校生と鬼の少女が母親を探す旅に出る物語。山寺など山形の名所が美しく描かれる。', '/images/amanojaku.jpg'),
('レベルE', 'level-e', 2011, NULL, NULL, '冨樫義博原作のSFコメディアニメ。山形県山形市を舞台に、野球少年と宇宙人王子の奇妙な同居生活を描く。山形市内の街並みが登場する。', '/images/level-e.jpg'),
('未確認で進行形', 'mikakunin', 2014, 'https://x.com/mikakunin_anime', 'https://mikakunin.jp/', '荒井チェリー原作のラブコメアニメ。福島県郡山市がモデルで、原作者も福島県出身。雪景色の美しい東北の街並みが描かれる。', '/images/mikakunin.jpg'),
('ざつ旅 -That''s Journey-', 'zatsu-tabi', 2025, NULL, 'https://zatsutabi.com/', '石坂ケンタ原作の旅アニメ。第1話の旅先が福島県会津若松市で、鶴ヶ城や七日町通りなど歴史ある街並みが丁寧に描かれている。', '/images/zatsu-tabi.jpg'),
('Do It Yourself!!', 'do-it-yourself', 2022, 'https://x.com/diy_anime', 'https://diy-anime.com/', '新潟県三条市を舞台にしたオリジナルアニメ。ものづくりの町として知られる三条市で、女子高生たちがDIYに励む日常を描く。', '/images/do-it-yourself.jpg'),
('アイの歌声を聴かせて', 'ai-no-utagoe', 2021, NULL, 'https://ainouta.jp/', '吉浦康裕監督のオリジナル劇場アニメ。新潟県の風景をモデルにした架空都市を舞台に、AIの少女と高校生たちの青春を描く。', '/images/ai-no-utagoe.jpg'),
('ジョゼと虎と魚たち', 'jose-tora', 2020, 'https://x.com/joseetora_movie', 'https://joseetora.jp/', '田辺聖子の名作を劇場アニメ化。大阪を舞台に、車椅子の少女ジョゼと大学生の恋を描く。天保山や通天閣など大阪の街並みが美しく描かれる。', '/images/jose-tora.jpg'),
('推しが武道館いってくれたら死ぬ', 'oshibudo', 2020, 'https://x.com/anime_oshibudo', 'https://oshibudo.com/', '平尾アウリ原作のアイドルアニメ。岡山市を舞台に地下アイドルとファンの物語を描く。岡山駅や表町商店街など岡山各地がモデルとして登場する。', '/images/oshibudo.jpg'),
('RE-MAIN', 're-main', 2021, NULL, 'https://re-main.net/', 'MAPPA制作の水球アニメ。岡山県倉敷市を舞台に、記憶を失った天才水球少年が廃部寸前の水球部で再び青春を歩む物語。倉敷美観地区が聖地として人気。', '/images/re-main.jpg'),
('神在月のこども', 'kamiari-kodomo', 2021, NULL, 'https://kamiari-kodomo.jp/', '旧暦10月に神々が出雲に集う伝承を題材にした劇場アニメ。母を亡くした少女が神話の地・出雲を目指す成長物語。島根県出雲市の風景が美しく描かれる。', '/images/kamiari-kodomo.jpg'),
('SHAMAN KING', 'shaman-king', 2021, NULL, 'https://shamanking-project.com/', '武井宏之原作のシャーマンバトルアニメ（2021年リメイク版）。主人公・麻倉葉の出身地のモデルが島根県出雲市で、出雲の神話的な世界観が作品と深く結びついている。', '/images/shaman-king.jpg'),
('シン・エヴァンゲリオン劇場版', 'shin-evangelion', 2021, 'https://x.com/evangelion_co', 'https://www.evangelion.co.jp/', '庵野秀明監督のエヴァンゲリオン完結編。監督の出身地・山口県宇部市がラストシーンに登場し、宇部新川駅は聖地として大人気。宇部市とのコラボイベントも開催されている。', '/images/shin-evangelion.jpg'),
('マイマイ新子と千年の魔法', 'maimai-shinko', 2009, NULL, 'https://www.mai-mai.jp/', '片渕須直監督のアニメ映画。昭和30年代の山口県防府市を舞台に、お転婆な少女・新子と転校生の友情を描く。防府市の国衙跡周辺が物語の重要な舞台。', '/images/maimai-shinko.jpg'),
('蟲師 続章', 'mushishi-zokushou', 2014, NULL, 'https://www.mushishi-anime.com/', '漆原友紀原作の幻想アニメ第2期。山深い日本の原風景が描かれ、徳島県三好市の祖谷のかずら橋が作中の橋のモデルとして聖地になっている。', '/images/mushishi-zokushou.jpg'),
('おへんろ。', 'ohenro', 2014, NULL, 'http://www.ufotable.com/ohenro/', 'ufotable制作の四国八十八箇所巡りアニメ。女子高生3人がお遍路を巡る物語で、ufotableの拠点がある徳島市の風景が丁寧に描かれている。', '/images/ohenro.jpg'),
('竜とそばかすの姫', 'belle', 2021, NULL, 'https://ryu-to-sobakasu-no-hime.jp/', '細田守監督のアニメ映画。高知県の仁淀川流域が舞台で、主人公・すずが暮らす自然豊かな高知の集落が美しく描かれる。JR伊野駅や浅尾沈下橋が登場する。', '/images/belle.jpg'),
('海がきこえる', 'umi-ga-kikoeru', 1993, NULL, NULL, 'スタジオジブリ制作のアニメ。高知県高知市が主な舞台で、はりまや橋や帯屋町商店街など高知の街並みがリアルに描かれている。高知を代表するアニメ作品。', '/images/umi-ga-kikoeru.jpg'),
('政宗くんのリベンジ', 'masamune-kun-no-revenge', 2017, 'https://x.com/masamune_tv', 'https://masamune-tv.com/1st/', '8年前に令嬢・安達垣愛姫に「豚足」と罵られ振られたデブで冴えない少年・真壁政宗が、激痩せ・イケメン化して帰国し、愛姫を惚れさせてから振る「デッド・オア・ラブ作戦」を実行する復讐ラブコメディ', '/images/masamune-kun-no-revenge.jpg');
-- 追加聖地データ4
INSERT INTO location (prefecture, anime_id, name) VALUES
-- 既存アニメへの岩手・大阪聖地追加
-- すずめの戸締まり (ID=41) 岩手
('iwate', 41, '山田町・織笠駅'),
('iwate', 41, '山田湾展望広場'),
-- 呪術廻戦 (ID=37) 岩手
('iwate', 37, '盛岡駅'),
-- 名探偵コナン (ID=62) 大阪
('osaka', 62, '通天閣（服部平次の舞台）'),
('osaka', 62, '大阪城'),
-- ルックバック (ID=68) 秋田
('akita', 68, 'にかほ市・文林堂書店'),
('akita', 68, '仁賀保駅'),
('akita', 68, '仁賀保大橋'),
-- 好きでも嫌いなあまのじゃく (ID=69) 山形
('yamagata', 69, '米沢市（主人公の住む町）'),
('yamagata', 69, '山寺（宝珠山立石寺）'),
-- レベルE (ID=70) 山形
('yamagata', 70, '山形市内'),
('yamagata', 70, '山形駅周辺'),
-- 未確認で進行形 (ID=71) 福島
('fukushima', 71, '郡山市・安積歴史博物館'),
('fukushima', 71, '郡山市内'),
-- ざつ旅 (ID=72) 福島
('fukushima', 72, '会津若松市・鶴ヶ城'),
('fukushima', 72, '会津若松市・七日町通り'),
-- Do It Yourself!! (ID=73) 新潟
('niigata', 73, '三条市・一ノ木戸商店街'),
('niigata', 73, '三条市・三条鍛冶道場'),
-- アイの歌声を聴かせて (ID=74) 新潟
('niigata', 74, '長岡市（街並みのモデル）'),
('niigata', 74, '新潟市周辺'),
-- ジョゼと虎と魚たち (ID=75) 大阪
('osaka', 75, '大阪市・天保山（海遊館周辺）'),
('osaka', 75, '大阪市・通天閣周辺'),
-- 推しが武道館いってくれたら死ぬ (ID=76) 岡山
('okayama', 76, '岡山市・表町商店街'),
('okayama', 76, '岡山市・岡山城周辺'),
-- RE-MAIN (ID=77) 岡山
('okayama', 77, '倉敷市・倉敷美観地区'),
('okayama', 77, '倉敷市・倉敷駅前'),
-- 神在月のこども (ID=78) 島根
('shimane', 78, '出雲市・出雲大社'),
('shimane', 78, '出雲市・稲佐の浜'),
-- SHAMAN KING (ID=79) 島根
('shimane', 79, '出雲市・出雲大社周辺'),
('shimane', 79, '出雲市（旧大社町）'),
-- シン・エヴァンゲリオン劇場版 (ID=80) 山口
('yamaguchi', 80, '宇部市・宇部新川駅'),
('yamaguchi', 80, '宇部市・琴芝駅周辺'),
-- マイマイ新子と千年の魔法 (ID=81) 山口
('yamaguchi', 81, '防府市・国衙跡（周防国衙跡）'),
('yamaguchi', 81, '防府市・佐波川'),
-- 蟲師 続章 (ID=82) 徳島
('tokushima', 82, '三好市・祖谷のかずら橋'),
('tokushima', 82, '三好市・大歩危峡'),
-- おへんろ。 (ID=83) 徳島
('tokushima', 83, '徳島市・眉山'),
('tokushima', 83, '徳島市・新町川沿い'),
-- 竜とそばかすの姫 (ID=84) 高知
('kochi', 84, 'いの町・JR伊野駅'),
('kochi', 84, '仁淀川町・浅尾沈下橋'),
-- 海がきこえる (ID=85) 高知
('kochi', 85, '高知市・はりまや橋'),
('kochi', 85, '高知市・帯屋町商店街'),
-- 政宗くんのリベンジ(ID=86) 高知
('kochi', 86, '高知市・高知小津高校');

-- 追加アニメデータ5
INSERT INTO anime (title, slug, year, xurl, officialurl, description, image) VALUES
('沖縄で好きになった子が方言すぎてツラすぎる', 'okitsura', 2025, 'https://x.com/okitsura', 'https://okitsura.com/', '沖縄県うるま市を舞台にした方言ラブコメアニメ。東京から沖縄に引っ越してきた高校生が、方言がきつすぎるヒロインに恋をする物語。うるま市の風景やビーチが美しく描かれる。', '/images/okitsura.jpg');

-- 追加聖地データ5
INSERT INTO location (prefecture, anime_id, name) VALUES
-- 沖縄で好きになった子が方言すぎてツラすぎる (ID=87)
('okinawa', 87, 'うるま市・具志川ビーチ'),
('okinawa', 87, 'うるま市・具志川公民館');

-- 追加アニメデータ6（恋愛アニメ追加）
INSERT INTO anime (title, slug, year, xurl, officialurl, description, image) VALUES
('かぐや様は告らせたい～天才たちの恋愛頭脳戦～', 'kaguya-sama', 2019, 'https://x.com/anime_kaguya', 'https://kaguya.love/', '秀知院学園の生徒会を舞台にした頭脳戦ラブコメ。天才同士の生徒会長・白銀御行と副会長・四宮かぐやが、プライドをかけて相手に告白させようとする恋愛バトルを繰り広げる。', '/images/kaguya-sama.jpg'),
('君に届け', 'kimi-ni-todoke', 2009, 'https://x.com/kimitodo_pr', 'https://kimitodo.com/', '北海道を舞台にした純愛青春アニメ。陰気な見た目から「貞子」と呼ばれる黒沼爽子が、爽やかなクラスメイト・風早翔太との出会いをきっかけに成長していく物語。', '/images/kimi-ni-todoke.jpg'),
('五等分の花嫁', 'gotoubun-no-hanayome', 2019, 'https://x.com/5Hanayome_anime', 'https://www.tbs.co.jp/anime/5hanayome/', '貧乏な高校生・上杉風太郎が、大富豪の五つ子姉妹の家庭教師となるラブコメ。中野区を中心に東京の街並みが多数登場し、修学旅行編では京都も舞台となる。', '/images/gotoubun-no-hanayome.jpg'),
('とらドラ！', 'toradora', 2008, NULL, 'https://www.tv-tokyo.co.jp/anime/toradora/', '目つきの悪さから不良と誤解される高須竜児と、小柄だが凶暴な「手乗りタイガー」逢坂大河のドタバタラブコメ。東京都の西東京エリアがモデルとなっている。', '/images/toradora.jpg');

-- 追加聖地データ6
INSERT INTO location (prefecture, anime_id, name) VALUES
-- かぐや様は告らせたい (ID=88)
('tokyo', 88, '港区周辺（秀知院学園のイメージモデル）'),
('tokyo', 88, '六本木・赤坂エリア'),
-- 君に届け (ID=89)
('hokkaido', 89, '羽幌神社'),
('hokkaido', 89, '羽幌高校'),
('hokkaido', 89, '羽幌橋'),
('hokkaido', 89, '羽幌港'),
('hokkaido', 89, '朝日大橋'),
-- 五等分の花嫁 (ID=90)
('tokyo', 90, '中野区・中野サンプラザ周辺'),
('tokyo', 90, '太田市場'),
('kyoto', 90, '清水寺（修学旅行編）'),
('kyoto', 90, '嵐山（修学旅行編）'),
-- とらドラ！ (ID=91)
('tokyo', 91, '西東京市・保谷駅周辺'),
('tokyo', 91, '練馬区・石神井公園');

-- 追加アニメデータ7
INSERT INTO anime (title, slug, year, xurl, officialurl, description, image) VALUES
('おそ松さん', 'osomatsu-san', 2015, 'https://x.com/osomatsu_PR', 'https://osomatsusan.com/', '赤塚不二夫の名作「おそ松くん」の六つ子たちが大人になった姿を描くギャグアニメ。ニートになった松野家の六つ子が繰り広げるカオスな日常が社会現象を巻き起こした。', '/images/osomatsu-san.jpg'),
('女子高生の無駄づかい', 'joshikousei-no-mudazukai', 2019, 'https://x.com/jyoshimuda', 'https://jyoshimuda.com/', '個性豊かな女子高生たちの「無駄」な日常を描くギャグアニメ。埼玉県の高校を舞台に、「バカ」「ヲタ」「ロボ」などあだ名で呼び合う少女たちの笑える毎日が繰り広げられる。', '/images/joshikousei-no-mudazukai.jpg'),
('日常', 'nichijou', 2011, NULL, 'https://shinonome-lab.com/', 'あらゐけいいち原作のシュールギャグアニメ。群馬県伊勢崎市をモデルにした時定高校を舞台に、ありえないほど壮大な「日常」が繰り広げられる。京都アニメーション制作。', '/images/nichijou.jpg'),
('ブルーロック', 'blue-lock', 2022, 'https://x.com/BlueLock_PR', 'https://bluelock-pr.com/', 'サッカー日本代表の世界一のストライカーを育成するため、全国から300人のFWを集めた過酷な選抜プログラム「ブルーロック」を描くサッカーアニメ。エゴイズムをテーマにした斬新な内容が話題に。', '/images/blue-lock.png'),
('CLANNAD', 'clannad', 2007, NULL, 'https://www.tbs.co.jp/clannad/clannad1/', 'Key原作の恋愛アドベンチャーを京都アニメーションがアニメ化。不良少年・岡崎朋也と病弱な少女・古河渚の出会いから始まる、家族の絆を描いた感動の物語。AFTER STORYでは涙なしには見られない展開が待つ。', '/images/clannad.jpg');

-- 追加聖地データ7
INSERT INTO location (prefecture, anime_id, name) VALUES
-- おそ松さん (ID=92)
('tokyo', 92, '中野ブロードウェイ（赤塚不二夫ゆかりの地）'),
('tokyo', 92, '青梅市・赤塚不二夫会館跡'),
-- 女子高生の無駄づかい (ID=93)
('saitama', 93, '所沢市周辺（舞台モデル）'),
('saitama', 93, '東村山駅周辺'),
-- 日常 (ID=94)
('gunma', 94, '伊勢崎市（時定市のモデル）'),
('gunma', 94, '伊勢崎市・華蔵寺公園'),
-- ブルーロック (ID=95)
('saitama', 95, '埼玉スタジアム2002'),
-- CLANNAD (ID=96)
('tokyo', 96, '東京都羽村市周辺');

-- 追加アニメデータ8（恋愛アニメ追加2）
INSERT INTO anime (title, slug, year, xurl, officialurl, description, image) VALUES
('君の膵臓をたべたい', 'kimisui', 2018, 'https://x.com/kimisui_anime', 'https://kimisui-anime.com/', '住野よる原作の感動アニメ映画。膵臓の病気を抱える山内桜良と、クラスメイトの「僕」が秘密を共有しながら過ごす日々を描く。物語の舞台は福岡県がモデルとされている。', '/images/kimisui.jpg'),
('時々ボソッとロシア語でデレる隣のアーリャさん', 'roshidere', 2024, 'https://x.com/roshidere', 'https://roshidere.com/', 'ロシア人と日本人のハーフの美少女・アーリャが、隣の席の久世政近にロシア語でこっそりデレる学園ラブコメ。実は政近はロシア語が分かるという秘密が面白い。', '/images/roshidere.jpg'),
('彼女、お借りします', 'kanokari', 2020, 'https://x.com/kanokari_anime', 'https://kanokari-official.com/', 'レンタル彼女サービスをきっかけに始まるラブコメ。東京都新宿区や板橋区周辺が舞台で、主人公・木ノ下和也と水原千鶴の関係が少しずつ変化していく。', '/images/kanokari.jpg'),
('僕の心のヤバイやつ', 'bokuyaba', 2023, 'https://x.com/bokuyaba_anime', 'https://bokuyaba-anime.com/', '中二病の陰キャ男子・市川京太郎と学校一の美少女・山田杏奈の不器用な恋を描く青春ラブコメ。東京都の秋川周辺がモデルとなっている。', '/images/bokuyaba.jpg'),
('ホリミヤ', 'horimiya', 2021, 'https://x.com/horimiya_anime', 'https://horimiya-anime.com/', '学校では派手な美少女・堀京子と地味なクラスメイト・宮村伊澄。放課後の意外な素顔をきっかけに距離が縮まっていく青春ラブコメ。', '/images/horimiya.jpg'),
('冴えない彼女の育てかた', 'saekano', 2015, 'https://x.com/saenai_heroine', 'https://saenai.tv/', 'オタク高校生・安芸倫也が、坂道で出会った少女・加藤恵をヒロインにギャルゲー制作を目指す物語。東京都豊島区や練馬区の風景が多数登場する。', '/images/saekano.jpg'),
('中二病でも恋がしたい！', 'chuunibyou', 2012, 'https://x.com/anime_chu_2', 'https://www.anime-chu-2.com/', '元中二病の富樫勇太と現役中二病の小鳥遊六花が繰り広げる学園ラブコメ。滋賀県大津市を舞台に、京阪電車の石山坂本線沿線の風景が美しく描かれる。京都アニメーション制作。', '/images/chuunibyou.jpg'),
('ニセコイ', 'nisekoi', 2014, 'https://x.com/nisekoi_k', 'https://www.nisekoi.jp/', 'ヤクザの息子・一条楽とギャングの娘・桐崎千棘が、両組織の抗争を止めるため恋人のふりをするラブコメ。東京都の下町エリアが舞台のモデルとなっている。', '/images/nisekoi.png');

-- 追加聖地データ8
INSERT INTO location (prefecture, anime_id, name) VALUES
-- 君の膵臓をたべたい (ID=97)
('fukuoka', 97, '福岡市内（舞台モデル）'),
('fukuoka', 97, '太宰府天満宮'),
-- 時々ボソッとロシア語でデレる隣のアーリャさん (ID=98)
('tokyo', 98, '東京都内（学園モデル周辺）'),
-- 彼女、お借りします (ID=99)
('tokyo', 99, '新宿区・歌舞伎町周辺'),
('tokyo', 99, '板橋区周辺'),
-- 僕の心のヤバイやつ (ID=100)
('tokyo', 100, 'あきる野市・秋川駅周辺'),
('tokyo', 100, '秋川渓谷'),
-- ホリミヤ (ID=101)
('tokyo', 101, '東京都内（舞台モデル周辺）'),
-- 冴えない彼女の育てかた (ID=102)
('tokyo', 102, '豊島区・池袋周辺'),
('tokyo', 102, '練馬区周辺'),
-- 中二病でも恋がしたい！ (ID=103)
('shiga', 103, '大津市・石山駅周辺'),
('shiga', 103, '大津市・膳所城跡公園'),
('shiga', 103, '京阪石山坂本線沿線'),
-- ニセコイ (ID=104)
('tokyo', 104, '中野区鷺宮６丁目歩道橋（武蔵台小前）'),
('tokyo', 104, '代々木公園'),
('tokyo', 104, '江戸川区・古川親水公園');

-- 追加アニメデータ9
INSERT INTO anime (title, slug, year, xurl, officialurl, description, image) VALUES
('みなみけ', 'minami-ke', 2007, NULL, 'https://www.tv-tokyo.co.jp/anime/minami-ke/', '南家の三姉妹・春香、夏奈、千秋の日常を描くコメディアニメ。「この物語はみなみけ3姉妹の平凡な日常を淡々と描くものです」のナレーションが象徴的な日常系の名作。', '/images/minami-ke.jpg'),
('僕は友達が少ない', 'haganai', 2011, 'https://x.com/haganai_anime', 'https://www.tbs.co.jp/anime/haganai/', '友達がいない少年少女が「隣人部」を結成し友達作りに奮闘する学園ラブコメ。金髪ハーフの三日月夜空と残念系美少女・柏崎星奈を中心にドタバタが繰り広げられる。', '/images/haganai.jpg'),
('俺の妹がこんなに可愛いわけがない', 'oreimo', 2010, 'https://x.com/oreimo_eromanga/media', 'https://www.oreimo-anime.com/', '平凡な兄・高坂京介と隠れオタクの妹・桐乃の関係を描くラブコメ。千葉市を舞台に千葉モノレールや千葉公園が登場し、秋葉原のオタク文化も作品の重要な要素。', '/images/oreimo.jpg'),
('干物妹！うまるちゃん', 'himouto-umaru-chan', 2015, 'https://x.com/umr_official', 'https://umaru-ani.me/', '学校では完璧な美少女だが家ではグータラなオタク妹・うまるの二面性を描くギャグコメディ。東京都八王子市周辺がモデルとされ、駅前の風景などが登場する。', '/images/himouto-umaru-chan.jpg'),
('エロマンガ先生', 'eromanga-sensei', 2017, 'https://x.com/oreimo_eromanga/media', 'https://eromanga-sensei.com/', '「俺の妹」の伏見つかさ原作のラブコメ。ラノベ作家の兄と引きこもりイラストレーターの妹が実は仕事上のパートナーだったという物語。東京都内が舞台。', '/images/eromanga-sensei.jpg'),
('聲の形', 'koe-no-katachi', 2016, 'https://x.com/koenokatachi_M', 'https://koenokatachi-movie.com/', '京都アニメーション制作の劇場アニメ。かつていじめの加害者だった少年と聴覚障害を持つ少女の再会と贖罪の物語。岐阜県大垣市が聖地として有名で、美登鯉橋や大垣公園など多数の実在スポットが登場する。', '/images/koe-no-katachi.jpg');

-- 追加聖地データ9
INSERT INTO location (prefecture, anime_id, name) VALUES
-- 俺の妹がこんなに可愛いわけがない (ID=107)
('chiba', 107, '千葉モノレール沿線'),
('chiba', 107, '千葉公園'),
('tokyo', 107, '秋葉原'),
-- 干物妹！うまるちゃん (ID=108)
('tokyo', 108, '八王子駅周辺（舞台モデル）'),
-- 聲の形 (ID=110)
('gifu', 110, '大垣市・美登鯉橋'),
('gifu', 110, '大垣市・四季の森公園'),
('gifu', 110, '大垣市・大垣公園'),
('gifu', 110, '養老町・養老天命反転地');