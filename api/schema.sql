DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews (
    id TEXT PRIMARY KEY,
    date TEXT,
    lang TEXT,
    rating TEXT,
    name TEXT,
    address TEXT,
    purpose TEXT,
    message TEXT
);
