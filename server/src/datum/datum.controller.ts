import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DatumService } from "./datum.service";
import { DatumControllerBase } from "./base/datum.controller.base";

@swagger.ApiTags("data")
@common.Controller("data")
export class DatumController extends DatumControllerBase {
  constructor(
    protected readonly service: DatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
