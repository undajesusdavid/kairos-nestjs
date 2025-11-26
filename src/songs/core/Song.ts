import { Uuid } from "src/shared/core/Uuid";

export interface SongProps {
    uuid: Uuid;
    name: string;
    interpreter: string;
    genre: string;
    lyrics: string;
    link: string;
}

export class Song {
    private uuid: Uuid;
    private name: string;
    private interpreter: string;
    private genre: string;
    private lyrics: string;
    private link: string;

    constructor(props: SongProps) {
        this.uuid = props.uuid;
        this.name = props.name;
        this.interpreter = props.interpreter;
        this.genre = props.genre;
        this.lyrics = props.lyrics;
        this.link = props.link;
    }

    getId(): string {
        return this.uuid.toString();
    }

    getName(): string {
        return this.name;
    }

    getInterpreter(): string {
        return this.interpreter;
    }

    getGenre(): string {
        return this.genre;
    }

    getLyrics(): string {
        return this.lyrics;
    }

    getLink(): string {
        return this.link;
    }
}
