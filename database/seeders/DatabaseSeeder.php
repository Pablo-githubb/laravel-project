<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

/**
 * Seeder principal de l'aplicació.
 *
 * Executa tots els seeders necessaris per poblar
 * la base de dades amb dades inicials.
 */
class DatabaseSeeder extends Seeder
{
    /**
     * Executa els seeders de l'aplicació.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $this->call([
            MovieSeeder::class,
            BookSeeder::class,
        ]);
    }
}
