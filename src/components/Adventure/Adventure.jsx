import PropTypes from 'prop-types';
import MountainCard from '../MountainCard/MountainCard';

const Adventure = ({ mountainData = [] }) => {
  return (
    <div>
      <div>
        <h2 className='text-center text-5xl text-black font-bold mt-20'>
          Enjoy Adventure Experiences
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-3 container mx-auto'>
          {mountainData?.map(singleItem => (
            <MountainCard 
              key={singleItem.id}
              singleItems={singleItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Adventure.propTypes = {
  mountainData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,  
      name: PropTypes.string.isRequired, 
      difficulty: PropTypes.string, 
    })
  ).isRequired, 
};

export default Adventure;
