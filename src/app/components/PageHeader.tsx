import Image from "next/image";
import React from "react";

type Props = {
  img: string;
};

const PageHeader = (props: Props) => {
  return (
    <div>
      <div className="container">
        <Image
          src={props.img}
          height={600}
          width={600}
          alt={"website design and developement"}
        />
      </div>
    </div>
  );
};

export default PageHeader;
