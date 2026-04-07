<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Models\Book;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

/**
 * Controlador de recursos per a la gestió de llibres.
 *
 * Gestiona totes les operacions CRUD (Crear, Llegir,
 * Actualitzar, Eliminar) per al model Book.
 */
class BookController extends Controller
{
    /**
     * Mostra el llistat de tots els llibres.
     */
    public function index(): Response
    {
        return Inertia::render('books/index', [
            'books' => Book::query()->latest()->get(),
        ]);
    }

    /**
     * Mostra el formulari per crear un nou llibre.
     */
    public function create(): Response
    {
        return Inertia::render('books/create');
    }

    /**
     * Emmagatzema un nou llibre a la base de dades.
     */
    public function store(StoreBookRequest $request): RedirectResponse
    {
        Book::query()->create($request->validated());

        return redirect()->route('books.index');
    }

    /**
     * Mostra el detall d'un llibre específic.
     */
    public function show(Book $book): Response
    {
        return Inertia::render('books/show', [
            'book' => $book,
        ]);
    }

    /**
     * Mostra el formulari per editar un llibre existent.
     */
    public function edit(Book $book): Response
    {
        return Inertia::render('books/edit', [
            'book' => $book,
        ]);
    }

    /**
     * Actualitza la informació d'un llibre existent.
     */
    public function update(UpdateBookRequest $request, Book $book): RedirectResponse
    {
        $book->update($request->validated());

        return redirect()->route('books.index');
    }

    /**
     * Elimina un llibre de la base de dades.
     */
    public function destroy(Book $book): RedirectResponse
    {
        $book->delete();

        return redirect()->route('books.index');
    }
}
