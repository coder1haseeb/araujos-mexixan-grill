import React from 'react';

const Location = () => {
  return (
    <div>
      <h1 className="text-4xl text-center my-8 font-bold lg:px-7 sm:px-4 md:my-4 lg:text-3xl lg:my-4">
        <span className="font-lobster text-reddish">Araujo’s Mexican Grill</span>
        Locations
      </h1>
      <div className="flex items-center justify-center">
        <div className="text-base text-light text-center px-28 xl:px-14 lg:px-7 sm:px-4 lg:w-auto">
          Welcome to Araujo’s Mexican Grill! We’re proud to serve you at three
          convenient locations in San Jose, California. Whether you’re craving
          authentic Mexican cuisine for breakfast, lunch, or a late-night
          meal, our restaurants are open daily to satisfy your hunger. Below,
          you’ll find the details of our various locations. We look forward to
          welcoming you soon!
        </div>
      </div>

      <div className="px-28 xl:px-14 lg:px-7 sm:px-4 my-12">
        {/* Location 1 */}
        <div className="grid grid-cols-2 lg:gap-5 md:grid-cols-1 gap-8 bg-box_bg p-5 sm:p-3 rounded-lg">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Araujo's+Mexican+Restaurant/@37.2949364,-121.8364764,17z/data=!4m13!1m7!3m6!1s0x808e325e3b6ab575:0x68b97bb1598328c7!2s3070+Senter+Rd,+San+Jose,+CA+95111!3b1!8m2!3d37.2949364!4d-121.8342877!3m4!1s0x808e325e3b401ab5:0x9aff86b63d0ea0a7!8m2!3d37.2949301!4d-121.8342851"
              className="text-4xl font-bold text-reddish sm:text-[22px] lg:text-[27px]"
            >
              Araujo’s Mexican Grill – Senter
            </a>
            <p className="my-6 text-2xl font-medium lg:my-3 lg:text-xl sm:text-lg sm:my-1">
              3070 Senter Rd San Jose, CA 95111
            </p>
            <p className="text-lg mb-6 font-medium lg:mb-1">
              <span className="text-reddish text-xl font-semibold">Tel</span>
              (408) 300-0814
            </p>
            <p className="text-lg font-medium">
              <span className="text-reddish text-xl font-semibold">Daily </span>9am -12am
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3174.008330102286!2d-121.8364764!3d37.2949364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e325e3942e1eb%3A0x99f119b7535a9ebf!2sAraujo's%20Mexican%20Grill%20-%20El%20Paisa%20Taqueria!5e0!3m2!1sen!2s!4v1727445950826!5m2!1sen!2s"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full md:h-[300px] rounded-lg shadow-sm"
            ></iframe>
          </div>
        </div>

        {/* Location 2 */}
        <div className="grid grid-cols-2 lg:gap-5 md:grid-cols-1 mt-8 gap-8 bg-box_bg p-5 sm:p-3 rounded-lg">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Araujo's+Mexican+Grill+-+El+Paisa/@37.3401073,-121.8444193,17z/data=!4m13!1m7!3m6!1s0x808fcd3199224b45:0x81e5e0706c6779ea!2s1720+Story+Rd+%2320,+San+Jose,+CA+95122!3b1!8m2!3d37.3401073!4d-121.8422306!3m4!1s0x808fcd319ec3d759:0x8b37b8ceba1d0402!8m2!3d37.3399875!4d-121.842433"
              className="text-4xl font-bold text-reddish sm:text-[22px] lg:text-[27px]"
            >
              Araujo’s Mexican Grill – Story
            </a>
            <p className="my-6 text-2xl font-medium lg:my-3 lg:text-xl sm:text-lg sm:my-1">
              1720 Story Rd, Suite 20 San Jose, CA 95122
            </p>
            <p className="text-lg mb-6 font-medium lg:mb-1">
              <span className="text-reddish text-xl font-semibold">Tel</span>
              (408) 272-4255
            </p>
            <p className="text-lg font-medium">
              <span className="text-reddish text-xl font-semibold">Daily </span>9am -10pm
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3174.052647803793!2d-121.8422306!3d37.3401073!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcd3199234231%3A0x25391e2671e08f4d!2sAraujo's%20Mexican%20Grill%20-%20Story!5e0!3m2!1sen!2s!4v1727446282103!5m2!1sen!2s"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full md:h-[300px] rounded-lg shadow-sm"
            ></iframe>
          </div>
        </div>

        {/* Location 3 */}
        <div className="grid grid-cols-2 lg:gap-5 md:grid-cols-1 mt-8 gap-8 bg-box_bg p-5 sm:p-3 rounded-lg">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Araujo's+Mexican+Grill/@37.3697926,-121.8821029,17z/data=!3m1!4b1!4m6!3m5!1s0x808fcd3211dcb787:0x576badf0ecfee16!8m2!3d37.3697884!4d-121.879528!16s%2Fg%2F11syv08c9g?entry=ttu"
              className="text-4xl font-bold text-reddish sm:text-[22px] lg:text-[27px]"
            >
              Araujo’s Mexican Grill – Berryessa
            </a>
            <p className="my-6 text-2xl font-medium lg:my-3 lg:text-xl sm:text-lg sm:my-1">
              1501 Berryessa Rd, Ste 10 San Jose, CA 95133
            </p>
            <p className="text-lg mb-6 font-medium lg:mb-1">
              <span className="text-reddish text-xl font-semibold">Tel</span>
              (669) 500-TACO (8226)
            </p>
            <p className="text-lg font-medium">
              <span className="text-reddish text-xl font-semibold">Daily </span>9am -10pm
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3174.1087723132864!2d-121.879528!3d37.3697926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcd3211de0cb5%3A0x3c4f6c96bb4d208e!2sAraujo's%20Mexican%20Grill!5e0!3m2!1sen!2s!4v1727446463470!5m2!1sen!2s"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full md:h-[300px] rounded-lg shadow-sm"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
