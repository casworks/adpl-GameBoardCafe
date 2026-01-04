-- Schema and seed data for GameBoardCafe borrowing system (SQLite)
PRAGMA foreign_keys = ON;

CREATE TABLE petugas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nama TEXT NOT NULL,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL,
  status TEXT NOT NULL
);

CREATE TABLE peminjam (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nama TEXT NOT NULL,
  no_hp TEXT NOT NULL
);

CREATE TABLE fasilitas (
  id TEXT PRIMARY KEY,
  nama TEXT NOT NULL,
  deskripsi TEXT,
  status TEXT NOT NULL
);

CREATE TABLE perlengkapan (
  id TEXT PRIMARY KEY,
  nama TEXT NOT NULL,
  total_unit INTEGER NOT NULL,
  unit_tersedia INTEGER NOT NULL,
  status TEXT NOT NULL
);

CREATE TABLE peminjaman (
  id TEXT PRIMARY KEY,
  peminjam_id INTEGER NOT NULL,
  petugas_id INTEGER NOT NULL,
  tanggal_pinjam TEXT NOT NULL,
  tanggal_kembali TEXT,
  status TEXT NOT NULL,
  catatan TEXT,
  kondisi_pengembalian TEXT,
  catatan_pengembalian TEXT,
  FOREIGN KEY (peminjam_id) REFERENCES peminjam (id),
  FOREIGN KEY (petugas_id) REFERENCES petugas (id)
);

CREATE TABLE detail_peminjaman (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  peminjaman_id TEXT NOT NULL,
  aset_tipe TEXT NOT NULL,
  aset_id TEXT NOT NULL,
  nama_aset TEXT NOT NULL,
  jumlah INTEGER NOT NULL DEFAULT 1,
  FOREIGN KEY (peminjaman_id) REFERENCES peminjaman (id)
);

INSERT INTO petugas (nama, username, password_hash, role, status)
VALUES
  ('Petugas', 'petugas01', 'HASHED_PASSWORD', 'Admin', 'Aktif');

INSERT INTO peminjam (nama, no_hp)
VALUES
  ('Raka', '08123456001'),
  ('Naya', '08123456002'),
  ('Fajar', '08123456003'),
  ('Dina', '08123456004'),
  ('Rendi', '08123456005'),
  ('Lala', '08123456006');

INSERT INTO fasilitas (id, nama, deskripsi, status)
VALUES
  ('F-01', 'Meeting Room Kecil', 'Kapasitas 4 orang - LCD, whiteboard, AC, WiFi', 'Tersedia'),
  ('F-02', 'Meeting Room Menengah', 'Kapasitas 6 orang - LCD, speaker, AC, WiFi', 'Dipinjam'),
  ('F-03', 'Meeting Room Besar', 'Kapasitas 8 orang - LCD, mic, AC, WiFi', 'Tersedia'),
  ('F-04', 'Presentation / Training Room', 'Kapasitas 10-12 orang - sound system, mic, AC', 'Tersedia'),
  ('F-05', 'Chess (Catur)', 'Board game strategi', 'Tersedia'),
  ('F-06', 'Checkers (Dam)', 'Board game strategi', 'Tersedia'),
  ('F-07', 'Go Board', 'Board game strategi', 'Tersedia'),
  ('F-08', 'Othello', 'Board game strategi', 'Tersedia'),
  ('F-09', 'Chinese Chess (Xiangqi)', 'Board game strategi', 'Tersedia'),
  ('F-10', 'Monopoly', 'Board game keluarga', 'Tersedia'),
  ('F-11', 'Monopoly Deal', 'Board game keluarga', 'Tersedia'),
  ('F-12', 'Ludo', 'Board game keluarga', 'Tersedia'),
  ('F-13', 'Snakes and Ladders', 'Board game keluarga', 'Tersedia'),
  ('F-14', 'The Game of Life', 'Board game keluarga', 'Tersedia'),
  ('F-15', 'UNO', 'Board game party', 'Dipinjam'),
  ('F-16', 'UNO Stacko', 'Board game party', 'Tersedia'),
  ('F-17', 'Exploding Kittens', 'Board game party', 'Tersedia'),
  ('F-18', 'Werewolf', 'Board game party', 'Tersedia'),
  ('F-19', 'Cards Against Humanity', 'Board game party', 'Tersedia'),
  ('F-20', 'Scrabble', 'Board game edukasi', 'Tersedia'),
  ('F-21', 'Boggle', 'Board game edukasi', 'Tersedia'),
  ('F-22', 'Codenames', 'Board game edukasi', 'Tersedia'),
  ('F-23', 'Sequence', 'Board game edukasi', 'Tersedia'),
  ('F-24', 'Quiz Board Game', 'Board game edukasi', 'Tersedia'),
  ('F-25', 'Playing Cards (Kartu Remi)', 'Board game kartu', 'Tersedia'),
  ('F-26', 'Poker Set', 'Board game kartu', 'Tersedia'),
  ('F-27', 'Bridge Cards', 'Board game kartu', 'Tersedia'),
  ('F-28', 'Blackjack Set', 'Board game kartu', 'Tersedia'),
  ('F-29', 'Chess Board Kayu', 'Game meja lainnya', 'Tersedia'),
  ('F-30', 'Chess Board Magnetik', 'Game meja lainnya', 'Tersedia'),
  ('F-31', 'Monopoly Board Deluxe', 'Game meja lainnya', 'Tersedia'),
  ('F-32', 'Mini Board Game Travel Set', 'Game meja lainnya', 'Tersedia'),
  ('F-33', 'Puzzle Board 500 pcs', 'Game meja lainnya', 'Tersedia'),
  ('F-34', 'Puzzle Board 1000 pcs', 'Game meja lainnya', 'Tersedia'),
  ('F-35', 'Jenga', 'Game meja lainnya', 'Tersedia'),
  ('F-36', 'Domino', 'Game meja lainnya', 'Tersedia'),
  ('F-37', 'Mahjong Set', 'Game meja lainnya', 'Tersedia');

