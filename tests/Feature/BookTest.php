<?php

use App\Models\Book;

test('it can list books', function () {
    Book::factory()->count(3)->create();

    $response = $this->get(route('books.index'));

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page
        ->component('books/index')
        ->has('books', 3)
    );
});

test('it can show a book', function () {
    $book = Book::factory()->create();

    $response = $this->get(route('books.show', $book));

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page
        ->component('books/show')
        ->has('book')
    );
});

test('it can render the create book form', function () {
    $response = $this->get(route('books.create'));

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page->component('books/create'));
});

test('it can create a book', function () {
    $bookData = [
        'title' => 'Test Book',
        'author' => 'Test Author',
        'published_year' => 2024,
        'pages' => 300,
        'is_available' => true,
    ];

    $response = $this->post(route('books.store'), $bookData);

    $response->assertRedirect(route('books.index'));
    $this->assertDatabaseHas('books', ['title' => 'Test Book']);
});

test('it can render the edit book form', function () {
    $book = Book::factory()->create();

    $response = $this->get(route('books.edit', $book));

    $response->assertSuccessful();
    $response->assertInertia(fn ($page) => $page
        ->component('books/edit')
        ->has('book')
    );
});

test('it can update a book', function () {
    $book = Book::factory()->create();

    $response = $this->put(route('books.update', $book), [
        'title' => 'Updated Title',
        'author' => 'Updated Author',
        'published_year' => 2025,
        'pages' => 500,
        'is_available' => false,
    ]);

    $response->assertRedirect(route('books.index'));
    $this->assertDatabaseHas('books', ['title' => 'Updated Title']);
});

test('it can delete a book', function () {
    $book = Book::factory()->create();

    $response = $this->delete(route('books.destroy', $book));

    $response->assertRedirect(route('books.index'));
    $this->assertDatabaseMissing('books', ['id' => $book->id]);
});

test('it validates required fields on create', function () {
    $response = $this->post(route('books.store'), []);

    $response->assertSessionHasErrors(['title', 'author', 'published_year', 'pages']);
});
