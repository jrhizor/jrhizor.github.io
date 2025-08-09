import { MDXRemote } from 'next-mdx-remote/rsc';

export default function mdxToHtml(mdxSource: string) {
  return MDXRemote({ source: mdxSource });
}
