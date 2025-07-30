import { useState } from "react";
import { differenceInDays, parseISO } from "date-fns";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const getNumberOfNights = () => {
    if (!checkIn || !checkOut) return 0;

    const start = parseISO(checkIn);
    const end = parseISO(checkOut);
    const diff = differenceInDays(end, start);

    return diff > 0 ? diff : 0;
  };

  const nights = getNumberOfNights();
  const totalPayment = nights * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label className="block text-sm font-medium">Check-in</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 w-full mt-1 rounded"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">Check-out</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 w-full mt-1 rounded"
        />
      </div>

      {/* Total payment */}
      <div className="mt-4 text-sm text-gray-800">
        {nights > 0 ? (
          <p>
            Total payment for <strong>{nights}</strong> {nights === 1 ? "night" : "nights"}:{" "}
            <strong>${totalPayment}</strong>
          </p>
        ) : (
          <p className="text-gray-500">Select valid dates to calculate total</p>
        )}
      </div>

      {/* Reserve button */}
      <button
        className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
        disabled={nights === 0}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
