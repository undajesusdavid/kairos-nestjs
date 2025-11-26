import { Module } from "@nestjs/common";
import { VocalistRepositoryImp } from "./services/VocalistRepositoryImp";
import { SharedModule } from "src/shared/structure/shared.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { VocalistModel } from "./vocalist.sequealize";

@Module({
    imports: [SharedModule, SequelizeModule.forFeature([VocalistModel])],
    controllers: [],
    providers: [VocalistRepositoryImp],
    exports: [],

})
export class VocalistModule {} 