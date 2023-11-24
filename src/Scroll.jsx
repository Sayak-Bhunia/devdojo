import { Banner } from "./Banner";
import "./Scroll.css";

const images = [
  "https://i.ibb.co/zRcQFjy/think-harder-2.png",
  "https://i.ibb.co/Dr3dNfp/think-harder-4.png",
  "https://i.ibb.co/fXpQGqG/think-harder-3.png",
  "https://i.ibb.co/CmPgD8p/think-harder-5.png",
  "https://i.ibb.co/kMQ7qfR/think-harder-6.png",
  "https://i.ibb.co/y4bfSm3/think-harder-7.png",
  "https://i.ibb.co/zmbmPJF/think-harder-8.png",
  "https://i.ibb.co/RDF33dp/think-harder-9.png",
  "https://i.ibb.co/rkxBvp0/think-harder-10.png",
  "https://i.ibb.co/sRXngjp/think-harder-11.png",
  "https://i.ibb.co/NFhgjHh/think-harder-12.png",
  "https://i.ibb.co/v3jX0BB/think-harder-13.png",
  "https://i.pinimg.com/originals/76/83/d5/7683d5b22c2c42f64a3651321d4ae12e.png",
  "https://i.pinimg.com/736x/94/fe/17/94fe1715a799acfd423ae7ebde8a8daa.jpg",
  "https://i.pinimg.com/736x/83/5e/f3/835ef3f7195c861c8338bcb71626423f.jpg",
  "https://i.pinimg.com/736x/c4/80/86/c480863e70c07f36bd49428d35aef42d.jpg",
  "https://i.pinimg.com/736x/81/bd/8e/81bd8edcefe6ce2b8424fdeae1d65b00.jpg"
].map((image) => ({
  id: crypto.randomUUID(),
  image
}));

export default function Scroll() {
  return (
    <div className="scroll">
      <Banner images={images} speed={40000} />
    </div>
  );
}
