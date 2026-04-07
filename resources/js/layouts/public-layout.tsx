import { Head, Link } from '@inertiajs/react';
import { Film, BookOpen, Home, Menu, X } from 'lucide-react';
import { useState, type PropsWithChildren } from 'react';
import { index as moviesIndex } from '@/routes/movies';
import { index as booksIndex } from '@/routes/books';

/**
 * Layout públic de l'aplicació amb navbar i footer.
 *
 * Proporciona una estructura consistent per a totes les pàgines públiques
 * amb navegació responsive (hamburger menu en mòbil) i footer amb
 * informació del creador.
 */
export default function PublicLayout({
    children,
    title,
}: PropsWithChildren<{ title?: string }>) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Inici', icon: Home },
        { href: moviesIndex().url, label: 'Pel·lícules', icon: Film },
        { href: booksIndex().url, label: 'Llibres', icon: BookOpen },
    ];

    return (
        <>
            {title && <Head title={title} />}

            {/* Navbar */}
            <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-950/80">
                <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-xl font-bold tracking-tight text-neutral-900 dark:text-white"
                    >
                        <Film className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                        <span>LaravelTinkering</span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
                            >
                                <link.icon className="h-4 w-4" />
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 md:hidden dark:text-neutral-300 dark:hover:bg-neutral-800"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </nav>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="border-t border-neutral-200 bg-white md:hidden dark:border-neutral-800 dark:bg-neutral-950">
                        <div className="space-y-1 px-4 py-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <link.icon className="h-5 w-5" />
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* Main content */}
            <main className="min-h-[calc(100vh-8rem)]">{children}</main>

            {/* Footer */}
            <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
                <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <Film className="h-4 w-4" />
                            <span>LaravelTinkering &copy; {new Date().getFullYear()}</span>
                        </div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">
                            Creat per <span className="font-semibold text-neutral-700 dark:text-neutral-200">Pablo</span> — Serveis i Processos
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
