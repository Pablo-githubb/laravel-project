import { Link, router } from '@inertiajs/react';
import { Plus, Eye, Pencil, Trash2, Star } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import {
    create as moviesCreate,
    show as moviesShow,
    edit as moviesEdit,
    destroy as moviesDestroy,
} from '@/routes/movies';

/**
 * Tipus que representa una pel·lícula.
 */
interface Movie {
    id: number;
    title: string;
    director: string;
    release_year: number;
    duration_minutes: number;
    is_featured: boolean;
}

/**
 * Pàgina principal del CRUD de Pel·lícules.
 *
 * Mostra una taula responsive amb totes les pel·lícules
 * i accions per crear, veure, editar i eliminar.
 */
export default function MoviesIndex({ movies }: { movies: Movie[] }) {
    function handleDelete(movie: Movie) {
        if (confirm(`Estàs segur que vols eliminar "${movie.title}"?`)) {
            router.delete(moviesDestroy(movie.id).url);
        }
    }

    return (
        <PublicLayout title="Pel·lícules">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                            Pel·lícules
                        </h1>
                        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                            Gestiona la col·lecció de pel·lícules
                        </p>
                    </div>
                    <Link
                        href={moviesCreate().url}
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md"
                    >
                        <Plus className="h-4 w-4" />
                        Nova Pel·lícula
                    </Link>
                </div>

                {/* Desktop table */}
                <div className="hidden overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm md:block dark:border-neutral-700 dark:bg-neutral-800">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900">
                            <tr>
                                <th className="px-6 py-3.5 font-semibold text-neutral-700 dark:text-neutral-300">Títol</th>
                                <th className="px-6 py-3.5 font-semibold text-neutral-700 dark:text-neutral-300">Director</th>
                                <th className="px-6 py-3.5 font-semibold text-neutral-700 dark:text-neutral-300">Any</th>
                                <th className="px-6 py-3.5 font-semibold text-neutral-700 dark:text-neutral-300">Duració</th>
                                <th className="px-6 py-3.5 font-semibold text-neutral-700 dark:text-neutral-300">Destacada</th>
                                <th className="px-6 py-3.5 text-right font-semibold text-neutral-700 dark:text-neutral-300">Accions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                            {movies.map((movie) => (
                                <tr key={movie.id} className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-750">
                                    <td className="px-6 py-4 font-medium text-neutral-900 dark:text-white">{movie.title}</td>
                                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{movie.director}</td>
                                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{movie.release_year}</td>
                                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{movie.duration_minutes} min</td>
                                    <td className="px-6 py-4">
                                        {movie.is_featured ? (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                                                <Star className="h-3 w-3" /> Sí
                                            </span>
                                        ) : (
                                            <span className="text-neutral-400">No</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link href={moviesShow(movie.id).url} className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20">
                                                <Eye className="h-4 w-4" />
                                            </Link>
                                            <Link href={moviesEdit(movie.id).url} className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-amber-900/20">
                                                <Pencil className="h-4 w-4" />
                                            </Link>
                                            <button type="button" onClick={() => handleDelete(movie)} className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile cards */}
                <div className="space-y-4 md:hidden">
                    {movies.map((movie) => (
                        <div key={movie.id} className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
                            <div className="mb-3 flex items-start justify-between">
                                <div>
                                    <h3 className="font-semibold text-neutral-900 dark:text-white">{movie.title}</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{movie.director}</p>
                                </div>
                                {movie.is_featured && (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                                        <Star className="h-3 w-3" />
                                    </span>
                                )}
                            </div>
                            <div className="mb-3 flex gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                                <span>{movie.release_year}</span>
                                <span>{movie.duration_minutes} min</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link href={moviesShow(movie.id).url} className="flex-1 rounded-lg border border-neutral-200 py-2 text-center text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-700">
                                    Veure
                                </Link>
                                <Link href={moviesEdit(movie.id).url} className="flex-1 rounded-lg border border-neutral-200 py-2 text-center text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-700">
                                    Editar
                                </Link>
                                <button type="button" onClick={() => handleDelete(movie)} className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {movies.length === 0 && (
                    <div className="rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50 py-16 text-center dark:border-neutral-700 dark:bg-neutral-800">
                        <p className="text-neutral-500 dark:text-neutral-400">No hi ha pel·lícules encara.</p>
                        <Link href={moviesCreate().url} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">
                            <Plus className="h-4 w-4" /> Crea la primera
                        </Link>
                    </div>
                )}
            </div>
        </PublicLayout>
    );
}
