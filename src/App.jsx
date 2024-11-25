import Header from "./components/Header"
import GreetingCard from "./components/GreetingCard"

export default function App() {
  // Array of card data containing title and message for each card.
  const cards = [
    { title: "Happy Birthday!", message: "Wishing you a fantastic day filled with joy! 🎉" },
    { title: "Congratulations!", message: "Great job on your achievement! 🌟" },
    { title: "Thank You!", message: "Thanks for your kindness and support! 💖" },
  ];

  return (
    // Main container with a light pink background and full-screen height.
    <div className="bg-pink-50 min-h-screen">
     
      <Header />

      {/* Container for all greeting cards, styled as a flexbox */}
      <div className="flex flex-wrap justify-center items-center py-8 gap-4">
        
        {/* Loop through the cards array and create a GreetingCard for each item */}
        {cards.map((card, index) => (
          // Pass unique key, title, and message props to each GreetingCard.
          <GreetingCard key={index} title={card.title} message={card.message} />
        ))}
      </div>
    </div>
  )
}

