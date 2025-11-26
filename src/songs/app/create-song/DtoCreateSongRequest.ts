export class DtoCreateSongRequest {
    name: string;
    interpreter: string;
    genre: string;
    lyrics: string;
    link: string;

    validate(): string[] {
        const errors: string[] = [];
        // Name
        if (!this.name || this.name.trim().length < 2) {
            errors.push('Nombre inválido: debe tener al menos 2 caracteres.');
        }

        // Interpreter
        if (!this.interpreter || this.interpreter.trim().length < 2) {
            errors.push('Intérprete inválido: debe tener al menos 2 caracteres.');
        }

        // Genre
        if (!this.genre || this.genre.trim().length < 2) {
            errors.push('Género inválido: debe tener al menos 2 caracteres.');
        }

        // Lyrics
        if (!this.lyrics || this.lyrics.trim().length < 10) {
            errors.push('Letra inválida: debe tener al menos 10 caracteres.');
        }

        // Link: URL válida
        try {
            new URL(this.link);
        } catch {
            errors.push('Link inválido: debe ser una URL válida.');
        }

        return errors;
    }
}
