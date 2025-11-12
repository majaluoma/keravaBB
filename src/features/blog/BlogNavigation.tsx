import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import profileImage1 from '@/assets/KPL_logo_pallot.png';
import LinkAccordion from '../../components/customUi/LinkAccordion';
import { blogData } from '@/data/blogData';
import SocialLinks from '@/components/customUi/SocialLinks';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

export default function BlogNavigation() {
  const postsAndLabels = blogData.map((blogentry) => {
    return {
      name: `${blogentry.date.toLocaleDateString()} ${blogentry.title}`,
      url: `/blog/${blogentry.date.getFullYear().toString()}/${blogentry.id}`,
      categories: blogentry.labels,
    };
  });

  const postsAndYears = blogData.map((blogentry) => {
    return {
      name: `${blogentry.date.toLocaleDateString()} ${blogentry.title}`,
      url: `/blog/${blogentry.date.getFullYear().toString()}/${blogentry.id}`,
      categories: [blogentry.date.getFullYear().toString()],
    };
  });

  const navigateToBlog = () => { 
    window.location.href = '/blog';
  }
  return (
    <Sheet>
      <SheetTrigger className="flex cursor-pointer flex-col items-center justify-center">
        <Avatar className="size-25 cursor-pointer">
          <AvatarImage className="size-25" src={profileImage1} />
          <AvatarFallback>MAJIS</AvatarFallback>
        </Avatar>
        <p className="bg-card rounded-2xl px-2">Blog Menu</p>
      </SheetTrigger>
      <SheetContent side="left" className="p-4">
        <ScrollArea className="flex h-full w-full flex-col items-start justify-items-start">
          <SheetHeader className="my-6">
            <SheetTitle className="flex w-full flex-row items-center justify-center">
              <Avatar className="size-38 cursor-pointer">
                <AvatarImage className="size-38" src={profileImage1} />
                <AvatarFallback>MAJIS</AvatarFallback>
              </Avatar>
            </SheetTitle>
            <SheetDescription>
              Alta löydät uutiset kategorioittain
            </SheetDescription>
          </SheetHeader>
          <Button variant={'link'} className="w-min m-0 pl-0 text-xl" onClick={navigateToBlog}>
            All posts
          </Button>
          <div className="my-6">
            <h2 className='font-extrabold'>Subjects</h2>
            <LinkAccordion links={postsAndLabels} firstOpen={false}></LinkAccordion>
          </div>
          <div className="my-6">
            <h2 className='font-extrabold'>All posts</h2>
            <LinkAccordion links={postsAndYears} firstOpen={false}/>
          </div>
          <div className="my-6">
            <SocialLinks />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
