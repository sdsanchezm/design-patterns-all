import { COLORS } from "../../COLORS";

export class QueryBuilder {
    
    private table: string;
    private fields: string[] = [];
    private conditions: string[] = [];
    private orderFields: string[] = [];
    private limitCount?: number;

    constructor(table: string) {
        this.table = table;
    }

    select(...fields: string[]): QueryBuilder {
        this.fields = fields;
        return this;
    }

    where(condition: string): QueryBuilder {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder {
        this.orderFields.push(`${field} ${direction}`);
        return this;
    }

    limit(count: number): QueryBuilder {
        this.limitCount = count;
        return this;
    }

    execute(): string {

        const whereClause = this.conditions.length > 0
            ? this.conditions.join(' AND ')
            : '';

        const orderClause = this.orderFields.length > 0
            ? `${this.orderFields.join(', ')}`
            : '';

        const limitClause = this.limitCount
            ? `limit ${this.limitCount}`
            : '';

        const query = `select ${this.fields} from ${this.table} where ${whereClause} order by ${orderClause} ${limitClause}`;
        return query;
    }

    exec() {
    const usersQuery = new QueryBuilder('users')
        .select('id', 'name', 'email')
        .where('age > 18')
        .where("country = 'Cri'")
        .orderBy('name', 'ASC')
        .orderBy('country', 'ASC')
        .limit(10)
        .execute();

    // Example:
    // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
    console.log('%c Query:\n', COLORS.violet);
    console.log(`%c ${usersQuery}`, COLORS.blue);
    }
}

export const sleepTime = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
