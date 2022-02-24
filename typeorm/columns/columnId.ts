import { TableColumnOptions } from "typeorm";


export const columnId = {
    name: "id",
    type: "int",
    isPrimary: true,
    generationStrategy: "increment",
    isGenerated: true,
}as TableColumnOptions;