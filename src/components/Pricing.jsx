import Section from './Section';
import { smallSphere, stars } from '../assets';
import Heading from './Heading';
// import PricingList from "./PricingList";
import { LeftLine, RightLine } from './design/Pricing';
import PricingList from './PricingList';

const Pricing = () => {
  return (
    <Section id="pricing" overflow="hidden">
      <div className="container relative z-2">
        <div className="hidden lg:flex justify-center mb-[6.5rem] relative">
          <img
            src={smallSphere}
            width={255}
            height={255}
            alt="Small Sphere"
            className="relative z-1"
          />
          <div className="absolute w-[60rem] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code tracking-wider uppercase border-b font-bold"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
