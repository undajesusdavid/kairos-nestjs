import { Injectable } from '@nestjs/common';
import { VocalistRepository } from '../../app/contracts/VocalistRepository';
import { InjectModel } from '@nestjs/sequelize';
import { VocalistId } from '../../core/VocalistId';
import { Vocalist } from '../../core/Vocalist';
import { VocalistModel } from '../vocalist.sequealize';
import { ErrorRepositoryService } from 'src/users/app/errors/ErrorRepositoryService';


@Injectable()
export class VocalistRepositoryImp implements VocalistRepository {
  constructor(@InjectModel(VocalistModel) private vocalistModel: typeof VocalistModel) { }

    private toVocalist(record: VocalistModel): Vocalist {
    /*if (!VocalistId.isValid(record.id)) {
        throw new Error("El id del vocalista almacenado no es un uuid valido")
    }*/
    return new Vocalist({
        id: VocalistId.create(record.id),
        firstName: record.firstName,
        lastName: record.lastName
    });
  }

  
  async create(vocalist: Vocalist): Promise<boolean> {
    try {
      const record = await this.vocalistModel.create({
        id: vocalist.getId(),
        firstName: vocalist.getFirstName(),
        lastName: vocalist.getLastName()
      });
      return !!record;

    } catch (error) {
      throw new ErrorRepositoryService(
        'Error al intentar crear el vocalista',
        'VOCALIST_CREATE_FAILED',
        { originalError: error, class: this.constructor.name, method: "create" }
      );
    }
  }

  async update(id: string, vocalist: Vocalist): Promise<boolean> {
    try {
      const record = await this.vocalistModel.update({
        firstName: vocalist.getFirstName(),
        lastName: vocalist.getLastName()
      }, {
        where: {
          id: id
        }
      });

      return !!record;

    } catch (error) {
      throw new ErrorRepositoryService(
        'Error al intentar actualizar el vocalista',
        'VOCALIST_UPDATE_FAILED',
        { originalError: error, class: this.constructor.name, method: "update" }
      );
    }
  }


  async getOneById(id: string): Promise<Vocalist> {
    try {
      const record = await this.vocalistModel.findByPk(id);
      if (!record) {
        throw new Error(`No se encontró ningún vocalista con el ID: ${id}`);
      }
      return this.toVocalist(record);
    } catch (error) {
      throw new ErrorRepositoryService(
        'Error al intentar obtener el vocalista',
        'VOCALIST_GET_FAILED',
        { originalError: error, class: this.constructor.name, method: "getOne" }
      );
    }
  }

  async getAll(): Promise<Vocalist[]> {
    try {
      const records = await this.vocalistModel.findAll();
      return records.map(this.toVocalist);
    } catch (error) {
      throw new ErrorRepositoryService(
        'Error al intentar obtener todos los vocalistas',
        'VOCALIST_GETALL_FAILED',
        { originalError: error, class: this.constructor.name, method: "getAll" }
      );
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const process = await this.vocalistModel.destroy({where: {id}});
      return !!process;
      
    } catch (error) {
      throw new ErrorRepositoryService(
        `Error al intentar eliminar el vocalista con ID ${id}`,
        'VOCALIST_DELETE_FAILED',
        { originalError: error, class: this.constructor.name, method: "delete" }
      );
    }
  }

}
