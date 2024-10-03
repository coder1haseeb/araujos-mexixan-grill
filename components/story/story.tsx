import React from 'react';
import Image from 'next/image'; // Import the Image component from next/image
import trilla from '../../assets/traila.jpg';
import image2 from '../../assets/Berryessa-Interior.png';

const Story = () => {
  return (
    <div className="px-28 xl:px-14 lg:px-7 sm:px-4 py-5 text-dark">
      <h1 className="text-center text-4xl font-bold">
        A <span className="text-reddish font-lobster">Taco-Lovers</span> Story
      </h1>
      <div className="px-4 py-12 sm:p-0 sm:py-4">
        <div className="grid md:grid-cols-1 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold italic mb-6 text-gray-700">
              "¿Quien tiene los mejores tacos en San Jose? ¿Y los mejores
              burritos?"
            </h2>
            <p className="mb-4">
              "Who has the best tacos in San Jose? And the best burritos?" It
              was a phrase repeated on an almost weekly basis by Silicon Valley
              engineer Frank Araujo. A native of Mexico, Mr. Araujo came to the
              US at age 14, seeking opportunity. Through hard work and plenty of
              divine blessings, he built the life of his dreams – but one thing
              was missing. His new hometown just couldn't deliver the authentic
              Mexican flavors he craved.
            </p>
            <p>
              So, he did what any techie with a taco craving would do: he
              engineered a solution. Mr. Araujo set to work gathering the best
              taqueros and honing the best recipes to deliver San Jose's best
              tacos and burritos. In 2005, he took a leap of faith opening the
              El Paisa mobile kitchen. This 28-foot long, glass-fronted taco
              trailer was a fast hit. Lines stretched down the block as our
              hand-made tortillas and fresh grilled carne asada attracted a
              loyal following across the South Bay. Soon, one El Paisa trailer
              became two, and then four.
            </p>
          </div>
          <div className="relative">
            <Image
              src={trilla} // Use the Image component from next/image
              alt="The original 'El Paisa' Mobile Kitchen (circa 2006)"
              className="rounded-lg shadow-lg w-full h-auto mb-6" // Added margin-bottom
              layout="responsive" // Set the layout property
            />
            <p
              className="absolute bottom-4 left-4 sm:text-xs bg-white bg-opacity-75 p-2 rounded text-sm font-medium"
            >
              The original "El Paisa" Mobile Kitchen (circa 2006)
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <p>
            With the proof of concept established, it was soon time to trade a
            few of taco trucks for a full-fledged restaurant. Araujo's Mexican
            Grill's first permanent location opened at 3070 Senter Rd in San
            Jose in 2008 and quickly became a late-night foodie hangout and one
            of the Bay Area's best taquerias.
          </p>
          <p>
            In 2012, another location followed at the famous intersection of
            King and Story – the heart of Latin culture in the South Bay.
          </p>
          <p>
            In 2018, the taco shop founded by a Silicon Valley engineer finally
            made the jump online and debuted on DoorDash, GrubHub, and UberEats.
            These platforms introduced our authentic Mexican street food to a
            much wider audience. Suddenly, instead of just being the best taco
            shop on the East Side, we were simultaneously delivering the best
            burritos in Almaden and the best tacos in Willow Glen. Araujo's
            quickly became one of the most popular independent restaurants on
            DoorDash – and we were invited to join their national Restaurant
            Advisory Committee in 2019.
          </p>
          <p>
            After analyzing delivery trends, we realized we needed to expand our
            reach further north, and in 2021, while many restaurants were
            closing due to the pandemic, we broke ground on a new flagship
            location at 1501 Berryessa Rd in North San Jose. This store, with
            its high-end finishes and massive HD screens, will be the model for
            Araujo's Mexican Grill's future look and feel, but at our heart (and
            in our kitchens) we will always remain true to our taco truck roots:
            offering authentic Mexican flavors made from scratch with the
            highest quality and freshest ingredients.
          </p>
        </div>
      </div>
      <div>
        <Image
          src={image2} // Use the Image component from next/image
          alt="The interior of Araujo's Mexican Grill"
          className="rounded-lg shadow-lg w-full mb-6" // Added margin-bottom
          layout="responsive" // Set the layout property
        />
      </div>
    </div>
  );
};

export default Story;
