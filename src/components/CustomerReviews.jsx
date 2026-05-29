import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Michael Chen",
    location: "San Francisco, CA",
    rating: 5,
    text: "Ordered 500 custom mugs and bottles for our annual company event. The logo placement was perfect on every single piece, quality was consistent, and not a single defect. Delivery arrived 2 days early. They're now our permanent gifting vendor!",
  },
  {
    name: "Sarah Johnson",
    location: "Austin, TX",
    rating: 5,
    text: "We needed 800 printed T-shirts and water bottles for our school's Annual Day celebration — for students, teachers, and staff. The quality was absolutely top-notch and delivery arrived before the event. Parents even complimented the mugs! Will definitely order from them again.",
  },
  {
    name: "David Williams",
    location: "Chicago, IL",
    rating: 5,
    text: "Got 1000+ printed T-shirts for our field service team with logos and city names. The consistency across such a large bulk order was remarkable. The fabric is durable for daily use. Best vendor for fast-growing teams!",
  },
  {
    name: "Jessica Martinez",
    location: "Miami, FL",
    rating: 5,
    text: "Ordered 1200 custom mugs and pens for Freshers' Party. Every item had the logo and batch year printed perfectly. Students were super excited receiving these gifts. Bulk pricing was reasonable with no compromise on quality. Perfect vendor for university events!",
  },
  {
    name: "Robert Taylor",
    location: "Seattle, WA",
    rating: 5,
    text: "Ordered 2000 printed bottles for our delivery team with logo and tagline. Not a single piece was rejected during quality check — something that never happened with previous vendors. Competitive pricing. Already placed our next order!",
  },
  {
    name: "Emily Brown",
    location: "Denver, CO",
    rating: 5,
    text: "For our annual fest, we ordered 600 T-shirts and 400 branded pens. Got the mockup within 24 hours, changes were incorporated immediately, delivery was on time. The print quality on T-shirts was incredibly sharp. Highly recommend them to everyone!",
  },
  {
    name: "James Wilson",
    location: "Boston, MA",
    rating: 5,
    text: "Ordered 300 premium branded mugs and pen sets for a client appreciation drive. The packaging was so premium that we could gift them directly — no extra wrapping needed. Clients themselves complimented the quality. Such quality in bulk is rare to find.",
  },
  {
    name: "Amanda Lee",
    location: "Portland, OR",
    rating: 4,
    text: "Ordered 750 branded bottles and mugs for a promotional campaign. The colors matched our brand guidelines exactly — they even did Pantone matching! There was a slight delay on one order, but communication was completely transparent. Very professional team, will work with them again.",
  },
  {
    name: "Daniel Kim",
    location: "Atlanta, GA",
    rating: 5,
    text: "Got 500 branded T-shirts, mugs, and pen sets for placement season. Getting everything from one place was super convenient. The quality impressed everyone. Many people asked where we got them made — I gave them this company's name!",
  },
  {
    name: "Olivia Parker",
    location: "Nashville, TN",
    rating: 5,
    text: "Ordered 150 onboarding kits for our team — printed T-shirts, mugs, and pens all together. Honestly didn't expect such good quality on a startup budget. Now every new joiner receives this kit and feels motivated. Small thing but makes a huge difference!",
  },
  {
    name: "Thomas Anderson",
    location: "New York, NY",
    rating: 5,
    text: "Been using their services for over 2 years now. The consistency in quality across multiple bulk orders is unmatched. Customer support is responsive and they always meet deadlines. Couldn't ask for a better printing partner.",
  },
  {
    name: "Rachel Green",
    location: "Los Angeles, CA",
    rating: 5,
    text: "The attention to detail on our corporate gifts was impressive. Each pen and mug was individually inspected before shipping. Our clients loved the personalized touch. Will definitely be a repeat customer!",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
            i < rating ? "text-amber-400" : "text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function CustomerReviews() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");
  const [touchStart, setTouchStart] = useState(null);

  const goTo = (index, dir = "next") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 320);
  };

  const prev = () =>
    goTo((current - 1 + reviews.length) % reviews.length, "prev");
  const next = () => goTo((current + 1) % reviews.length, "next");

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % reviews.length, "next");
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const review = reviews[current];

  return (
    <section className="w-full bg-gradient-to-br from-slate-900 to-gray-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .rev-section { font-family: 'DM Sans', sans-serif; }
        .rev-title { font-family: 'Playfair Display', serif; }

        .rev-card {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.32s ease, transform 0.32s ease;
        }
        .rev-card.exit-next { opacity: 0; transform: translateX(-30px); }
        .rev-card.exit-prev  { opacity: 0; transform: translateX(30px); }

        .dot-btn { 
          transition: all 0.3s ease; 
          background-color: #4a4a5a; 
        }
        .dot-btn.active { 
          background: linear-gradient(90deg, #7c3aed, #ec4899);
          transform: scale(1.5); 
          width: 20px;
          border-radius: 10px;
        }

        .nav-btn {
          transition: all 0.22s ease;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #c4c4d8;
        }
        .nav-btn:hover {
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          border-color: transparent;
          color: white;
          transform: scale(1.08);
        }
        .nav-btn:active { transform: scale(0.95); }

        .quote-mark {
          font-family: Georgia, serif;
          font-size: clamp(80px, 15vw, 160px);
          line-height: 0.55;
          color: rgba(255,255,255,0.03);
          user-select: none;
          pointer-events: none;
          position: absolute;
          top: 10px;
          left: 16px;
        }

        @media (max-width: 480px) {
          .nav-btn { width: 36px; height: 36px; }
        }
      `}</style>

      <div className="rev-section w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="rev-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What Our Customers Say
            </h2>
            <div className="flex justify-center mt-3 sm:mt-4">
              <div className="h-1 w-14 sm:w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
              Real stories from businesses and organizations we've worked with
            </p>
          </div>

          {/* Card */}
          <div
            className="relative w-full bg-[#13131f] rounded-2xl sm:rounded-3xl shadow-xl border border-[rgba(255,255,255,0.06)] overflow-hidden"
            style={{ minHeight: "clamp(320px, 50vw, 400px)" }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Gradient top bar */}
            <div className="absolute top-0 left-0 w-full h-1 sm:h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>

            {/* Decorative quote */}
            <span className="quote-mark">"</span>

            {/* Content */}
            <div
              className={`rev-card w-full h-full flex flex-col items-center justify-center px-8 sm:px-16 lg:px-24 py-10 sm:py-12 ${
                animating
                  ? direction === "next"
                    ? "exit-next"
                    : "exit-prev"
                  : ""
              }`}
            >
              <StarRating rating={review.rating} />

              <p className="text-gray-300 text-sm sm:text-base lg:text-lg text-center leading-relaxed mb-6 sm:mb-8 italic relative z-10 max-w-3xl mx-auto">
                "{review.text}"
              </p>

              {/* Divider */}
              <div className="flex items-center gap-3 w-full max-w-xs mx-auto mb-5">
                <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                <div className="flex-1 h-px bg-[rgba(255,255,255,0.08)]"></div>
              </div>

              {/* Reviewer */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500 flex items-center justify-center text-purple-400 font-bold text-base sm:text-lg mb-1">
                  {review.name.charAt(0)}
                </div>
                <span className="font-semibold text-white text-sm sm:text-base">
                  {review.name}
                </span>
                <span className="text-gray-500 text-xs flex items-center gap-1">
                  <svg
                    className="w-3 h-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {review.location}
                </span>
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              aria-label="Previous review"
              className="nav-btn absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm z-20"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="nav-btn absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm z-20"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {reviews.slice(0, 8).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "next" : "prev")}
                aria-label={`Go to review ${i + 1}`}
                className={`dot-btn w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "active" : ""}`}
              />
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs mt-3">
            {current + 1} of {reviews.length} reviews • 4.9 average rating
          </p>

          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-white text-sm font-semibold">4.9</span>
            </div>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-gray-400 text-xs">
              Based on {reviews.length}+ verified reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
