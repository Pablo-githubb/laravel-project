<?php

use App\Models\Movie;

test('it can list movies', function () {
    Movie::factory()->count(3)->create();

    $response = $this->get(route('movies.index'));

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page
        ->component('movies/index')
        ->has('movies', 3)
    );
});

test('it can show a movie', function () {
    $movie = Movie::factory()->create();

    $response = $this->get(route('movies.show', $movie));

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page
        ->component('movies/show')
        ->has('movie')
    );
});

test('it can render the create movie form', function () {
    $response = $this->get(route('movies.create'));

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page->component('movies/create'));
});

test('it can create a movie', function () {
    $movieData = [
        'title' => 'Test Movie',
        'director' => 'Test Director',
        'release_year' => 2024,
        'duration_minutes' => 120,
        'is_featured' => true,
    ];

    $response = $this->post(route('movies.store'), $movieData);

    $response->assertRedirect(route('movies.index'));
    $this->assertDatabaseHas('movies', ['title' => 'Test Movie']);
});

test('it can render the edit movie form', function () {
    $movie = Movie::factory()->create();

    $response = $this->get(route('movies.edit', $movie));

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page
        ->component('movies/edit')
        ->has('movie')
    );
});

test('it can update a movie', function () {
    $movie = Movie::factory()->create();

    $response = $this->put(route('movies.update', $movie), [
        'title' => 'Updated Title',
        'director' => 'Updated Director',
        'release_year' => 2025,
        'duration_minutes' => 150,
        'is_featured' => false,
    ]);

    $response->assertRedirect(route('movies.index'));
    $this->assertDatabaseHas('movies', ['title' => 'Updated Title']);
});

test('it can delete a movie', function () {
    $movie = Movie::factory()->create();

    $response = $this->delete(route('movies.destroy', $movie));

    $response->assertRedirect(route('movies.index'));
    $this->assertDatabaseMissing('movies', ['id' => $movie->id]);
});

test('it validates required fields on create', function () {
    $response = $this->post(route('movies.store'), []);

    $response->assertSessionHasErrors(['title', 'director', 'release_year', 'duration_minutes']);
});
