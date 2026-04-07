# LaravelTinkering

Aplicació web construïda amb **Laravel 12**, **React 19**, **Inertia.js v2** i **Tailwind CSS v4** que demostra el patró MVC amb dues seccions CRUD completes: Pel·lícules i Llibres.

## Funcionalitats

### Pàgines

| Ruta | Descripció |
|------|-----------|
| `/` | Landing page amb presentació del projecte |
| `/movies` | Llistat de pel·lícules (CRUD complet) |
| `/movies/create` | Formulari per crear una pel·lícula |
| `/movies/{id}` | Detall d'una pel·lícula |
| `/movies/{id}/edit` | Formulari per editar una pel·lícula |
| `/books` | Llistat de llibres (CRUD complet) |
| `/books/create` | Formulari per crear un llibre |
| `/books/{id}` | Detall d'un llibre |
| `/books/{id}/edit` | Formulari per editar un llibre |

### Característiques addicionals

- **Header/Navbar**: Navegació responsive amb hamburger menu en mòbil
- **Footer**: Informació del creador
- **Responsive**: Disseny adaptatiu per a mòbil, tauleta i escriptori
- **Layouts reutilitzables**: `PublicLayout` compartit per totes les pàgines
- **Validació**: Form Requests amb missatges d'error en català
- **Seeders**: 10 registres per defecte per a cada taula
- **Tests**: Tests Pest per a cada operació CRUD

## Estructura de Fitxers i Classes

### Models (`app/Models/`)

| Classe | Descripció |
|--------|-----------|
| `Movie` | Representa una pel·lícula. Camps: `title`, `director`, `release_year`, `duration_minutes`, `is_featured`. Utilitza casts per a tipus `integer` i `boolean`. |
| `Book` | Representa un llibre. Camps: `title`, `author`, `published_year`, `pages`, `is_available`. Utilitza casts per a tipus `integer` i `boolean`. |

### Controladors (`app/Http/Controllers/`)

| Classe | Mètodes | Descripció |
|--------|---------|-----------|
| `MovieController` | `index`, `create`, `store`, `show`, `edit`, `update`, `destroy` | Gestiona el CRUD complet de pel·lícules. Utilitza Inertia::render per retornar pàgines React. |
| `BookController` | `index`, `create`, `store`, `show`, `edit`, `update`, `destroy` | Gestiona el CRUD complet de llibres. Mateixa estructura que MovieController. |

### Form Requests (`app/Http/Requests/`)

| Classe | Descripció |
|--------|-----------|
| `StoreMovieRequest` | Validació per crear una pel·lícula (title, director, release_year, duration_minutes obligatoris) |
| `UpdateMovieRequest` | Validació per actualitzar una pel·lícula |
| `StoreBookRequest` | Validació per crear un llibre (title, author, published_year, pages obligatoris) |
| `UpdateBookRequest` | Validació per actualitzar un llibre |

### Base de Dades

#### Taula `movies`

| Camp | Tipus | Descripció |
|------|-------|-----------|
| `id` | bigInteger (PK) | Identificador únic |
| `title` | string | Títol de la pel·lícula |
| `director` | string | Director |
| `release_year` | integer | Any d'estrena |
| `duration_minutes` | integer | Duració en minuts |
| `is_featured` | boolean | Si és destacada |
| `created_at` | timestamp | Data de creació |
| `updated_at` | timestamp | Data d'actualització |

#### Taula `books`

| Camp | Tipus | Descripció |
|------|-------|-----------|
| `id` | bigInteger (PK) | Identificador únic |
| `title` | string | Títol del llibre |
| `author` | string | Autor |
| `published_year` | integer | Any de publicació |
| `pages` | integer | Nombre de pàgines |
| `is_available` | boolean | Disponibilitat |
| `created_at` | timestamp | Data de creació |
| `updated_at` | timestamp | Data d'actualització |

### Factories i Seeders (`database/`)

| Classe | Descripció |
|--------|-----------|
| `MovieFactory` | Genera dades de prova per a pel·lícules. Inclou estat `featured()`. |
| `BookFactory` | Genera dades de prova per a llibres. Inclou estat `unavailable()`. |
| `MovieSeeder` | Insereix 10 pel·lícules reals (Inception, The Matrix, Parasite, etc.) |
| `BookSeeder` | Insereix 10 llibres reals (Don Quixote, 1984, Harry Potter, etc.) |
| `DatabaseSeeder` | Seeder principal que executa MovieSeeder i BookSeeder |

### Frontend (`resources/js/`)

| Fitxer | Descripció |
|--------|-----------|
| `layouts/public-layout.tsx` | Layout públic reutilitzable amb navbar responsive i footer |
| `pages/welcome.tsx` | Landing page amb hero section i funcionalitats |
| `pages/movies/index.tsx` | Llistat de pel·lícules (taula desktop, cards mòbil) |
| `pages/movies/create.tsx` | Formulari de creació de pel·lícules |
| `pages/movies/edit.tsx` | Formulari d'edició de pel·lícules |
| `pages/movies/show.tsx` | Detall d'una pel·lícula |
| `pages/books/index.tsx` | Llistat de llibres (taula desktop, cards mòbil) |
| `pages/books/create.tsx` | Formulari de creació de llibres |
| `pages/books/edit.tsx` | Formulari d'edició de llibres |
| `pages/books/show.tsx` | Detall d'un llibre |

## Instal·lació

```bash
# Instal·lar dependències
composer install
npm install

# Configurar entorn
cp .env.example .env
php artisan key:generate

# Crear base de dades i seed
php artisan migrate --seed

# Iniciar servidor de desenvolupament
composer run dev
```

## Tests

```bash
# Executar tots els tests
php artisan test --compact

# Executar tests de pel·lícules
php artisan test --compact tests/Feature/MovieTest.php

# Executar tests de llibres
php artisan test --compact tests/Feature/BookTest.php
```
