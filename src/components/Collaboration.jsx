import { brainwaveSymbol, check } from '../assets';
import { collabApps, collabContent, collabText } from '../constants';
import Button from './Button';
import Section from './Section';
import { LeftCurve, RightCurve } from './design/Collaboration';

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center gap-5">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button> try it now </Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 text-n-4 mb-8 md:mb-16 lg:mb-[6.6rem] lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 -translate-x-1/2 w-[22rem] flex aspect-square border border-n-6 rounded-full scale-75 md:scale-100">
            <div className="flex w-60 aspect-square border border-n-6 rounded-full m-auto">
              <div className="w-[6rem] aspect-square m-auto rounded-full bg-conic-gradient p-[0.2rem]">
                <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="Brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((item, index) => (
                <li
                  key={item.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45
                    }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45
                      }`}
                  >
                    <img
                      className='m-auto'
                      src={item.icon}
                      width={item.width}
                      height={item.height}
                      alt={item.title}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
