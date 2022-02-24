import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { columnCreatedAt } from "../columns/columnCreatedAt";
import { columnId } from "../columns/columnId";
import { columnUpdatedAt } from "../columns/columnUpdatedAt";

export class Service1645657469586 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "sevices",
            columns: [
                columnId,{
                    name: "name",
                    type: "varchar",
                    length: "45",
                    isNullable: false,
                }, {
                    name: "description",
                    type: "mediumtext",
                    isNullable: false,
                }, {
                    name: "price",
                    type: "decimal",
                    precision: 10,
                    scale: 2
                },
                columnCreatedAt,
                columnUpdatedAt,
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("services");
    }

}
