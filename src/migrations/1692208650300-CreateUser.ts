import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1692208650300 implements MigrationInterface {
  name = 'CreateUser1692208650300';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "app_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "active" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_22a5c4a3d9b2fb8e4e73fc4ada1" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "app_user"`);
  }
}
