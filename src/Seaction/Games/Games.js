import "./Games.css";
import { Card } from "../../Componaint/index";
import imge1 from "../../assets/images/game1.jfif";
import imge2 from "../../assets/images/game2.jfif";
import imge3 from "../../assets/images/game3.jpg";

const Games = () => {
  return (
    <>
      <div className="container mb-5 mt-5 rounded game_main ">
       
        <div className="row mb-5 mt-5">
          <div className=" mb-5 col-lg-4 col-md-12 col-sm-12">
            <Card img={imge1} title="Animals Game" />
          </div>
          <div className=" mb-5 col-lg-4 col-md-12 col-sm-12">
            <Card img={imge2} title="Mero Game" />
          </div>
          <div className=" mb-5 col-lg-4 col-md-12 col-sm-12">
            <Card img={imge3} title="Memory Game " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
