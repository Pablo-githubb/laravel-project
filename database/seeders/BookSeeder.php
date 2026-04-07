<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Seeder;

/**
 * Seeder per poblar la taula de llibres amb dades inicials.
 *
 * Insereix 10 llibres reals com a dades per defecte
 * per a l'aplicació.
 */
class BookSeeder extends Seeder
{
    /**
     * Executa els inserts de llibres a la base de dades.
     */
    public function run(): void
    {
        $books = [
            [
                'title' => 'Don Quixote',
                'author' => 'Miguel de Cervantes',
                'published_year' => 1605,
                'pages' => 863,
                'is_available' => true,
            ],
            [
                'title' => '1984',
                'author' => 'George Orwell',
                'published_year' => 1949,
                'pages' => 328,
                'is_available' => true,
            ],
            [
                'title' => 'To Kill a Mockingbird',
                'author' => 'Harper Lee',
                'published_year' => 1960,
                'pages' => 281,
                'is_available' => false,
            ],
            [
                'title' => 'The Great Gatsby',
                'author' => 'F. Scott Fitzgerald',
                'published_year' => 1925,
                'pages' => 180,
                'is_available' => true,
            ],
            [
                'title' => 'One Hundred Years of Solitude',
                'author' => 'Gabriel García Márquez',
                'published_year' => 1967,
                'pages' => 417,
                'is_available' => true,
            ],
            [
                'title' => 'Brave New World',
                'author' => 'Aldous Huxley',
                'published_year' => 1932,
                'pages' => 311,
                'is_available' => false,
            ],
            [
                'title' => 'The Catcher in the Rye',
                'author' => 'J.D. Salinger',
                'published_year' => 1951,
                'pages' => 277,
                'is_available' => true,
            ],
            [
                'title' => 'Harry Potter and the Philosopher\'s Stone',
                'author' => 'J.K. Rowling',
                'published_year' => 1997,
                'pages' => 223,
                'is_available' => true,
            ],
            [
                'title' => 'The Lord of the Rings',
                'author' => 'J.R.R. Tolkien',
                'published_year' => 1954,
                'pages' => 1178,
                'is_available' => true,
            ],
            [
                'title' => 'Pride and Prejudice',
                'author' => 'Jane Austen',
                'published_year' => 1813,
                'pages' => 432,
                'is_available' => false,
            ],
        ];

        foreach ($books as $book) {
            Book::query()->create($book);
        }
    }
}
