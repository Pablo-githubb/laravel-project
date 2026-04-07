<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Seeder;

/**
 * Seeder per poblar la taula de pel·lícules amb dades inicials.
 *
 * Insereix 10 pel·lícules reals com a dades per defecte
 * per a l'aplicació.
 */
class MovieSeeder extends Seeder
{
    /**
     * Executa els inserts de pel·lícules a la base de dades.
     */
    public function run(): void
    {
        $movies = [
            [
                'title' => 'Inception',
                'director' => 'Christopher Nolan',
                'release_year' => 2010,
                'duration_minutes' => 148,
                'is_featured' => true,
            ],
            [
                'title' => 'The Shawshank Redemption',
                'director' => 'Frank Darabont',
                'release_year' => 1994,
                'duration_minutes' => 142,
                'is_featured' => true,
            ],
            [
                'title' => 'Pulp Fiction',
                'director' => 'Quentin Tarantino',
                'release_year' => 1994,
                'duration_minutes' => 154,
                'is_featured' => false,
            ],
            [
                'title' => 'The Dark Knight',
                'director' => 'Christopher Nolan',
                'release_year' => 2008,
                'duration_minutes' => 152,
                'is_featured' => true,
            ],
            [
                'title' => 'Forrest Gump',
                'director' => 'Robert Zemeckis',
                'release_year' => 1994,
                'duration_minutes' => 142,
                'is_featured' => false,
            ],
            [
                'title' => 'The Matrix',
                'director' => 'Lana Wachowski',
                'release_year' => 1999,
                'duration_minutes' => 136,
                'is_featured' => true,
            ],
            [
                'title' => 'Interstellar',
                'director' => 'Christopher Nolan',
                'release_year' => 2014,
                'duration_minutes' => 169,
                'is_featured' => false,
            ],
            [
                'title' => 'Parasite',
                'director' => 'Bong Joon-ho',
                'release_year' => 2019,
                'duration_minutes' => 132,
                'is_featured' => true,
            ],
            [
                'title' => 'The Godfather',
                'director' => 'Francis Ford Coppola',
                'release_year' => 1972,
                'duration_minutes' => 175,
                'is_featured' => false,
            ],
            [
                'title' => 'Spirited Away',
                'director' => 'Hayao Miyazaki',
                'release_year' => 2001,
                'duration_minutes' => 125,
                'is_featured' => false,
            ],
        ];

        foreach ($movies as $movie) {
            Movie::query()->create($movie);
        }
    }
}
