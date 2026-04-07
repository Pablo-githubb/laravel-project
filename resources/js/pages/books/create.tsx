import { useForm } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import { store as booksStore } from '@/routes/books';

/**
 * Pàgina per crear un nou llibre.
 *
 * Mostra un formulari amb tots els camps necessaris
 * i gestiona la validació d'errors del servidor.
 */
export default function BooksCreate() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        author: '',
        published_year: new Date().getFullYear(),
        pages: 200,
        is_available: true,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(booksStore().url);
    }

    return (
        <PublicLayout title="Nou Llibre">
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:px-8">
                <h1 className="mb-8 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    Nou Llibre
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
                            placeholder="Ex: Don Quixote"
                        />
                        {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
                    </div>

                    <div>
                        <label htmlFor="author" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Autor *
                        </label>
                        <input
                            id="author"
                            type="text"
                            value={data.author}
                            onChange={(e) => setData('author', e.target.value)}
                            className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-900 dark:text-white"
                            placeholder="Ex: Miguel de Cervantes"
                        />
                        {errors.author && <p className="mt-1 text-sm text-red-500">{errors.author}</p>}
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="published_year" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Any de publicació *
                            </label>
                            <input
                                id="published_year"
                                type="number"
                                value={data.published_year}
                                onChange={(e) => setData('published_year', parseInt(e.target.value))}
                                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-900 dark:text-white"
                                min={1000}
                                max={2030}
                            />
                            {errors.published_year && <p className="mt-1 text-sm text-red-500">{errors.published_year}</p>}
                        </div>

                        <div>
                            <label htmlFor="pages" className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                                Pàgines *
                            </label>
                            <input
                                id="pages"
                                type="number"
                                value={data.pages}
                                onChange={(e) => setData('pages', parseInt(e.target.value))}
                                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-neutral-600 dark:bg-neutral-900 dark:text-white"
                                min={1}
                                max={5000}
                            />
                            {errors.pages && <p className="mt-1 text-sm text-red-500">{errors.pages}</p>}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <input
                            id="is_available"
                            type="checkbox"
                            checked={data.is_available}
                            onChange={(e) => setData('is_available', e.target.checked)}
                            className="h-4 w-4 rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500 dark:border-neutral-600"
                        />
                        <label htmlFor="is_available" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            Disponible
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
                            {processing ? 'Creant...' : 'Crear Llibre'}
                        </button>
                    </div>
                </form>
            </div>
        </PublicLayout>
    );
}
