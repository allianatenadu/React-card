import Description from "./Description";
import Image from "./Image";
import Title from "./Title";

function SimpleCard() {
  return (
    <>
      <div className="columns-2">
        <Image />
        <Title />
        <Description />
      </div>
    </>
  );
}

export default SimpleCard;
