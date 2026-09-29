// Tabler publishes individual ESM icons but only a root TypeScript declaration.
declare module "@tabler/icons-react/dist/esm/icons/*.mjs" {
  import type { ForwardRefExoticComponent, RefAttributes } from "react";
  import type { IconProps } from "@tabler/icons-react";
  const icon: ForwardRefExoticComponent<
    IconProps & RefAttributes<SVGSVGElement>
  >;
  export default icon;
}
