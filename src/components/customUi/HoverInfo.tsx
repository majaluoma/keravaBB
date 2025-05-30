import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip,
} from '../ui/tooltip';

export type HoverInfoProps = {
  text: string;
  children: React.ReactNode;
};

/**Custom UI -component to show small amount of information as a hover element
 * Shows pnly text larger than 8 characters
 * */
export default function HoverInfo({
  text,
  children,
}: Readonly<HoverInfoProps>) {
  if (text.length > 8 && text !== 'undefined' && text !== 'null') {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipContent className="bg-popover text-popover-foreground">
            <p>{text}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  } else {
    return <>{children}</>;
  }
}
