import { FaStar } from "react-icons/fa";

const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <div className="flex items-center mb-2">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-bold">{review.name}</p>
              <div className="flex text-yellow-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 text-sm">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
