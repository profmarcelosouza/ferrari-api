import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Contats1645553845736 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: "contacts",
            columns: [{
                name: "id",
                type: "int",
                isPrimary: true,
                generationStrategy: "increment",
                isGenerated: true
            }, {
                name: "personId",
                type: "int",
                isNullable: false,
            }, {
                name: "email",
                type: "varchar",
                length: "250",
                isNullable: false,
            }, {
                name: "message",
                type: "text",
                isNullable: false,
            }, {
                name: "createdAt",
                type: "datetime",
                default: "CURRENT_TIMESTAMP",
            }, {
                name: "updatedAt",
                type: "datetime",
                default: "CURRENT_TIMESTAMP",
            }]
        }));

        await queryRunner.createForeignKey("contacts", new TableForeignKey({
            columnNames: ["personId"],
            referencedColumnNames: ["id"],
            referencedTableName: "persons",
            name: "FK_contacts_persons",
            onDelete: "CASCADE",
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("contacts", "FK_contacts_persons");
        await queryRunner.dropTable("contacts");
    }

}
