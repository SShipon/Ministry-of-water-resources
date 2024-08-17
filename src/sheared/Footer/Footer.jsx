import { useTranslation } from 'react-i18next';
import './footer.css';
import footerImg from '../../assets/img/np-logo-set.png'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="mx-4">
      <hr className="line__bar" />
      <br />
      <br />
      <div className="flex flex-col lg:flex-row justify-between sm:items-enter">
        <div className="w-2/2 lg:w-3/7">
          <div className="grid grid-cols-1 lg:gap-10 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="text-xl">{t('support')}</span>
              <div className="mt-4">
                <div className="flex gap-2 justify-center items-center p-2 contact__page__color">
                  <i className="fa-solid fa-phone"></i>
                  <p>{t('support_hours')}</p>
                </div>
                <br />
                <div className="flex gap-2 justify-center items-center p-2 contact__page__color">
                  <i className="fa-solid fa-location-dot lg:-ml-20 ml-0"></i>
                  <p>{t('store_locator')}</p>
                </div>
              </div>
            </div>
            <div className="text-color">
              <span className="text-xl">{t('details_center')}</span>
              <p>{t('content')}</p>
            </div>
            <div className="text-color">
              <span className="text-xl">{t('quick_link')}</span>
              <p>{t('upcoming_live_batch')}</p>
              <p>{t('live_workshop')}</p>
              <p>{t('travel_blog_guide')}</p>
              <p>{t('community_stay_connected')}</p>
              <p>{t('help_center')}</p>
            </div>
            <div className="text-color">
              <span className="text-xl">{t('contacts')}</span>
              <a href=""><p>{t('phone')}</p></a>
              <a href=""><p>{t('email')}</p></a>
              <a href=""><p>{t('address')}</p></a>
              <a href=""><p>{t('available_time')}</p></a>
              <a href=""><p>{t('contact_us')}</p></a>
            </div>
           
          </div>
        </div>

        <div className="w-2/2 my-10 lg:w-1/8 flex flex-col justify-center items-center">
          <span className="-mt-10 text-xl">{t('follow_us')}</span>
          <div className="mx-10 my-6">
            <input
              type="text"
              placeholder={t('search_here')}
              className="input input-bordered input-info sm:w-full max-w-xs"
            />
          </div>

          <div>
            <div className="flex gap-5 mt-6 text-2xl sm:order-1 -order-1">
              <a href=""><i className="fa-brands fa-facebook"></i></a>
              <a href=""><i className="fa-brands fa-linkedin"></i></a>
              <a href=""><i className="fa-brands fa-github"></i></a>
              <a href=""><i className="fa-brands fa-square-instagram"></i></a>
              <a href=""><i className="fa-brands fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
      <p className="lg:text-xl text-base">
        {t('webSiteCreate')}
      </p>
      <div className=" bg-white lg:w-[250px] lg:ml-auto flex lg:items-center justify-center lg:justify-end">
  <img className='w-full' src={footerImg} alt="Logo" />
</div>
      <a className="text-right block text-3xl font-semibold py-6 text-fuchsia-700" id="#" href="">
        <i className="fa-solid fa-arrow-up"></i>
      </a>

    </section>
  );
};

export default Footer;
