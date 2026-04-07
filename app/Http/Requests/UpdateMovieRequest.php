<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Form Request per validar l'actualització d'una pel·lícula.
 *
 * Defineix les regles de validació necessàries per assegurar
 * que les dades enviades al actualitzar una pel·lícula són correctes.
 */
class UpdateMovieRequest extends FormRequest
{
    /**
     * Determina si l'usuari està autoritzat a fer aquesta petició.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Obté les regles de validació aplicables a la petició.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'director' => ['required', 'string', 'max:255'],
            'release_year' => ['required', 'integer', 'min:1888', 'max:2030'],
            'duration_minutes' => ['required', 'integer', 'min:1', 'max:600'],
            'is_featured' => ['boolean'],
        ];
    }

    /**
     * Obté els missatges d'error personalitzats per a les regles de validació.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'title.required' => 'El títol de la pel·lícula és obligatori.',
            'director.required' => 'El director és obligatori.',
            'release_year.required' => "L'any d'estrena és obligatori.",
            'release_year.min' => "L'any d'estrena ha de ser posterior a 1888.",
            'duration_minutes.required' => 'La duració és obligatòria.',
            'duration_minutes.min' => 'La duració ha de ser almenys 1 minut.',
        ];
    }
}
