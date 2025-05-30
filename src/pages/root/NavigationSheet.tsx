import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../components/ui/sheet';
import type { NavigationSheetProps } from './types';


/** Navigation component allows user to navigate between pages
 *
 */
export default function NavigationSheet({
  titles,
}: Readonly<NavigationSheetProps>) {
  const menuIcon = () => {
    return (
      <div className="*:bg-secondary hover:*:bg-secondary-foreground flex cursor-pointer flex-col justify-center gap-1.5 align-middle">
        {[0, 1, 2].map((id) => {
          return (
            <div key={`menuBox_${id}`} className="h-1.5 w-9 rounded-sm"></div>
          );
        })}
      </div>
    );
  };
  return (
    <Sheet>
      <div className="fixed z-50 flex w-screen justify-end bg-transparent">
        <SheetTrigger className="fixed top-3 mr-8 bg-none" asChild>
          {menuIcon()}
        </SheetTrigger>
      </div>
      <SheetContent className="pr-0 pl-0">
        <SheetHeader className="flex flex-col">
          <SheetTitle className="mb-8 ml-4 text-xl">majaluoma.fi</SheetTitle>
          <div className="flex flex-col">
            {titles.map((title) => {
              return (
                <a
                  className="hover:bg-card w-full pt-4 pb-4 text-lg"
                  key={`title_${title.title}`}
                  href={title.path}
                >
                  <p className="ml-4">{title.title}</p>
                </a>
              );
            })}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
