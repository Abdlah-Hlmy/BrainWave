import { notification1 } from '../assets';
import { notificationImages } from '../constants';

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${className || ''
        } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="Notification"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="text-base font-semibold mb-1">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((image, index) => (
              <li
                className="flex w-6 h-6 rounded-full border-2 border-n-12 overflow-hidden -ml-2 first:ml-0"
                key={index}
              >
                <img
                  src={image}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={image}
                />
              </li>
            ))}
          </ul>

          <p className='body-2 text-n-13'>1m ago</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
