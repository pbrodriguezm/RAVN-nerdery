-- CreateTable
CREATE TABLE "CLIENTS" (
    "id" VARCHAR(10) NOT NULL,
    "name" VARCHAR,
    "password" VARCHAR,
    "state" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LIKES" (
    "id" SERIAL NOT NULL,
    "idproduct" UUID,
    "idclient" VARCHAR(10),
    "register" TIMESTAMP(6),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PRODUCTS" (
    "id" UUID NOT NULL,
    "name" VARCHAR,
    "description" VARCHAR,
    "image" DOUBLE PRECISION,
    "create" TIMESTAMP(6),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SALES" (
    "idproduct" UUID,
    "idclient" VARCHAR(8),
    "quantity" INTEGER,
    "register" TIMESTAMP(6),
    "amount" DECIMAL(10,2),
    "id" SERIAL NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LIKES" ADD FOREIGN KEY ("idclient") REFERENCES "CLIENTS"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LIKES" ADD FOREIGN KEY ("idproduct") REFERENCES "PRODUCTS"("id") ON DELETE SET NULL ON UPDATE CASCADE;
