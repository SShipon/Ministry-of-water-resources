
import pull1 from '../../../../assets/pull/accessibility.webp';
import pull2 from '../../../../assets/pull/comment.gif';
import pull3 from '../../../../assets/pull/poll-icon.gif';

const Pull = () => {
    return (
      <div>
        <div className="bg-gradient-to-r  py-4">
          <div className="  mx-auto gap-12">
            <img className="w-[50px] h-[50px]" src={pull1} alt="" />
            <img className="w-[50px] h-[50px]" src={pull2} alt="" />
            <img className="w-[50px] h-[50px] rounded-[50%]" src={pull3} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Pull;