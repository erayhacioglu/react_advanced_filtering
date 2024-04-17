import { Card } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {user?.fullName?.length > 13
            ? user?.fullName.substr(0, 13) + "..."
            : user?.fullName}
        </Card.Title>
        <Card.Text className="text-secondary">
          Gender : {user?.gender}
        </Card.Text>
        <Card.Text className="text-secondary">
          Country : {user?.country}
        </Card.Text>
        <Card.Text className="text-secondary">
          Number : {user?.number}
        </Card.Text>
        <Card.Text className="text-secondary">Color : {user?.color}</Card.Text>
        <Card.Text className="text-secondary">Size : {user?.size}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
