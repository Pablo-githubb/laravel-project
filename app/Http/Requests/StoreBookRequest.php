<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Form Request per validar la creació d'un llibre.
 *
 * Defineix les regles de validació necessàries per assegurar
 * que les dades enviades al crear un llibre són correctes.
 */
class StoreBookRequest extends FormRequest
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
            'author' => ['required', 'string', 'max:255'],
            'published_year' => ['required', 'integer', 'min:1000', 'max:2030'],
            'pages' => ['required', 'integer', 'min:1', 'max:5000'],
            'is_available' => ['boolean'],
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
            'title.required' => 'El títol del llibre és obligatori.',
            'author.required' => "L'autor és obligatori.",
            'published_year.required' => "L'any de publicació és obligatori.",
            'pages.required' => 'El nombre de pàgines és obligatori.',
            'pages.min' => 'El nombre de pàgines ha de ser almenys 1.',
        ];
    }
}
