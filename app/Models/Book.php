<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Representa un llibre dins de l'aplicació.
 *
 * Conté la informació bàsica d'un llibre com el títol,
 * autor, any de publicació, nombre de pàgines i disponibilitat.
 *
 * @property int $id
 * @property string $title
 * @property string $author
 * @property int $published_year
 * @property int $pages
 * @property bool $is_available
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 */
class Book extends Model
{
    /** @use HasFactory<\Database\Factories\BookFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'author',
        'published_year',
        'pages',
        'is_available',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'published_year' => 'integer',
            'pages' => 'integer',
            'is_available' => 'boolean',
        ];
    }
}
