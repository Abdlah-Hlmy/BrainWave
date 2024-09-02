import { loading } from '../assets';

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 text-base rounded-[1.7rem] gap-4
    ${className || ''}
    `}
    >
      <img className='w-5 h-5' src={loading} alt='loading' />
      AI is generating
    </div>
  );
};

export default Generating;
