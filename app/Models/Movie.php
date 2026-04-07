<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Representa una pel·lícula dins de l'aplicació.
 *
 * Conté la informació bàsica d'una pel·lícula com el títol,
 * director, any d'estrena, duració i si és destacada.
 *
 * @property int $id
 * @property string $title
 * @property string $director
 * @property int $release_year
 * @property int $duration_minutes
 * @property bool $is_featured
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 */
class Movie extends Model
{
    /** @use HasFactory<\Database\Factories\MovieFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'director',
        'release_year',
        'duration_minutes',
        'is_featured',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'release_year' => 'integer',
            'duration_minutes' => 'integer',
            'is_featured' => 'boolean',
        ];
    }
}
