import { useTranslation } from "react-i18next";
import "./footer.css";
import footerImg from "../../assets/img/np-logo-set.png";

const Footer = () => {
  // Link data for the footer links section
  const linkData = [
    { key: "quick_link", type: "heading" },
    { key: "upcoming_live_batch", type: "text" },
    { key: "live_workshop", type: "text" },
    { key: "travel_blog_guide", type: "text" },
    { key: "community_stay_connected", type: "text" },
    { key: "help_center", type: "text" },
  ];

  // Contact information data for the footer contact section
  const contactInfo = [
    { key: "phone", value: "+1234567890" },
    { key: "email", value: "example@example.com" },
    { key: "address", value: "1234 Street Name, City, Country" },
    { key: "available_time", value: "9 AM - 5 PM, Monday to Friday" },
    { key: "contact_us", value: "Contact Us" },
  ];

  // Translation function from the i18next library
  const { t } = useTranslation();

  return (
    <section className="mx-4">
      {/* Horizontal line separating sections */}
      <hr className="line__bar" />

      {/* Main footer content */}
      <div className="flex flex-col justify-between mt-16 lg:flex-row sm:items-center">
        <div className="lg:w-3/7">
          <div className="grid grid-cols-1 gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Support section */}
            <div className="mx-auto">
              <span className="text-xl font-medium">{t("support")}</span>
              <div className="mt-4 text-slate-700">
                <div className="flex items-center justify-center gap-2 p-2 contact_page_color">
                  <i className="fa-solid fa-phone"></i>
                  <p>{t("support_hours")}</p>
                </div>
                <br />
                <div className="flex items-center justify-center gap-2 p-2 contact_page_color">
                  <i className="ml-0 fa-solid fa-location-dot lg:-ml-20"></i>
                  <p>{t("store_locator")}</p>
                </div>
              </div>
            </div>

            {/* Details center section */}
            <div className="mx-auto">
              <div className="text-color">
                <span className="text-xl font-medium">
                  {t("details_center")}
                </span>
                <p className="mt-4 text-slate-700">{t("content")}</p>
              </div>
            </div>

            {/* Quick links section */}
            <div className="mx-auto">
              <div className="text-color">
                {linkData?.map((item, index) => {
                  if (item.type === "heading") {
                    return (
                      <span key={index} className="text-xl font-medium">
                        {t(item.key)}
                      </span>
                    );
                  } else {
                    return (
                      <p
                        key={index}
                        className={`text-slate-700 mt-${
                          index === 1 ? "4" : "1"
                        } text-hover-line`}
                      >
                        {t(item.key)}
                      </p>
                    );
                  }
                })}
              </div>
            </div>

            {/* Contact information section */}
            <div className="mx-auto">
              <div className="text-color">
                <span className="text-xl font-medium">{t("contacts")}</span>
                <div className="mt-4">
                  {contactInfo?.map((item) => (
                    <a href="" key={item.key}>
                      <p className="text-slate-700">{t(item.key)}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer logo section */}
      <div className="mt-6 mx-auto bg-white lg:w-[250px] lg:ml-auto flex lg:items-center justify-center lg:justify-end">
        <img className="w-full" src={footerImg} alt="Logo" />
      </div>

      {/* Footer copyright section */}
      <div className="mt-10 text-center">
        <p className="text-sm lg:text-sm">{t("webSiteCreate")}</p>
      </div>

      {/* Scroll to top button */}
      <a
        className="block py-6 text-3xl font-semibold text-right text-fuchsia-700"
        id="#"
        href=""
      >
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </section>
  );
};

export default Footer;