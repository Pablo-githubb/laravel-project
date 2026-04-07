import { Link } from '@inertiajs/react';
import { ArrowLeft, Star, Clock, Calendar, Film } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import { index as moviesIndex } from '@/routes/movies';

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
 * Pàgina de detall d'una pel·lícula.
 *
 * Mostra tota la informació d'una pel·lícula amb un disseny
 * de targeta moderna i un botó per tornar al llistat.
 */
export default function MoviesShow({ movie }: { movie: Movie }) {
    return (
        <PublicLayout title={movie.title}>
            <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
                <Link
                    href={moviesIndex().url}
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Tornar al llistat
                </Link>

                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-8 sm:px-8">
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-white sm:text-3xl">{movie.title}</h1>
                                <p className="mt-2 text-indigo-200">{movie.director}</p>
                            </div>
                            {movie.is_featured && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/20 px-3 py-1 text-sm font-medium text-yellow-300">
                                    <Star className="h-4 w-4" /> Destacada
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="grid gap-6 p-6 sm:grid-cols-3 sm:p-8">
                        <div className="flex items-center gap-3 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900">
                            <Film className="h-8 w-8 text-indigo-500" />
                            <div>
                                <p className="text-xs font-medium text-neutral-500 uppercase dark:text-neutral-400">Director</p>
                                <p className="text-sm font-semibold text-neutral-900 dark:text-white">{movie.director}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900">
                            <Calendar className="h-8 w-8 text-purple-500" />
                            <div>
                                <p className="text-xs font-medium text-neutral-500 uppercase dark:text-neutral-400">Any d&apos;estrena</p>
                                <p className="text-sm font-semibold text-neutral-900 dark:text-white">{movie.release_year}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900">
                            <Clock className="h-8 w-8 text-pink-500" />
                            <div>
                                <p className="text-xs font-medium text-neutral-500 uppercase dark:text-neutral-400">Duració</p>
                                <p className="text-sm font-semibold text-neutral-900 dark:text-white">{movie.duration_minutes} minuts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
