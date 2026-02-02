DROP TABLE IF EXISTS location;
DROP TABLE IF EXISTS anime;

CREATE TABLE anime (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  year INTEGER,
  xurl TEXT,
  officialurl TEXT,
  description TEXT,
  image TEXT
);

CREATE TABLE location (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  prefecture TEXT NOT NULL,
  anime_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  FOREIGN KEY (anime_id) REFERENCES anime(id)
);

CREATE INDEX idx_location_prefecture ON location(prefecture);
CREATE INDEX idx_location_anime_id ON location(anime_id);
CREATE INDEX idx_anime_slug ON anime(slug);
