import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DatumServiceBase } from "./base/datum.service.base";

@Injectable()
export class DatumService extends DatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
