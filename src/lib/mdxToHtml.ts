import { MDXRemote } from "next-mdx-remote/rsc";
import AcquisitionTimeline from "~/components/acquisition-timeline";
import ClosestTailwindColor from "~/components/closest-tailwind-color/closest-tailwind-color";
import ColorSpaceComparison from "~/components/closest-tailwind-color/color-space-comparison";
import LlmComparisonTable from "~/components/closest-tailwind-color/llm-comparison-table";
import ThreeWayComparisonTable from "~/components/closest-tailwind-color/three-way-comparison-table";
import WorstOffendersTable, {
  RgbWinsTable,
} from "~/components/closest-tailwind-color/worst-offenders-table";

const components = {
  AcquisitionTimeline,
  ClosestTailwindColor,
  ColorSpaceComparison,
  LlmComparisonTable,
  RgbWinsTable,
  ThreeWayComparisonTable,
  WorstOffendersTable,
};

export default function mdxToHtml(mdxSource: string) {
  return MDXRemote({ source: mdxSource, components });
}
