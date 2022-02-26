import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { columnCreatedAt } from "../columns/columnCreatedAt";
import { columnId } from "../columns/columnId";
import { columnUpdatedAt } from "../columns/columnUpdatedAt";

export class Teste1645724964764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "teste",
            columns: [
                columnId, {
                    name: "nome",
                    type: "varchar",
                    length: "200",
                    isNullable: false,
                }, {
                    name: "profissao",
                    type: "varchar",
                    length: "200",
                }, {
                    name: "idade",
                    type: "int",
                    isNullable: false,
                }, {
                    name: "telefone",
                    type: "varchar",
                    length: "25",
                },
                columnCreatedAt,
                columnUpdatedAt,
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("teste");
    }

}
