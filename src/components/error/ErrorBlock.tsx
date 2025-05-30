import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

/**
 * Errors as a nice Card instead of a whole page
 * Use this component to display any Error you want, but
 * add Error type handling to useEffect -part before you
 * add new type of Errors
 */
type ErrorBlockProps = {
  error: unknown;
  className?: string;
  moreInformation?: string;
};
export default function ErrorBlock({
  error,
  className,
  moreInformation,
}: ErrorBlockProps) {
  //This console.error is left here for purpose so that errors are shown in the console as well.
  console.error(error);
  const [errorMessage, setErrorMessage] = useState('');

  //Defines what to do with different type of Errors
  useEffect(() => {
    if (error instanceof Error) {
      setErrorMessage(error.message);
    } else if (typeof error === 'string') {
      setErrorMessage(error);
    } else {
      setErrorMessage('Tuntematon virhe, tutkimme asiaa');
    }
  }, [error]);

  return (
    <Card id="error-page" className={`${className}`}>
      <CardHeader>
        <CardTitle>Oops!</CardTitle>
      </CardHeader>
      <CardDescription className="m-6">
        Pahoittelut, odottamaton virhe pääsi sattumaan.
      </CardDescription>
      <CardContent>
        <p>{errorMessage}</p>
        {moreInformation && (
          <Accordion type="single">
            <AccordionItem value="moreInfo">
              <AccordionTrigger>Lisätiedot</AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
}
