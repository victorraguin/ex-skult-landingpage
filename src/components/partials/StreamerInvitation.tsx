import { ContactForm } from './ContactForm';
import { GradientText } from './GradientText';

export const StreamerInvitation = () => (
  <div className="flex h-[70vh] flex-col justify-center gap-y-20 bg-[#222222]">
    <div className="text-center font-poppins text-3xl font-light text-[#e7e7e7] xl:text-5xl 2xl:text-[48px]">
      Come and <GradientText>Play</GradientText> With Us
    </div>

    <div className="flex flex-col items-center space-y-12 font-poppins font-light text-[#e7e7e7]">
      <p className="text-2xl xl:text-3xl">Wanna know more about it?</p>
      <div className="my-auto flex max-w-2xl flex-row justify-center">
        <ContactForm />
      </div>
    </div>
  </div>
);
