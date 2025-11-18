import { MDXRemote } from 'next-mdx-remote/rsc';
import AcquisitionTimeline from '~/components/acquisition-timeline';

const components = {
  AcquisitionTimeline
};

export default function mdxToHtml(mdxSource: string) {
  return MDXRemote({ source: mdxSource, components });
}
