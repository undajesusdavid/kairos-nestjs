import { Table, Column, Model, DataType } from 'sequelize-typescript';

export interface VocalistAttributes {
  id: string;
  firstName: string;
  lastName: string;
}

@Table({
  createdAt: false,
  updatedAt: false,
  tableName: "vocalistas"
  // opcional, si no usas createdAt/updatedAt
})
export class VocalistModel extends Model<VocalistAttributes> implements VocalistAttributes {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare firstName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  declare lastName: string;
}
