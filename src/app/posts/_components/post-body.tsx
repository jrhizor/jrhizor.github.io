import { ReactElement } from 'react';
import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: ReactElement;
};

export function PostBody({ content }: Props) {
  return (
    <div className="prose break-words text-[clamp(1.8rem,_2.0vw,_1.9rem)] leading-normal text-black antialiased prose-a:underline-offset-1">
      <div className={markdownStyles.markdown}>
        {content}
      </div>
    </div>
  );
}
