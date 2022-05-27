import { useState } from 'react';

export const ContactForm = ({ className, inputClassname }: { className?: string; inputClassname?: string }) => {
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');

  const resetValues = () => {
    setFirstname('');
    setEmail('');
  };

  return (
    <form
      id="36f5828c-8d7c-4e90-b6a1-a02a350ddeb2"
      className={`flex w-80 flex-1 flex-col gap-x-3 gap-y-8 lg:flex-row lg:text-sm lg:font-light ${className}`}
      onSubmit={e => {
        e.preventDefault();
        resetValues();
      }}
    >
      <input
        className={`
          border-b border-[#a9a9a9] bg-transparent px-1
          text-[#a9a9a9] focus:border-b-2 focus:outline-none hover:border-b-2 lg:w-2/5 ${inputClassname}
        `}
        name="name"
        placeholder="Firstname"
        required
        value={firstname}
        onChange={e => setFirstname(e.target.value)}
      />
      <input
        className={`
          border-b border-[#a9a9a9] bg-transparent px-1 text-[#a9a9a9]
          focus:border-b-2 focus:outline-none hover:border-b-2 lg:w-3/5 ${inputClassname}
        `}
        type="email"
        name="email"
        required
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="submit"
        value="Subscribe"
        className={`
          cursor-pointer rounded-full border border-[#a9a9a9] bg-[#222222] p-2
          text-[#a9a9a9] hover:scale-105 hover:brightness-150
        `}
      />
    </form>
  );
};
