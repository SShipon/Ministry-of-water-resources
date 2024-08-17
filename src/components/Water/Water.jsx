
import sampleVideo from '../../../assets/video/Water - WaterAid Canada.mp4';
const Water = () => {
    return (
        <div className="video-container flex justify-center">
        <video className='' controls>
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
};

export default Water;