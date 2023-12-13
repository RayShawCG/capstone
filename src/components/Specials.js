import bruchetta from "../assets/images/bruchetta.jpg";
import lemondessert from "../assets/images/lemondessert.jpg";
import greeksalad from "../assets/images/greeksalad.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Specials() {
  return (
    <>
      <div className="flex gap-5 justify-between m-5">
        <h3 className="text-xl font-bold">Specials</h3>
        <button className="bg-[#f4ce14] rounded-lg text-[#495e57] p-4 font-bold">Online Menu</button>
      </div>
      <div className="flex gap-5 justify-center mx-5">
        <Card className="flex flex-col gap-5">
          <Card.Img src={lemondessert} />
          <Card.Body>
            <Card.Title className="text-2xl font-bold">Lemon Cake</Card.Title>
            <Card.Text>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. <i className="fa-regular fa-moped"></i></Card.Text>
            <Button className="bg-[#f4ce14] rounded-lg text-[#495e57] p-4 font-bold">Order</Button>
          </Card.Body>
        </Card>
        <Card className="flex flex-col gap-5">
          <Card.Img src={greeksalad} />
          <Card.Body>
            <Card.Title className="text-2xl font-bold">Greek Salad</Card.Title>
            <Card.Text>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</Card.Text>
            <Button className="bg-[#f4ce14] rounded-lg text-[#495e57] p-4 font-bold">Order</Button>
          </Card.Body>
        </Card>
        <Card className="flex flex-col gap-5">
          <Card.Img src={bruchetta} />
          <Card.Body>
            <Card.Title className="text-2xl font-bold">Bruschetta</Card.Title>
            <Card.Text>Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.</Card.Text>
            <Button className="bg-[#f4ce14] rounded-lg text-[#495e57] p-4 font-bold">Order</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Specials;
