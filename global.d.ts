declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  import { FunctionComponent, SVGAttributes } from "react";

  const content: FunctionComponent<
    SVGAttributes<SVGElement> | { title: string }
  >;
  export default content;
}

declare module "*.mdx" {
  import { ReactNode } from "react";

  export const frontMatter: {
    title: string;
    description: string;
    publishedAt: number;
    __resourcePath: string;
    map: any;
    // type additional properties according to
    // the front-matter you define
  };

  const component: ReactNode;
  export default ReactNode;
}