INSERT INTO perlengkapan (id, nama, total_unit, unit_tersedia, status)
VALUES
  ('P-01', 'Timer permainan', 5, 3, 'Tersedia'),
  ('P-02', 'Jam dinding', 3, 3, 'Tersedia'),
  ('P-03', 'Scoreboard kecil', 4, 4, 'Tersedia'),
  ('P-04', 'Spidol papan tulis', 12, 12, 'Tersedia'),
  ('P-05', 'Kertas catatan', 25, 25, 'Tersedia'),
  ('P-06', 'Pulpen', 30, 30, 'Tersedia'),
  ('P-07', 'Stop kontak tambahan', 6, 6, 'Tersedia'),
  ('P-08', 'Extension cable', 4, 4, 'Tersedia');

INSERT INTO peminjaman (
  id, peminjam_id, petugas_id, tanggal_pinjam, tanggal_kembali, status, catatan
)
VALUES
  ('PMJ-2024', 1, 1, '2026-01-04T10:00', NULL, 'Aktif', 'Diskusi proyek internal.'),
  ('PMJ-2023', 2, 1, '2026-01-04T13:20', NULL, 'Aktif', 'Sesi board game keluarga.'),
  ('PMJ-2022', 3, 1, '2026-01-02T19:00', '2026-01-02T22:30', 'Selesai', 'Mentoring tim kecil.'),
  ('PMJ-2021', 4, 1, '2026-01-04T09:00', NULL, 'Aktif', 'Dipakai untuk turnamen internal.'),
  ('PMJ-2020', 5, 1, '2026-01-03T09:00', '2026-01-03T12:00', 'Selesai', 'Sesi pelatihan.'),
  ('PMJ-2019', 6, 1, '2026-01-01T14:00', '2026-01-01T17:45', 'Selesai', 'Workshop internal.');

INSERT INTO detail_peminjaman (peminjaman_id, aset_tipe, aset_id, nama_aset, jumlah)
VALUES
  ('PMJ-2024', 'Fasilitas', 'F-02', 'Meeting Room Menengah', 1),
  ('PMJ-2023', 'Fasilitas', 'F-15', 'UNO', 1),
  ('PMJ-2022', 'Fasilitas', 'F-01', 'Meeting Room Kecil', 1),
  ('PMJ-2021', 'Perlengkapan', 'P-01', 'Timer permainan', 2),
  ('PMJ-2020', 'Perlengkapan', 'P-04', 'Spidol papan tulis', 4),
  ('PMJ-2019', 'Fasilitas', 'F-04', 'Presentation / Training Room', 1);
