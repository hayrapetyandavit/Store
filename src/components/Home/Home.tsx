import { FC } from "react";
import bg_1 from "../../assets/images/home/home_1.jpg";
import bg_2 from "../../assets/images/home/home_2.jpg";
import bg_3 from "../../assets/images/home/home_3.jpg";
import bg_4 from "../../assets/images/home/home_4.jpg";
import bg_5 from "../../assets/images/home/home_5.jpg";

import Footer from "../Footer/Footer";

import classes from "./home.module.scss";

const Home: FC = () =>{
  const headlines = [bg_1, bg_2, bg_3, bg_4, bg_5];

  return (
    <>
      {headlines.map((item, index) => {
        return (
          <section className={classes.home} key={Math.random()}>
            <div className={classes.home_inner} id={`section-${index}`}>
              <figure>
                <img src={item} alt="" />
              </figure>
            </div>
          </section>
        );
      })}
      <Footer />
    </>
  );
}

export default Home;