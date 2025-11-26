import { Vocalist } from "src/vocalists/core/Vocalist";

export interface VocalistRepository {
    create(Vocalist: Vocalist): Promise<boolean>;
    update(id: string, Vocalist: Vocalist): Promise<boolean>
    getAll(): Promise<Vocalist[]>
    getOneById(id: string): Promise<Vocalist>
    delete(id: string): Promise<boolean>
}