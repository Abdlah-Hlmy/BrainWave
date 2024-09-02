import Section from './Section';
import Heading from './Heading';
import { service1, service2, service3, check } from '../assets';
import { brainwaveServices, brainwaveServicesIcons } from '../constants';
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from './design/Services';
import Generating from './Generating';

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          <div className="relative z-1 mb-5 p-8 lg:p-20 h-[39rem] xl:h-[46rem] rounded-3xl border border-n-1/10 flex items-center overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                src={service1}
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                alt="Smartest AI"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 py-4 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} alt="check" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2 lg:-translate-x-1/2 lg:bottom-8" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] rounded-3xl overflow-hidden border border-n-1/10">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="w-full h-full object-cover"
                  alt="robot"
                  width={630}
                  height={750}
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-15 bg-gradient-to-b from-n-8/0 to-n-8/90">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app's photo
                  editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world&apos;s most powerful AI photo and video art
                  generation engine. What will you create?s
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((icon, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center rounded-2xl
                      ${index === 2
                          ? 'w-[3rem] h-[3rem] md:w-[4.5rem] md:h-[4.5rem] bg-conic-gradient p-0.25'
                          : 'w-10 h-10 bg-n-6 md:w-15 md:h-15'
                        }`}
                    >
                      <div
                        className={`${index === 2
                            ? 'flex items-center justify-center w-full h-full bg-n-7 rounded-2xl'
                            : ''
                          }`}
                      >
                        <img src={icon} width={24} height={24} alt={icon} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='relative h-[20rem] md:h-[25rem] rounded-xl bg-n-8 overflow-hidden'>
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt='Scary robot'
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
