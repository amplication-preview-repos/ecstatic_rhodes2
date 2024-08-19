import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CommuterService } from "./commuter.service";
import { CommuterControllerBase } from "./base/commuter.controller.base";

@swagger.ApiTags("commuters")
@common.Controller("commuters")
export class CommuterController extends CommuterControllerBase {
  constructor(
    protected readonly service: CommuterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
