export default function NainitalTravelSite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center text-white">
        <div className="bg-black/50 min-h-[70vh] flex flex-col justify-center items-center px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Escape to Nainital</h1>
          <p className="text-xl max-w-2xl">Reconnect with nature, find mental peace, and experience the calm beauty of Uttarakhand.</p>
          <button className="mt-8 px-8 py-3 bg-white text-slate-900 rounded-2xl font-semibold">Book Your Journey</button>
        </div>
      </header>

      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Nainital?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl shadow-lg bg-white">
            <h3 className="font-semibold text-xl mb-3">Mental Peace</h3>
            <p>Leave city stress behind and refresh your mind in the serene hills.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg bg-white">
            <h3 className="font-semibold text-xl mb-3">Nature Connection</h3>
            <p>Experience lakes, forests, and breathtaking mountain views.</p>
          </div>
          <div className="p-6 rounded-2xl shadow-lg bg-white">
            <h3 className="font-semibold text-xl mb-3">Curated Travel</h3>
            <p>Comfortable and easy booking designed for peaceful getaways.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-100 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Destinations</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {["Naini Lake","Snow View Point","Bhimtal","Mukteshwar"].map((place)=>(
            <div key={place} className="bg-white rounded-2xl p-6 shadow-md text-center">{place}</div>
          ))}
        </div>
      </section>

      <section className="py-16 px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Book Your Peaceful Escape</h2>
        <div className="grid gap-4">
          <input placeholder="Your Name" className="p-4 rounded-xl border" />
          <input placeholder="Phone Number" className="p-4 rounded-xl border" />
          <input placeholder="Travel Date" type="date" className="p-4 rounded-xl border" />
          <button className="bg-slate-900 text-white py-4 rounded-xl">Submit Booking Request</button>
        </div>
      </section>

      <footer className="bg-slate-900 text-white text-center py-8">
        <p>Your Nainital Journey Starts Here</p>
      </footer>
    </div>
  )
}
