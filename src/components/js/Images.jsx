import React from 'react'
import '../css/Images.css'

import img1 from "../imagess/1.png";
import img2 from "../imagess/2.png";
import img3 from "../imagess/3.png";
import img4 from "../imagess/4.png";
import img5 from "../imagess/5.png";
import img6 from "../imagess/6.png";
import img7 from "../imagess/7.png";
import img8 from "../imagess/8.png";
import img9 from "../imagess/9.png";
import img10 from "../imagess/10.png";
import img11 from "../imagess/11.png";
import img12 from "../imagess/12.png";
import img13 from "../imagess/13.png";
import img14 from "../imagess/14.png";
import img15 from "../imagess/15.png";
import img16 from "../imagess/16.png";
import img17 from "../imagess/17.png";
import img18 from "../imagess/18.png";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram } from "react-icons/ai";
import { RxLinkedinLogo } from "react-icons/rx";

function Images() {
    return (
        <div className="images">
            <h4>Приз забирает самый быстрый</h4>
            <h3>
                Следи за новостями на <br /> популярных платформах.
            </h3>
            <div className="icons">
                <FaXTwitter className="icon" />
                <AiOutlineInstagram className="icon" />
                <RxLinkedinLogo className="icon" />
            </div>
            <div className="app_container">
                <div className="block1 block_width">
                    <div className="image">
                        <img src={img1} alt="" />
                    </div>
                    <p>Retro Repetition by @daniltabacari</p>
                    <div className="image">
                        <img src={img2} alt="" />
                    </div>{" "}
                    <p>Retro Repetition by @daniltabacari</p>
                    <div className="image">
                        <img src={img3} alt="" />
                    </div>
                    <p>Retro Repetition by @daniltabacari</p>
                </div>
                <div className="block2 block_width">
                    <div className="image">
                        <img src={img4} alt="" />
                    </div>
                    <p>
                        <span>
                            Off-White
                        </span>{" "}
                        <br />
                        3D & Animation by @vollut
                    </p>
                    <div className="image">
                        <img src={img5} alt="" />
                    </div>
                    <p>
                        <span>
                            Off-White
                        </span>{" "}
                        <br />
                        'Standard lamp' - Kevin Shek & Standard Studio{" "}
                    </p>
                    <div className="image">
                        <img src={img6} alt="" />
                    </div>
                    <p>
                        <span>Off-White</span> <br />
                        3D & Animation by @vollut
                    </p>{" "}
                </div>
                <div className="block3 block_width">
                    <div className="image">
                        <img src={img7} alt="" />
                    </div>
                    <p>
                        <span>
                            Off-White
                        </span>{" "}
                        <br />
                        On the Spot by BICTURE studio{" "}
                    </p>{" "}
                    <div className="image">
                        <img src={img8} alt="" />
                    </div>
                    <p>
                        <span>
                            Off-White
                        </span>{" "}
                        <br /> Born ready campaign for Nike women, made by Two Much
                        Studio{" "}
                    </p>{" "}
                    <div className="image">
                        <img src={img9} alt="" />
                    </div>
                    <p>
                        <span>Off-White</span> <br />
                        3D & Animation by @vollut
                    </p>{" "}
                </div>
                <div className="block4 block_width">
                    <div className="image">
                        <img src={img10} alt="" />
                    </div>
                    <p>
                        <span>
                            Off-White
                        </span>{" "}
                        <br />
                        Blacknoise{" "}
                    </p>{" "}
                    <div className="image">
                        <img src={img11} alt="" />
                    </div>
                    <div className="image">
                        <img src={img12} alt="" />
                    </div>
                    <p>
                        <span>
                            Off-White
                        </span>{" "}
                        <br />
                        3D Modelled Tom Ford perfume exploration by @leroi3{" "}
                    </p>{" "}
                </div>
                <div className="block5 block_width">
                    <div className="image">
                        {" "}
                        <img src={img13} alt="" />
                    </div>
                    <p>
                        <span>
                            Off-White
                        </span>{" "}
                        <br />
                        Hypnotize by @two.shon{" "}
                    </p>{" "}
                    <div className="image">
                        <img src={img14} alt="" />
                    </div>
                    <p>
                        <span>
                            Off-White
                        </span>{" "}
                        <br />
                        Buttons by @claudioguglieri{" "}
                    </p>{" "}
                    <div className="image">
                        <img src={img15} alt="" />
                    </div>
                    <p>
                        <span>Off-White</span> <br />
                        3D & Animation by @vollut
                    </p>{" "}
                </div>
                <div className="block6 block_width">
                    <div className="image">
                        <img src={img16} alt="" />
                    </div>
                    <p>
                        <span>
                            Off-White
                        </span>{" "}
                        <br />
                        Retro Repetition by @daniltabacari{" "}
                    </p>{" "}
                    <div className="image">
                        <img src={img17} alt="" />
                    </div>
                    <p>
                        <span>
                            Off-White
                        </span>{" "}
                        <br />
                        Retro Repetition by @daniltabacari{" "}
                    </p>{" "}
                    <div className="image">
                        {" "}
                        <img src={img18} alt="" />
                    </div>
                    <p>
                        <span>
                        </span>{" "}
                        <br />
                        3D & Animation by @vollut
                    </p>{" "}
                </div>
            </div>
        </div>
    );
}

export default Images;