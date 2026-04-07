<?php

namespace Database\Factories;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * Factory per generar instàncies del model Movie.
 *
 * Utilitzada per crear dades de prova o per al seeder
 * amb informació realista de pel·lícules.
 *
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Movie>
 */
class MovieFactory extends Factory
{
    protected $model = Movie::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),
            'director' => fake()->name(),
            'release_year' => fake()->numberBetween(1970, 2026),
            'duration_minutes' => fake()->numberBetween(80, 200),
            'is_featured' => fake()->boolean(20),
        ];
    }

    /**
     * Indica que la pel·lícula és destacada.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes): array => [
            'is_featured' => true,
        ]);
    }
}
