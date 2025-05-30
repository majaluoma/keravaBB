import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type LinkListProps = {
  links: Link[];
  firstOpen?: boolean;
  classname?: string;
};
type Link = { categories: string[]; url: string; name: string };
export default function LinkAccordion({
  links,
  firstOpen = true,
  classname,
}: Readonly<LinkListProps>) {
  const categories = links
    .reduce((acc: { category: string; links: Link[] }[], link) => {
      link.categories.forEach((category) => {
        const existingCategory = acc.find((cat) => cat.category === category);
        if (existingCategory) {
          existingCategory.links.push(link);
        } else {
          acc.push({ category, links: [link] });
        }
      });
      return acc;
    }, [])
    .sort((a, b) => b.category.localeCompare(a.category));

  return (
    <Accordion
      type="single"
      collapsible
      className={`w-full ${classname}`}
      defaultValue={firstOpen ? `item-${categories[0].category}` : ``}
    >
      {categories.map((category) => {
        return (
          <AccordionItem
            key={category.category}
            value={`item-${category.category}`}
          >
            <AccordionTrigger className="cursor-pointer px-3">
              {`${category.category} (${category.links.length})`}
            </AccordionTrigger>

            <AccordionContent>
              {category.links.map((link) => {
                return (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
