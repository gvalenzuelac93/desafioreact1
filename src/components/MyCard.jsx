import Card from 'react-bootstrap/Card';
import Badges from './Tags'
import { CardText } from 'react-bootstrap';
const MyCard = ({image, title, colorBadge, textBadge, text}) => {
   return (
     <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
           <Card.Title>{title}</Card.Title>
           <CardText className="fw-normal">{text}</CardText>
           <Badges colorBadge={colorBadge} textBadge={textBadge}/>
        </Card.Body>
      </Card>
     </>
   );
};
export default MyCard;
