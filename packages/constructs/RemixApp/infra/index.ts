import { RemixSite } from "@remix-aws-cdk/remix-cdk-construct";
import type { Construct } from "constructs";
import path from "path";

export class RemixApp extends RemixSite {
  constructor(scope: Construct, id: string) {
    super(scope, id, {
      remixPath: path.join(__dirname, ".."),
    });
  }
}
