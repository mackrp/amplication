import { Module } from "@nestjs/common";
import { DatumModuleBase } from "./base/datum.module.base";
import { DatumService } from "./datum.service";
import { DatumController } from "./datum.controller";
import { DatumResolver } from "./datum.resolver";

@Module({
  imports: [DatumModuleBase],
  controllers: [DatumController],
  providers: [DatumService, DatumResolver],
  exports: [DatumService],
})
export class DatumModule {}
