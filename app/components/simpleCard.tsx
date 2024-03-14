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
  Image,
}) => {
  return (
    <Card className="relative mt-6 w-96" placeholder={undefined}>
      <CardBody placeholder={undefined}>
        <img className="absoloute" src={Image} alt="" />
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2"
          placeholder={undefined}
        >
          {header}
        </Typography>
        <Typography placeholder={undefined}>{text}</Typography>
      </CardBody>
      <CardFooter className="pt-0" placeholder={undefined}>
        <Button className="bg-white text-[#8754AF]" placeholder={undefined}>{textButton}</Button>
      </CardFooter>
    </Card>
  );
};

// Types
interface SimpleCardProps {
  header: string;
  text: string;
  textButton: string;
  Image: string;
}
