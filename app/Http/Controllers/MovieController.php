<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMovieRequest;
use App\Http\Requests\UpdateMovieRequest;
use App\Models\Movie;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

/**
 * Controlador de recursos per a la gestió de pel·lícules.
 *
 * Gestiona totes les operacions CRUD (Crear, Llegir,
 * Actualitzar, Eliminar) per al model Movie.
 */
class MovieController extends Controller
{
    /**
     * Mostra el llistat de totes les pel·lícules.
     */
    public function index(): Response
    {
        return Inertia::render('movies/index', [
            'movies' => Movie::query()->latest()->get(),
        ]);
    }

    /**
     * Mostra el formulari per crear una nova pel·lícula.
     */
    public function create(): Response
    {
        return Inertia::render('movies/create');
    }

    /**
     * Emmagatzema una nova pel·lícula a la base de dades.
     */
    public function store(StoreMovieRequest $request): RedirectResponse
    {
        Movie::query()->create($request->validated());

        return redirect()->route('movies.index');
    }

    /**
     * Mostra el detall d'una pel·lícula específica.
     */
    public function show(Movie $movie): Response
    {
        return Inertia::render('movies/show', [
            'movie' => $movie,
        ]);
    }

    /**
     * Mostra el formulari per editar una pel·lícula existent.
     */
    public function edit(Movie $movie): Response
    {
        return Inertia::render('movies/edit', [
            'movie' => $movie,
        ]);
    }

    /**
     * Actualitza la informació d'una pel·lícula existent.
     */
    public function update(UpdateMovieRequest $request, Movie $movie): RedirectResponse
    {
        $movie->update($request->validated());

        return redirect()->route('movies.index');
    }

    /**
     * Elimina una pel·lícula de la base de dades.
     */
    public function destroy(Movie $movie): RedirectResponse
    {
        $movie->delete();

        return redirect()->route('movies.index');
    }
}
