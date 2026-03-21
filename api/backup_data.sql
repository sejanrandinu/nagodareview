PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE reviews (
    id TEXT PRIMARY KEY,
    date TEXT,
    lang TEXT,
    rating TEXT,
    name TEXT,
    address TEXT,
    purpose TEXT,
    message TEXT
, phone TEXT DEFAULT '-');
INSERT INTO "reviews" ("id","date","lang","rating","name","address","purpose","message","phone") VALUES('1773977808790','20/03/2026, 09:06:48','si','very-happy','G.M.T. Liyanage','manahara motors, mapalagama','දැව ප්‍රවාහන කටයුතු','-','0711829929');
INSERT INTO "reviews" ("id","date","lang","rating","name","address","purpose","message","phone") VALUES('1773984346803','20/03/2026, 10:55:46','si','very-happy','Ruwani','354/A,Gonadeniya, udugama','දැව ප්‍රවාහන කටයුතු','-','0701455143');
INSERT INTO "reviews" ("id","date","lang","rating","name","address","purpose","message","phone") VALUES('1773996632269','20/03/2026, 14:20:32','si','very-happy','Dilhara madurangi','keppitiyagoda,nagoda.','ව්‍යාපාර ලියාපදිංචි කටයුතු','-','0740520373');
