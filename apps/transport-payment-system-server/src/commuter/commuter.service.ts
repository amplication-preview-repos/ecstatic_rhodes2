import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommuterServiceBase } from "./base/commuter.service.base";

@Injectable()
export class CommuterService extends CommuterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
