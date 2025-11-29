import ImageSlider from "../components/ImageSlider";

export default function Glimpse() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <h1 className="font-primary text-white">Glimpse Navira</h1>
      <div className="flex flex-col gap-10">
        <ImageSlider pauseOnHover>
          <img
            src="/glimpse1.jpg"
            alt="Glimpse 1"
            className="h-48 w-auto object-cover rounded-lg"
          />
        </ImageSlider>
      </div>
    </div>
  );
}
