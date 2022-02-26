import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import { columnCreatedAt } from "../columns/columnCreatedAt";
import { columnId } from "../columns/columnId";
import { columnUpdatedAt } from "../columns/columnUpdatedAt";

export class TesteCompras1645726694029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "teste_compras",
            columns: [
                columnId,{
                    name: "data",
                    type: "datetime",
                    isNullable: false,
                }, {
                    name: "descricao",
                    type: "varchar",
                    length: "256",
                }, {
                    name: "valor",
                    type: "decimal",
                    isNullable: false,
                },{
                    name: "testeId",
                    type: "int",
                    isNullable: false,
                },
                columnCreatedAt, 
                columnUpdatedAt,
            ]
        }));

        await queryRunner.createForeignKey("teste_compras", new TableForeignKey({
            columnNames: ["testeId"],
            referencedColumnNames: ["id"],
            referencedTableName: "teste",
            name: "FK_teste_compras_teste",
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("teste_compras", "FK_teste_compras_teste");
        await queryRunner.dropTable("teste_compras");
    }

}
