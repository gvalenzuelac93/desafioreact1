import Badge from 'react-bootstrap/Badge';
const Badges = ({colorBadge, textBadge}) => {
   return (
    <>
      <Badge className="px-5" bg={colorBadge}>{textBadge}</Badge>
    </>
   );
  };
export default Badges;
