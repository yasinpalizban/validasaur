import type { Validity } from "../types.ts";
import { invalid } from "../utils.ts";

export function nullable(value: any): Validity {
  if (typeof value === "undefined") {
    return invalid("nullable", { value }, true);
  }
}
