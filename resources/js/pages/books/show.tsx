import { Link } from '@inertiajs/react';
import { ArrowLeft, BookOpen, Calendar, FileText, CheckCircle, XCircle } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import { index as booksIndex } from '@/routes/books';

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
 * Pàgina de detall d'un llibre.
 *
 * Mostra tota la informació d'un llibre amb un disseny
 * de targeta moderna i un botó per tornar al llistat.
 */
export default function BooksShow({ book }: { book: Book }) {
    return (
        <PublicLayout title={book.title}>
            <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
                <Link
                    href={booksIndex().url}
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Tornar al llistat
                </Link>

                <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-8 sm:px-8">
                        <div className="flex items-start justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-white sm:text-3xl">{book.title}</h1>
                                <p className="mt-2 text-emerald-200">{book.author}</p>
                            </div>
                            {book.is_available ? (
                                <span className="inline-flex items-center gap-1 rounded-full bg-green-400/20 px-3 py-1 text-sm font-medium text-green-200">
                                    <CheckCircle className="h-4 w-4" /> Disponible
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-1 rounded-full bg-red-400/20 px-3 py-1 text-sm font-medium text-red-200">
                                    <XCircle className="h-4 w-4" /> No disponible
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="grid gap-6 p-6 sm:grid-cols-3 sm:p-8">
                        <div className="flex items-center gap-3 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900">
                            <BookOpen className="h-8 w-8 text-emerald-500" />
                            <div>
                                <p className="text-xs font-medium text-neutral-500 uppercase dark:text-neutral-400">Autor</p>
                                <p className="text-sm font-semibold text-neutral-900 dark:text-white">{book.author}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900">
                            <Calendar className="h-8 w-8 text-teal-500" />
                            <div>
                                <p className="text-xs font-medium text-neutral-500 uppercase dark:text-neutral-400">Any de publicació</p>
                                <p className="text-sm font-semibold text-neutral-900 dark:text-white">{book.published_year}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-900">
                            <FileText className="h-8 w-8 text-cyan-500" />
                            <div>
                                <p className="text-xs font-medium text-neutral-500 uppercase dark:text-neutral-400">Pàgines</p>
                                <p className="text-sm font-semibold text-neutral-900 dark:text-white">{book.pages} pàgines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
