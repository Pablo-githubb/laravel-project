import { useForm } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { store as moviesStore } from '@/routes/movies';

/**
 * Pàgina per crear una nova pel·lícula.
 *
 * Mostra un formulari amb tots els camps necessaris
 * i gestiona la validació d'errors del servidor.
 */
export default function MoviesCreate() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        director: '',
        release_year: new Date().getFullYear(),
        duration_minutes: 120,
        is_featured: false,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(moviesStore().url);
    }

    return (
        <PublicLayout title="Nova Pel·lícula">
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="mb-8 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Nova Pel·lícula
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 dark:border-neutral-700 dark:bg-neutral-800">
                    <div>
                        <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Títol *
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-900 dark:text-white"
                            placeholder="Ex: Inception"
                        />
                        {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
                    </div>

                    <div>
                        <label htmlFor="director" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Director *
                        </label>
                        <input
                            id="director"
                            type="text"
                            value={data.director}
                            onChange={(e) => setData('director', e.target.value)}
                            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-900 dark:text-white"
                            placeholder="Ex: Christopher Nolan"
                        />
                        {errors.director && <p className="mt-1 text-sm text-red-500">{errors.director}</p>}
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="release_year" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Any d&apos;estrena *
                            </label>
                            <input
                                id="release_year"
                                type="number"
                                value={data.release_year}
                                onChange={(e) => setData('release_year', parseInt(e.target.value))}
                                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-900 dark:text-white"
                                min={1888}
                                max={2030}
                            />
                            {errors.release_year && <p className="mt-1 text-sm text-red-500">{errors.release_year}</p>}
                        </div>

                        <div>
                            <label htmlFor="duration_minutes" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Duració (minuts) *
                            </label>
                            <input
                                id="duration_minutes"
                                type="number"
                                value={data.duration_minutes}
                                onChange={(e) => setData('duration_minutes', parseInt(e.target.value))}
                                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-900 dark:text-white"
                                min={1}
                                max={600}
                            />
                            {errors.duration_minutes && <p className="mt-1 text-sm text-red-500">{errors.duration_minutes}</p>}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            id="is_featured"
                            type="checkbox"
                            checked={data.is_featured}
                            onChange={(e) => setData('is_featured', e.target.checked)}
                            className="h-4 w-4 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500 dark:border-neutral-600"
                        />
                        <label htmlFor="is_featured" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Pel·lícula destacada
                        </label>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="rounded-xl border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-700"
                        >
                            Cancel·lar
                        </button>
                        <button
                            type="submit"
                            disabled={processing}
                            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 disabled:opacity-50"
                        >
                            {processing ? 'Creant...' : 'Crear Pel·lícula'}
                        </button>
                    </div>
                </form>
            </div>
        </PublicLayout>
    );
}
