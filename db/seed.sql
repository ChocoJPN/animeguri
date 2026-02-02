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
