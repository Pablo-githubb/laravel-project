<?php

namespace Database\Factories;

use App\Models\Book;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * Factory per generar instàncies del model Book.
 *
 * Utilitzada per crear dades de prova o per al seeder
 * amb informació realista de llibres.
 *
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    protected $model = Book::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(4),
            'author' => fake()->name(),
            'published_year' => fake()->numberBetween(1950, 2026),
            'pages' => fake()->numberBetween(100, 800),
            'is_available' => fake()->boolean(80),
        ];
    }

    /**
     * Indica que el llibre no està disponible.
     */
    public function unavailable(): static
    {
        return $this->state(fn (array $attributes): array => [
            'is_available' => false,
        ]);
    }
}
