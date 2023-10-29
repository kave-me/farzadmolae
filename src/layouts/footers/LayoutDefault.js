import Link from "next/link";
import AppData from "@data/app.json";
import { useRouter } from "next/router";

const DefaultFooter = ({ extraClass }) => {
  const { asPath } = useRouter();

  return (
    <>
      {/* footer */}
      <footer className="mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="container mil-p-120-60">
            <div className="row justify-content-between">

              <div className="col-md-12 col-lg-12 fa-fix ">
                <div className="row justify-content-start">
                  <div className="col-md-6 col-lg-7">

                    <nav className="mil-footer-menu mil-mb-60">
                      <ul>
                        {AppData.footer.menu.map((item, key) => (
                          <li key={`footer-menu-item-${key}`}
                              className={((asPath.indexOf(item.link) != -1 && item.link != "/") || asPath == item.link) ? "mil-active mil-up" : "mil-up"}>
                            <Link href={item.link}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </nav>

                  </div>
                </div>
              </div>
            </div>

            <p className="mil-light-soft fa-fix align-self-center mil-up">{AppData.footer.copy}</p>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
