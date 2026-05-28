import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Amit Srivastava",
    location: "Noida Sector 62",
    rating: 5,
    text: "Humne 500 branded mugs aur bottles apni company ke annual employee event ke liye order ki. Har piece pe logo crisp tha, quality uniform thi, ek bhi defect nahi. Delivery deadline se 2 din pehle aayi. Ab yahi hamare permanent gifting vendor hain!",
  },
  {
    name: "Priya Negi",
    location: "R.K. Puram, Delhi",
    rating: 5,
    text: "Hamare school ke Annual Day ke liye 800 printed T-shirts aur water bottles order ki — students, teachers aur staff sab ke liye. Quality ekdum top class thi aur delivery event se pehle aa gayi. Parents ne bhi mugs ki tarif ki. Agli baar bhi inhi se order karenge!",
  },
  {
    name: "Rahul Mehra",
    location: "Gurgaon, Cyber City",
    rating: 5,
    text: "1000+ printed T-shirts banwai apni field service team ke liye — logo, team name aur city print tha. Itne bade bulk order mein bhi consistency remarkable thi. Fabric daily use ke liye durable hai. Fast growing teams ke liye best vendor hai yeh!",
  },
  {
    name: "Sanjana Batra",
    location: "Noida Sector 125",
    rating: 5,
    text: "Freshers' Party ke liye 1200 customized mugs aur pens order ki. Har cheez pe logo aur batch year print tha. Students boht excited the gifts dekh ke. Bulk pricing reasonable thi aur quality mein koi compromise nahi. University events ke liye perfect vendor!",
  },
  {
    name: "Vikram Luthra",
    location: "Gurugram, Sector 15",
    rating: 5,
    text: "2000 printed bottles order ki delivery team ke liye — logo aur tagline ke saath. Quality check pe ek bhi piece reject nahi hua, jo pehle kisi vendor ke saath nahi hua tha. Pricing competitive thi. Next order already place kar diya hai!",
  },
  {
    name: "Neha Joshi",
    location: "Hauz Khas, Delhi",
    rating: 5,
    text: "Annual fest ke liye 600 T-shirts aur 400 branded pens order ki. Mockup 24 hours mein diya, changes turant incorporate kiye, delivery on time aayi. T-shirts ki print quality ekdum sharp thi. Sabko inhe recommend karunga!",
  },
  {
    name: "Deepak Taneja",
    location: "Connaught Place, Delhi",
    rating: 5,
    text: "Client appreciation drive ke liye 300 premium branded mugs aur pen sets order ki. Packaging itni premium thi ki directly gift karne laayak thi — alag wrapping ki zaroorat hi nahi padi. Clients ne quality ki khud tarif ki. Bulk mein aisi quality bahut rare hoti hai.",
  },
  {
    name: "Tanya Kapoor",
    location: "Aerocity, Delhi",
    rating: 4,
    text: "750 branded bottles aur mugs order ki promotional campaign ke liye. Colors ekdum brand guidelines ke according the — Pantone match bhi kiya inlogon ne! Ek order mein thodi si delay thi lekin communication poora transparent raha. Very professional team, will work again.",
  },
  {
    name: "Rohit Yadav",
    location: "Bawana, Delhi",
    rating: 5,
    text: "Placement season ke liye 500 branded T-shirts, mugs aur pen sets banwai. Ek hi jagah se sab kuch milna boht convenient raha. Quality ne sabko impress kiya. Kai logon ne poocha kahan se banwaye — inhi ka naam diya!",
  },
  {
    name: "Ananya Sharma",
    location: "Laxmi Nagar, Delhi",
    rating: 5,
    text: "Team ke liye 150 onboarding kits banwai — printed T-shirt, mug aur pen ek saath. Startup budget mein itni achi quality honestly expect nahi thi. Ab har new joiner ko kit milti hai aur sab boht motivated feel karte hain. Chhoti cheez hai but bahut bada fark padta hai!",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${
            i < rating ? "text-amber-400" : "text-gray-200"
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

  // Swipe support for mobile
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
    <section className="w-full bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;600&display=swap');

        .rev-section { font-family: 'DM Sans', sans-serif; }
        .rev-title { font-family: 'Playfair Display', serif; }

        .rev-card {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.32s ease, transform 0.32s ease;
        }
        .rev-card.exit-next { opacity: 0; transform: translateX(-30px); }
        .rev-card.exit-prev  { opacity: 0; transform: translateX(30px); }

        .dot-btn { transition: all 0.3s ease; background-color: #d1d5db; }
        .dot-btn.active { background-color: #d97706; transform: scale(1.5); }

        .nav-btn {
          transition: all 0.22s ease;
          background: white;
          border: 2px solid #e5e7eb;
          color: #9ca3af;
        }
        .nav-btn:hover {
          background: #d97706;
          border-color: #d97706;
          color: white;
          transform: scale(1.08);
        }
        .nav-btn:active { transform: scale(0.95); }

        .quote-mark {
          font-family: Georgia, serif;
          font-size: clamp(80px, 15vw, 160px);
          line-height: 0.55;
          color: #fefce8;
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
            <h2 className="rev-title text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Customer Reviews
            </h2>
            <div className="flex justify-center mt-3 sm:mt-4">
              <div className="h-1 w-14 sm:w-16 bg-amber-400 rounded-full"></div>
            </div>
          </div>

          {/* Card — full width on mobile, constrained on large screens */}
          <div
            className="relative w-full bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
            style={{ minHeight: "clamp(280px, 50vw, 360px)" }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Amber top bar */}
            <div className="absolute top-0 left-0 w-full h-1 sm:h-1.5 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300"></div>

            {/* Decorative quote */}
            <span className="quote-mark">"</span>

            {/* Content */}
            <div
              className={`rev-card w-full h-full flex flex-col items-center justify-center px-10 sm:px-16 lg:px-24 py-10 sm:py-12 ${
                animating
                  ? direction === "next"
                    ? "exit-next"
                    : "exit-prev"
                  : ""
              }`}
            >
              <StarRating rating={review.rating} />

              <p className="text-gray-600 text-sm sm:text-base lg:text-lg text-center leading-relaxed mb-6 sm:mb-8 italic relative z-10 max-w-2xl mx-auto">
                {review.text}
              </p>

              {/* Divider */}
              <div className="flex items-center gap-3 w-full max-w-xs mx-auto mb-5">
                <div className="flex-1 h-px bg-gray-100"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                <div className="flex-1 h-px bg-gray-100"></div>
              </div>

              {/* Reviewer */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-amber-700 font-bold text-base sm:text-lg mb-1">
                  {review.name.charAt(0)}
                </div>
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  {review.name}
                </span>
                <span className="text-gray-400 text-xs flex items-center gap-1">
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

            {/* Nav arrows — inside card, vertically centered */}
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
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? "next" : "prev")}
                aria-label={`Go to review ${i + 1}`}
                className={`dot-btn w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${i === current ? "active" : ""}`}
              />
            ))}
          </div>

          <p className="text-center text-gray-300 text-xs mt-2">
            {current + 1} / {reviews.length}
          </p>
        </div>
      </div>
    </section>
  );
}
