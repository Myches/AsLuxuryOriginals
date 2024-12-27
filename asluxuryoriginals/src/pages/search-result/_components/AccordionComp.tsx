import { Accordion, AccordionItem } from "@nextui-org/accordion";

interface Props {
  title: string;
  children: React.ReactNode;
  key?: string | number;
}

const AccordionComp = ({ title, children, key }: Props) => {
  return (
    <Accordion>
      <AccordionItem key={key} aria-label={title} title={title}>
        {children}
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComp;
