import type { MDXComponents } from "mdx/types";
import Check from "@/components/Check";
import Callout from "@/components/Callout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { Check, Callout, ...components };
}
