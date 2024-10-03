"use client";
import { FC, useState } from "react";
import {
  tacosData,
  burritosData,
  breakfastsData,
  regionalFavoritesData,
  specialtiesData,
  quesadillasData,
  drinksData,
  sidesData,
  losCarnesData,
} from "@/data/data";
import Image from "next/image";


const categoriesData = {
  Tacos: tacosData,
  Burritos: burritosData,
  Breakfasts: breakfastsData,
  "Regional Favorites": regionalFavoritesData,
  Specialties: specialtiesData,
  Quesadillas: quesadillasData,
  Drinks: drinksData,
  Sides: sidesData,
  "Los Carnes": losCarnesData,
};

const categoryNames = Object.keys(categoriesData);

const RestaurantMenu: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [modalContent, setModalContent] = useState<{
    name: string;
    description: string;
  } | null>(null);

  const showModal = (itemName: string, description: string) => {
    setModalContent({ name: itemName, description });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredItems =
    selectedCategory === "All"
      ? Object.values(categoriesData).flat()
      : categoriesData[selectedCategory as keyof typeof categoriesData];

  return (
    <div className="my-12 lg:my-8">

      <div className="text-4xl text-center lg:text-3xl my-4 sm:text-2xl lg:my-2 lg:px-7 sm:px-4 font-bold">
        Our Restaurant{" "}
        <span className="font-lobster text-reddish">Food Menu</span>
      </div>

      <div className="flex items-center justify-center">
        <div className="text-base text-light w-[600px] md:w-full lg:px-7 sm:px-4 text-center">
          "Savor the vibrant flavors of Mexico, made with love and the freshest
          ingredients. At Araujo’s, every bite is a fiesta for your taste buds!"
        </div>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center my-8 space-x-4 overflow-auto">
        <button
          className={`px-4 py-2 rounded-full font-bold ${
            selectedCategory === "All" ? "bg-reddish text-white" : "bg-gray-200"
          }`}
          onClick={() => handleCategoryClick("All")}
        >
          All
        </button>
        {categoryNames.map((category, idx) => (
          <button
            key={idx}
            className={`px-4 py-2 w-auto rounded-full font-bold ${
              selectedCategory === category
                ? "bg-reddish text-white"
                : "bg-gray-200"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Render Menu Items */}
      <div className="p-4">
        <MenuSection
          title={selectedCategory === "All" ? "All Items" : selectedCategory}
          items={filteredItems}
          showModal={showModal}
        />
      </div>

      {/* Modal */}
      {modalContent && (
        <div
          id="modal"
          className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-[450px]">
            <h2 id="modal-title" className="text-xl font-bold mb-4">
              {modalContent.name}
            </h2>
            <p id="modal-description" className="text-base">
              {modalContent.description}
            </p>
            <button
              id="close-modal"
              className="bg-reddish text-white px-4 py-2 rounded-full mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Separate component for menu sections
const MenuSection: FC<{
  title: string;
  items: any[];
  showModal: (name: string, desc: string) => void;
}> = ({ title, items, showModal }) => {
  return (
    <>
      <div className="flex items-center justify-center my-10 lg:my-8 md:my-6">
        <div className="w-2/5 h-px bg-reddish"></div>
        <h2 className="mx-4 text-2xl sm:!w-[250px] sm:text-xl text-center font-bold text-dark">
          {title}
        </h2>
        <div className="w-2/5 h-px bg-reddish"></div>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-1">
        {items.map((item, idx) => (
          <MenuItemCard key={idx} item={item} showModal={showModal} />
        ))}
      </div>
    </>
  );
};

// Separate component for each menu item
const MenuItemCard: FC<{
  item: any;
  showModal: (name: string, desc: string) => void;
}> = ({ item, showModal }) => {
  const description =
    item.description || "Delicious and fresh Mexican cuisine.";
  const maxDescriptionLength = 35;

  const isTruncated = description.length > maxDescriptionLength;
  const truncatedDescription = isTruncated
    ? description.slice(0, maxDescriptionLength) + "..."
    : description;
    // const imageUrl = item.image.startsWith('/')
    // ? item.image // If image path starts with `/`, it's a public asset
    // : `/food/${item.image}`;


    return (
    <div className="bg-box_bg grid rounded-2xl gap-4 lg:gap-0 grid-cols-7 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 xl:grid-cols-8">
      <div className="bg-img_light_bg rounded-2xl hover:bg-img_dark_bg col-span-2 min-h-[200px] xs:col-span-1 lg:!col-span-8 lg:h-[300px] md:!h-[200px] xl:col-span-3 hover:duration-300 duration-300 cursor-pointer">
      <img
          src={item.image}
          alt={item.name}
          className="rounded-2xl h-full w-full object-cover"
        />
      </div>
      <div className="p-5 col-span-5 xs:col-span-1 lg:col-span-4 lg:p-3 xl:col-span-5">
        <h3 className="text-xl font-semibold hover:text-reddish cursor-pointer">
          {item.name}
        </h3>
        <p className="my-3 text-light">
          {truncatedDescription}
          {isTruncated && (
            <span
              className="text-reddish cursor-pointer ml-2 font-semibold"
              onClick={() => showModal(item.name, description)}
            >
              Read More
            </span>
          )}
        </p>
        <div className="flex items-center">
          {item.price && (
            <p className="text-orange-500 text-xl font-bold mr-3">
              $ {item.price}
            </p>
          )}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://order.online/business/araujos-mexican-grill-312560"
            className="bg-reddish text-white text-base font-medium px-4 py-2 rounded-full"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
