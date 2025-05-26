import { useState } from "react";
import DrawOffer from "./DrawOffer";
import MainTitle from "./MainTitle";
import { offers } from "./_Data/_ourOffer";
import { FiFilter } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion"; // filter animation

const types = ["Hot", "New", "Most sale"];
export default function OurOffer() {
  const [filterBy, setFilterBy] = useState("");
  const filteredOffers = filterBy
    ? offers.filter((offer) => offer.type === filterBy)
    : offers;

  return (
    <section id="our-offer">
      <MainTitle title="Our Offers" subtitle="Our Offer" />
      <div>
        <div className="container py-[60px]">
          {/* Filter */}
          <div className="flex flex-wrap w-fit m-auto justify-center mb-10 ">
            <button
              onClick={() => setFilterBy("")}
              className={`flex items-center gap-2 px-3 sm:px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300
              ${
                filterBy === ""
                  ? " border-accent shadow-[inset_2px_4px_5px_#00000044,inset_-2px_-4px_5px_#00000011] underline pointer-events-none"
                  : "hover:underline shadow-[2px_4px_5px_#00000044,-2px_-4px_5px_#00000011] hover-underline"
              }
                  `}
            >
              All
            </button>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilterBy(type)}
                className={`flex items-center gap-2 px-3 sm:px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-all duration-300
              ${
                filterBy === type
                  ? " border-accent  shadow-[inset_2px_4px_5px_#00000044,inset_-2px_-4px_5px_#00000011] pointer-events-none"
                  : "hover:underline shadow-[2px_4px_5px_#00000044,-2px_-4px_5px_#00000011] hover-underline"
              }
                  `}
              >
                {filterBy === type && <FiFilter size={16} />}
                {type}
              </button>
            ))}
          </div>
          {/* Drawing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {filteredOffers.map((offer) => (
                <motion.div
                  key={offer.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <DrawOffer offer={offer} border={true} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
