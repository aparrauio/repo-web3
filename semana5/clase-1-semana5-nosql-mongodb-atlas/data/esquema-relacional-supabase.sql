-- ============================================================
-- esquema-relacional-supabase.sql
-- ============================================================
-- Esquema RELACIONAL de partida, tal como lo tendrías en Supabase
-- (Postgres). Es el ejemplo clásico de modelado de datos: una tabla
-- "users" y una tabla "hobbies" relacionadas 1-a-muchos por user_id.
--
-- Este es el "antes" del ejercicio. El "después" (MongoDB, con los
-- hobbies embebidos como arreglo) está en
-- docs/comparacion-relacional-vs-documental.md y en solucion/src/.

-- --- Tabla principal: users ---------------------------------------
create table users (
  id serial primary key,
  first_name text not null,
  last_name text not null,
  cell text,
  city text
);

insert into users (first_name, last_name, cell, city) values
  ('Leslie', 'Yepp',    '8125552344', 'Pawnee'),
  ('Ron',    'Swandson', '8125557788', 'Pawnee'),
  ('Tom',    'Haverford','8125559012', 'Pawnee'),
  ('April',  'Ludgate',  '8125553456', 'Pawnee');

-- --- Tabla relacionada: hobbies ------------------------------------
-- Cada fila es UN hobby de UN usuario. Es una relación 1-a-muchos
-- clásica: un usuario puede tener muchos hobbies, pero cada hobby
-- pertenece a un solo usuario (no se comparte entre usuarios).
create table hobbies (
  id serial primary key,
  user_id integer not null references users(id),
  hobby text not null
);

insert into hobbies (user_id, hobby) values
  ((select id from users where first_name = 'Leslie'), 'scrapbooking'),
  ((select id from users where first_name = 'Leslie'), 'eating waffles'),
  ((select id from users where first_name = 'Leslie'), 'working'),
  ((select id from users where first_name = 'Ron'),    'woodworking'),
  ((select id from users where first_name = 'Ron'),    'breakfast foods'),
  ((select id from users where first_name = 'Tom'),    'business ideas'),
  ((select id from users where first_name = 'Tom'),    'fashion'),
  ((select id from users where first_name = 'Tom'),    'nightlife'),
  ((select id from users where first_name = 'April'),  'sleeping'),
  ((select id from users where first_name = 'April'),  'sulking');

-- --- Consulta típica en el modelo relacional -----------------------
-- Para ver un usuario CON todos sus hobbies, hace falta un JOIN, y el
-- resultado llega como varias FILAS repetidas (una por cada hobby) —
-- no como una sola fila con todos los hobbies juntos.
select
  u.id,
  u.first_name,
  u.last_name,
  u.cell,
  u.city,
  h.hobby
from users u
join hobbies h on h.user_id = u.id
order by u.id;

-- Resultado de este JOIN para Leslie (id 1):
--
--  id | first_name | last_name | cell       | city   | hobby
-- ----+------------+-----------+------------+--------+----------------
--   1 | Leslie     | Yepp      | 8125552344 | Pawnee | scrapbooking
--   1 | Leslie     | Yepp      | 8125552344 | Pawnee | eating waffles
--   1 | Leslie     | Yepp      | 8125552344 | Pawnee | working
--
-- Nota que "Leslie Yepp" aparece REPETIDA 3 veces, una por cada
-- hobby — exactamente el problema que resuelve embeber un arreglo
-- en MongoDB (ver docs/comparacion-relacional-vs-documental.md).
