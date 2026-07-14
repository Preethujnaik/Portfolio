import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const certificateData = [
  {
    id: 1,
    title: "NPTEL Soft Skill Development",
    img: process.env.PUBLIC_URL + "/certificates/nptel-soft-skills.jpg",
  },
  {
    id: 2,
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    img: process.env.PUBLIC_URL + "/certificates/gen-ai-linkedin.jpg",
  },
];

const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificateData.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === certificateData.length - 1 ? 0 : prev + 1));
  };

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    trackMouse: true,
  });

  return (
    <section className="py-20 relative" id="certificates">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#ffd3d3]/10 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-[#3d2b33] font-serif relative">
          Certificates
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-12 h-[2px] bg-[#e99a9a]"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {certificateData.map((cert, idx) => (
            <div
              key={cert.id}
              className="cursor-pointer bg-white/60 border border-pink-100/60 rounded-[2rem] overflow-hidden hover:border-[#e99a9a]/40 transition-all duration-300 shadow-sm group flex flex-col justify-between"
              onClick={() => openModal(idx)}
            >
              <div className="overflow-hidden h-48 border-b border-pink-50">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center font-bold text-[#4a3740] text-sm leading-snug group-hover:text-[#e99a9a] transition-colors">
                {cert.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-[#3d2b33]/40 backdrop-blur-md flex items-center justify-center z-50 p-4"
          {...swipeHandlers}
        >
          <div className="relative max-w-3xl w-full bg-white border border-pink-100 rounded-[2rem] p-3 shadow-2xl">
            <button
              className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-[#4a3740] hover:text-[#e99a9a] w-10 h-10 rounded-full flex items-center justify-center shadow-md focus:outline-none transition z-10 font-bold"
              onClick={closeModal}
            >
              ✕
            </button>

            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={certificateData[currentIndex].img}
                alt={certificateData[currentIndex].title}
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
              />
            </div>

            {/* Navigation */}
            <button
              className="absolute top-1/2 left-4 -translate-y-1/2 text-[#4a3740] text-2xl font-light px-4 py-2 bg-white/90 border border-pink-100 rounded-full hover:bg-[#e99a9a] hover:text-white transition shadow-sm"
              onClick={prevImage}
            >
              ‹
            </button>
            <button
              className="absolute top-1/2 right-4 -translate-y-1/2 text-[#4a3740] text-2xl font-light px-4 py-2 bg-white/90 border border-pink-100 rounded-full hover:bg-[#e99a9a] hover:text-white transition shadow-sm"
              onClick={nextImage}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
