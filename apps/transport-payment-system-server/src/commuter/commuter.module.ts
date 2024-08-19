import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommuterModuleBase } from "./base/commuter.module.base";
import { CommuterService } from "./commuter.service";
import { CommuterController } from "./commuter.controller";
import { CommuterResolver } from "./commuter.resolver";

@Module({
  imports: [CommuterModuleBase, forwardRef(() => AuthModule)],
  controllers: [CommuterController],
  providers: [CommuterService, CommuterResolver],
  exports: [CommuterService],
})
export class CommuterModule {}
