import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";
import QRCode from "qrcode.react";

const Contact = () => {
  return (
    <Layouts>
      <PageBanner pageTitle={"تماس با من"} breadTitle={"تماس با من"}
                  anchorLabel={"پیام بده، زنگ بزن، کامنت بذار، بیا صحبت کنیم"}
                  anchorLink={"#contact"} paddingBottom={1} align={"center"} />

      {/* map */}
      <div className="mil-map-frame mil-up">
        <div className="mil-map">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51290.39300712799!2d52.635373938701306!3d36.538447976509424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8f88494db70a07%3A0xf3a380da3076a39!2sBabol%2C%20Mazandaran%20Province%2C%20Iran!5e0!3m2!1sfa!2suk!4v1698310975002!5m2!1sfa!2suk"

            style={{ "border": "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* map end */}

      {/* contact form */}
      <section id="contact">
        <div className="container mil-p-120-90">
          <h3 className="mil-center mil-up mil-mb-20 pt-4 "><span className="mil-thin"> تو ذهنت برنامه داری؟ بیا</span>
            {" "}
            صحبت
            <span className={"mil-thin"}> کنیم</span>

          </h3>
          <h4 className={"mil-center mil-mb-30"}>
            <span className="mil-text-xl">لطفا برای ارتباط با من از یکی راه های زیر استفاده کنید</span>
          </h4>

          {/*    a Row of social media and cell phone icons */}

          {/*QR code */}

          <FlexCol>
            <FlexRow>
              <QRCode value="https://www.instagram.com/reza.shirazii77" renderAs="canvas" bgColor={"#d62976"}
                      includeMargin={true} style={{ margin: "15px" }} />
              <QRCode value="https://t.me/farzadmolayii" renderAs="canvas" bgColor={"#1c92d2"} includeMargin={true}
                      style={{ margin: "15px" }} />
              <QRCode value="tel:+989046153707" renderAs="canvas" bgColor={"#20de6b"} includeMargin={true}
                      style={{ margin: "15px" }} />
            </FlexRow>
            <FlexRow>

              <Link href={"https://www.instagram.com/reza.shirazii77"}>
                <StyledInstagramIcon />
              </Link>
              <Link href={"https://t.me/farzadmolayii"}>
                <StyledTelegramIcon />
              </Link> <Link href={"tel:+989046153707"}>
              <StyledPhoneIcon />
            </Link>
            </FlexRow>
          </FlexCol>
        </div>
      </section>
      {/* contact form end */}
    </Layouts>
  );
};
export default Contact;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  background: rgba(0, 0, 0, 0.1);
  padding: 10rem 0;
  border-radius: 1rem;

`;
const StyledInstagramIcon = styled(AiFillInstagram)`
  color: rgba(255, 255, 255, 0.8);
  background: linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
  border-radius: .5rem;
  padding: .2rem;

  font-size: 3rem;
  margin: 1rem;
  transition: all 0.3s linear;

  &:hover {
    color: white;
    cursor: pointer;
    scale: 1.1;
  }
`;

const StyledTelegramIcon = styled(FaTelegram)`
  color: rgba(255, 255, 255, 0.8);
  background: linear-gradient(135deg, #1c92d2, #96ebfd);
  border-radius: .5rem;
  padding: .2rem;

  font-size: 3rem;
  margin: 1rem;
  transition: all 0.3s linear;

  &:hover {
    color: white;
    cursor: pointer;
    scale: 1.1;
  }
`;
const StyledPhoneIcon = styled(AiFillPhone)`
  color: rgba(255, 255, 255, 0.8);
  background: linear-gradient(135deg, #20de6b, #088138);
  border-radius: .5rem;
  padding: .2rem;

  font-size: 3rem;
  margin: 1rem;
  transition: all 0.3s linear;

  &:hover {
    color: white;
    cursor: pointer;
    scale: 1.1;
  }
`;