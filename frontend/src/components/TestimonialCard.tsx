export default function TestimonialCard({ testimonial }: any) {
  return (
    <div className="max-w-full w-full flex flex-col justify-between sm:max-w-[445px] h-auto sm:min-h-[260px] bg-primaryCardBG p-6 rounded-2xl">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="42"
          viewBox="0 0 52 42"
          fill="none"
        >
          <path
            d="M48.768 0V8.704H43.776C39.8507 8.704 37.888 10.6667 37.888 14.592V18.688H40.064C43.4773 18.688 46.2933 19.712 48.512 21.76C50.816 23.808 51.968 26.4107 51.968 29.568C51.968 32.9813 50.816 35.7547 48.512 37.888C46.2933 40.0213 43.4773 41.088 40.064 41.088C36.5653 41.088 33.7067 40.0213 31.488 37.888C29.2693 35.6693 28.16 32.7253 28.16 29.056V14.336C28.16 4.77867 32.9387 0 42.496 0H48.768ZM20.608 0V8.704H15.616C11.6907 8.704 9.728 10.6667 9.728 14.592V18.688H11.904C15.3173 18.688 18.1333 19.712 20.352 21.76C22.656 23.808 23.808 26.4107 23.808 29.568C23.808 32.9813 22.656 35.7547 20.352 37.888C18.1333 40.0213 15.3173 41.088 11.904 41.088C8.40533 41.088 5.54667 40.0213 3.328 37.888C1.10933 35.6693 0 32.7253 0 29.056V14.336C0 4.77867 4.77867 0 14.336 0H20.608Z"
            fill="url(#paint0_linear_18_1293)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_18_1293"
              x1="51.968"
              y1="20.3654"
              x2="-4.56321e-07"
              y2="20.3654"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00AAE0" />
              <stop offset="1" stopColor="#0CDBA0" />
            </linearGradient>
          </defs>
        </svg>
        <p className="text-base leading-6 text-text-color my-4 font-inter">
          {testimonial?.message}
        </p>
      </div>

      <div className="flex gap-4">
        <img
          src={testimonial?.clientPhoto}
          className="w-[48px] h-[48px] flex-shrink-0 rounded-full"
          alt="client"
        />
        <div>
          <h3 className="text-text-color text-base font-semibold">
            {testimonial?.clientName}
          </h3>
          <p className="text-sm text-supportText-color">
            {testimonial?.clientCompany}
          </p>
        </div>
      </div>
    </div>
  );
}
