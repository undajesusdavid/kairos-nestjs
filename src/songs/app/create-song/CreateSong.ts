import { DtoCreateSongRequest } from "./DtoCreateSongRequest";
import { DtoCreateSongResponse } from "./DtoCreateSongResponse";

export interface CreateSong {
    create(songDto : DtoCreateSongRequest) : Promise<DtoCreateSongResponse>;
}