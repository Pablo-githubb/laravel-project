import { Link } from '@inertiajs/react';
import { Film, BookOpen, ArrowRight, Sparkles } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';
import { index as moviesIndex } from '@/routes/movies';
import { index as booksIndex } from '@/routes/books';

/**
 * Pàgina d'inici (landing page) de l'aplicació LaravelTinkering.
 *
 * Mostra una presentació del projecte amb targetes d'accés ràpid
 * a les seccions de pel·lícules i llibres.
 */
export default function Welcome() {
    return (
        <PublicLayout title="Inici">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHpNMzYgMjRoMXY0aC0xek0yNCAzNmg0djFoLTR6TTI0IDI0aDF2NGgtMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
                <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                            <Sparkles className="h-4 w-4" />
                            Laravel 12 + React + Inertia v2
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                            Laravel
                            <span className="text-yellow-300">Tinkering</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-indigo-100">
                            Aplicació web amb arquitectura MVC que demostra el CRUD complet
                            de Pel·lícules i Llibres. Construïda amb Laravel, React,
                            Inertia.js i Tailwind CSS.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href={moviesIndex().url}
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
                            >
                                <Film className="h-5 w-5" />
                                Veure Pel·lícules
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href={booksIndex().url}
                                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                            >
                                <BookOpen className="h-5 w-5" />
                                Veure Llibres
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-20 dark:bg-neutral-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Funcionalitats del Projecte
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: 'CRUD Complet',
                                description:
                                    'Crear, llegir, actualitzar i eliminar registres a les pàgines de Pel·lícules i Llibres.',
                                icon: '🔄',
                            },
                            {
                                title: 'Disseny Responsive',
                                description:
                                    "L'aplicació s'adapta a qualsevol dispositiu: mòbil, tauleta i escriptori.",
                                icon: '📱',
                            },
                            {
                                title: 'Arquitectura MVC',
                                description:
                                    'Separació clara entre Models, Vistes (React) i Controladors (Laravel).',
                                icon: '🏗️',
                            },
                            {
                                title: 'Validació de Dades',
                                description:
                                    'Form Requests personalitzats amb missatges en català per a cada formulari.',
                                icon: '✅',
                            },
                            {
                                title: 'Base de Dades SQLite',
                                description:
                                    'Dades persistents amb migracions i seeders per a configuració ràpida.',
                                icon: '💾',
                            },
                            {
                                title: 'Tests Automatitzats',
                                description:
                                    'Tests amb Pest PHP per verificar el correcte funcionament de cada CRUD.',
                                icon: '🧪',
                            },
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-indigo-300 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-indigo-600"
                            >
                                <div className="mb-4 text-4xl">{feature.icon}</div>
                                <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
