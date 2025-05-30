import { TreePine } from 'lucide-react';

type ChapterSeparatorProps = {
  className?: string;
}

export default function ChapterSeparator({className} : Readonly<ChapterSeparatorProps>) {
  return (
    <div className={`flex gap-2 *:size-9 w-full justify-center ${className}`}>
      <TreePine />
      <TreePine />
    </div>
  );
}
