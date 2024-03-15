import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const SimpleCard: React.FC<SimpleCardProps> = ({
  header,
  text,
  textButton,
  cardClass,
  ImageClass,
  Image,
  price,
}) => {
  return (
    <Card className={`relative mt-24 w-1/3 py-4 px-6 rounded-2xl border-4 border-white ${cardClass}`} placeholder={undefined}>
      <CardBody placeholder={undefined} className="text-justify">
        <img className={`absolute ${ImageClass}`} src={Image} alt="" />
        <Typography
          variant="h5"
          color="white"
          className="mb-5"
          placeholder={undefined}
        >
          {header}
        </Typography>
        <Typography className="text-white" placeholder={undefined}>{text}</Typography>
      </CardBody>
      <CardFooter className="pt-0 flex items-center gap-10 text-white" placeholder={undefined}>
        <Button className="bg-white text-[#8754AF] text-2xl py-2" placeholder={undefined}>{textButton}</Button>
        <span>{price}</span>
      </CardFooter>
    </Card>
  );
};

// Types
interface SimpleCardProps {
  header: React.ReactNode;
  text: string;
  textButton: string;
  Image?: string;
  cardClass?: string;
  ImageClass?: string;
  price?: string;
}
