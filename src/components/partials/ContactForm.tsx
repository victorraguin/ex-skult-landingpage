export const ContactForm = () => (
  <form
    className="flex flex-1 flex-row gap-x-3"
    onSubmit={evt => {
      evt.preventDefault();
      // console.log(evt.target[0].value);
    }}
  >
    <input
      className={`
          w-2/5 border-b border-[#a9a9a9] bg-transparent px-1 text-sm
        font-light text-[#a9a9a9] focus:border-b-2 focus:outline-none hover:border-b-2 sm:inline-block
      `}
      name="name"
      placeholder="Firstname"
    />
    <input
      className={`
        hidden w-3/5 border-b border-[#a9a9a9] bg-transparent px-1 text-sm font-light
        text-[#a9a9a9] focus:border-b-2 focus:outline-none hover:border-b-2 sm:inline-block
      `}
      type="email"
      name="email"
      placeholder="Email"
    />
    <input
      type="submit"
      value="Subscribe"
      className={`
        cursor-pointer rounded-full border border-[#a9a9a9] bg-[#222222] p-2 font-light
        text-[#a9a9a9] hover:scale-105 hover:brightness-150
      `}
    />
  </form>
);
