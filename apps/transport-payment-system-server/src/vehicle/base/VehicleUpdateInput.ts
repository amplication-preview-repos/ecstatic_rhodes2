/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { TransactionUpdateManyWithoutVehiclesInput } from "./TransactionUpdateManyWithoutVehiclesInput";
import { Type } from "class-transformer";

@InputType()
class VehicleUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  route?: string | null;

  @ApiProperty({
    required: false,
    type: () => TransactionUpdateManyWithoutVehiclesInput,
  })
  @ValidateNested()
  @Type(() => TransactionUpdateManyWithoutVehiclesInput)
  @IsOptional()
  @Field(() => TransactionUpdateManyWithoutVehiclesInput, {
    nullable: true,
  })
  transactions?: TransactionUpdateManyWithoutVehiclesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  vehicleNumber?: string | null;
}

export { VehicleUpdateInput as VehicleUpdateInput };