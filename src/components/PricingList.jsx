import { check } from '../assets';
import { pricing } from '../constants';
import Button from './Button';
const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((plan) => (
        <div
          key={plan.id}
          className="w-[19rem] max-lg:w-full lg:w-auto h-full bg-n-8 border border-n-6 rounded-[2.5rem] px-6 even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{plan.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {plan.description}
          </p>

          <div className="flex items-center min-h-[5.5rem] mb-6">
            {plan.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {plan.price}
                </div>
              </>
            )}
          </div>

          <Button
            className={'w-full mb-6'}
            href={plan.price ? '/pricing' : 'mailto:hlmy1200@gmail.com'}
            white={plan.price}
          >
            {plan.price ? 'Get Started' : 'Contact Us'}
          </Button>

          <ul>
            {plan.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6 gap-4"
              >
                <img src={check} width={24} height={24} alt="check" />
                <p className="body-2">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
