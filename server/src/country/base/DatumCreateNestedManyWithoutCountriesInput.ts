/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { DatumWhereUniqueInput } from "../../datum/base/DatumWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class DatumCreateNestedManyWithoutCountriesInput {
  @Field(() => [DatumWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [DatumWhereUniqueInput],
  })
  connect?: Array<DatumWhereUniqueInput>;
}
export { DatumCreateNestedManyWithoutCountriesInput };
