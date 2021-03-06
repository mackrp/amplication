/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateDatumArgs } from "./CreateDatumArgs";
import { UpdateDatumArgs } from "./UpdateDatumArgs";
import { DeleteDatumArgs } from "./DeleteDatumArgs";
import { DatumFindManyArgs } from "./DatumFindManyArgs";
import { DatumFindUniqueArgs } from "./DatumFindUniqueArgs";
import { Datum } from "./Datum";
import { Country } from "../../country/base/Country";
import { DatumService } from "../datum.service";

@graphql.Resolver(() => Datum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DatumResolverBase {
  constructor(
    protected readonly service: DatumService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Datum",
    action: "read",
    possession: "any",
  })
  async _dataMeta(
    @graphql.Args() args: DatumFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Datum])
  @nestAccessControl.UseRoles({
    resource: "Datum",
    action: "read",
    possession: "any",
  })
  async data(
    @graphql.Args() args: DatumFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Datum[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Datum",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Datum, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Datum",
    action: "read",
    possession: "own",
  })
  async datum(
    @graphql.Args() args: DatumFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Datum | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Datum",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Datum)
  @nestAccessControl.UseRoles({
    resource: "Datum",
    action: "create",
    possession: "any",
  })
  async createDatum(
    @graphql.Args() args: CreateDatumArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Datum> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Datum",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Datum"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        country: args.data.country
          ? {
              connect: args.data.country,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Datum)
  @nestAccessControl.UseRoles({
    resource: "Datum",
    action: "update",
    possession: "any",
  })
  async updateDatum(
    @graphql.Args() args: UpdateDatumArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Datum | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Datum",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Datum"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          country: args.data.country
            ? {
                connect: args.data.country,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Datum)
  @nestAccessControl.UseRoles({
    resource: "Datum",
    action: "delete",
    possession: "any",
  })
  async deleteDatum(
    @graphql.Args() args: DeleteDatumArgs
  ): Promise<Datum | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Country, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Datum",
    action: "read",
    possession: "any",
  })
  async country(
    @graphql.Parent() parent: Datum,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Country | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Country",
    });
    const result = await this.service.getCountry(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
