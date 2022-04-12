/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Datum, Country } from "@prisma/client";

export class DatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DatumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatumFindManyArgs>
  ): Promise<number> {
    return this.prisma.datum.count(args);
  }

  async findMany<T extends Prisma.DatumFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatumFindManyArgs>
  ): Promise<Datum[]> {
    return this.prisma.datum.findMany(args);
  }
  async findOne<T extends Prisma.DatumFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatumFindUniqueArgs>
  ): Promise<Datum | null> {
    return this.prisma.datum.findUnique(args);
  }
  async create<T extends Prisma.DatumCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatumCreateArgs>
  ): Promise<Datum> {
    return this.prisma.datum.create<T>(args);
  }
  async update<T extends Prisma.DatumUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatumUpdateArgs>
  ): Promise<Datum> {
    return this.prisma.datum.update<T>(args);
  }
  async delete<T extends Prisma.DatumDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatumDeleteArgs>
  ): Promise<Datum> {
    return this.prisma.datum.delete(args);
  }

  async getCountry(parentId: string): Promise<Country | null> {
    return this.prisma.datum
      .findUnique({
        where: { id: parentId },
      })
      .country();
  }
}
