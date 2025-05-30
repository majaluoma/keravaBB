import Markdown from 'react-markdown';
import { useEffect, useState } from 'react';
import './markdown.css';
import remarkGfm from 'remark-gfm';

/** Used in text-based sites to show markdown files as html
 * @param markdownFile path to md-file
 */
export default function TextContent({
  markdownFile,
}: Readonly<{ markdownFile: string }>) {
  const [text, setText] = useState('');

  useEffect(() => {
    const componentWillMount = async () => {
      const res = await fetch(markdownFile);
      setText(await res.text());
    };

    componentWillMount();
  }, []);

  //Custom styles in markdown.css -file
  return (
    <div className={'markdown prose'} >
      <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
    </div>
  );
}
