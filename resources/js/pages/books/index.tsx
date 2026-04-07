import { Link, router } from '@inertiajs/react';
import { Plus, Eye, Pencil, Trash2, CheckCircle, XCircle } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import {
    create as booksCreate,
    show as booksShow,
    edit as booksEdit,
    destroy as booksDestroy,
} from '@/routes/books';

/**
 * Tipus que representa un llibre.
 */
interface Book {
    id: number;
    title: string;
    author: string;
    published_year: number;
    pages: number;
    is_available: boolean;
}

/**
 * Pàgina principal del CRUD de Llibres.
 *
 * Mostra una taula responsive amb tots els llibres
 * i accions per crear, veure, editar i eliminar.
 */
export default function BooksIndex({ books }: { books: Book[] }) {
    function handleDelete(book: Book) {
        if (confirm(`Estàs segur que vols eliminar "${book.title}"?`)) {
            router.delete(booksDestroy(book.id).url);
        }
    }

    return (
        <PublicLayout title="Llibres">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                            Llibres
                        </h1>
                        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                            Gestiona la col·lecció de llibres
                        </p>
                    </div>
                    <Link
                        href={booksCreate().url}
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md"
                    >
                        <Plus className="h-4 w-4" />
                        Nou Llibre
                    </Link>
                </div>

                {/* Desktop table */}
                <div className="hidden overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm md:block dark:border-neutral-700 dark:bg-neutral-800">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900">
                            <tr>
                                <th className="px-6 py-3.5 font-semibold text-neutral-700 dark:text-neutral-300">Títol</th>
                                <th className="px-6 py-3.5 font-semibold text-neutral-700 dark:text-neutral-300">Autor</th>
                                <th className="px-6 py-3.5 font-semibold text-neutral-700 dark:text-neutral-300">Any</th>
                                <th className="px-6 py-3.5 font-semibold text-neutral-700 dark:text-neutral-300">Pàgines</th>
                                <th className="px-6 py-3.5 font-semibold text-neutral-700 dark:text-neutral-300">Disponible</th>
                                <th className="px-6 py-3.5 text-right font-semibold text-neutral-700 dark:text-neutral-300">Accions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                            {books.map((book) => (
                                <tr key={book.id} className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-750">
                                    <td className="px-6 py-4 font-medium text-neutral-900 dark:text-white">{book.title}</td>
                                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{book.author}</td>
                                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{book.published_year}</td>
                                    <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{book.pages}</td>
                                    <td className="px-6 py-4">
                                        {book.is_available ? (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                <CheckCircle className="h-3 w-3" /> Sí
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-400">
                                                <XCircle className="h-3 w-3" /> No
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link href={booksShow(book.id).url} className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-900/20">
                                                <Eye className="h-4 w-4" />
                                            </Link>
                                            <Link href={booksEdit(book.id).url} className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-amber-900/20">
                                                <Pencil className="h-4 w-4" />
                                            </Link>
                                            <button type="button" onClick={() => handleDelete(book)} className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20">
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
                    {books.map((book) => (
                        <div key={book.id} className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
                            <div className="mb-3 flex items-start justify-between">
                                <div>
                                    <h3 className="font-semibold text-neutral-900 dark:text-white">{book.title}</h3>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{book.author}</p>
                                </div>
                                {book.is_available ? (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                        <CheckCircle className="h-3 w-3" />
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-400">
                                        <XCircle className="h-3 w-3" />
                                    </span>
                                )}
                            </div>
                            <div className="mb-3 flex gap-4 text-sm text-neutral-500 dark:text-neutral-400">
                                <span>{book.published_year}</span>
                                <span>{book.pages} pàg.</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link href={booksShow(book.id).url} className="flex-1 rounded-lg border border-neutral-200 py-2 text-center text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-700">
                                    Veure
                                </Link>
                                <Link href={booksEdit(book.id).url} className="flex-1 rounded-lg border border-neutral-200 py-2 text-center text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-700">
                                    Editar
                                </Link>
                                <button type="button" onClick={() => handleDelete(book)} className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {books.length === 0 && (
                    <div className="rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50 py-16 text-center dark:border-neutral-700 dark:bg-neutral-800">
                        <p className="text-neutral-500 dark:text-neutral-400">No hi ha llibres encara.</p>
                        <Link href={booksCreate().url} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400">
                            <Plus className="h-4 w-4" /> Crea el primer
                        </Link>
                    </div>
                )}
            </div>
        </PublicLayout>
    );
}
