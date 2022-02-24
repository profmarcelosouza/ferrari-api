import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import { columnCreatedAt } from "../columns/columnCreatedAt";
import { columnId } from "../columns/columnId";
import { columnUpdatedAt } from "../columns/columnUpdatedAt";

export class Addresses1645661852744 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "addresses",
            columns: [
                columnId,{
                    name: "street",
                    type: "varchar",
                    length: "191",
                }, {
                    name: "number",
                    type: "varchar",
                    length: "16"
                }, {
                    name: "complement",
                    type: "varchar",
                    length: "191"
                }, {
                    name: "district",
                    type: "varchar",
                    length: "191"
                }, {
                    name: "city",
                    type: "varchar",
                    length: "191"
                }, {
                    name: "state",
                    type: "varchar",
                    length: "191"
                }, {
                    name: "country",
                    type: "varchar",
                    length: "191"
                }, {
                    name: "zipcode",
                    type: "varchar",
                    length: "8"
                }, {
                    name: "personId",
                    type: "int",
                    isNullable: false,
                },
                columnCreatedAt,
                columnUpdatedAt,
            ]
        }));

        await queryRunner.createForeignKey("addresses", new TableForeignKey({
            columnNames: ["personId"],
            referencedColumnNames: ["id"],
            referencedTableName: "persons",
            name: "FK_addresses_persons",
            onDelete: "CASCADE",
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("addresses", "FK_addresses_persons");
        await queryRunner.dropTable("addresses");
    }

}
