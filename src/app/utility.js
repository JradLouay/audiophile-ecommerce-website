import { Darumadrop_One } from "next/font/google";
import data from "../../public/data.json";

export function getDataByCategory(category) {
  return data.filter((item) => item.category === category);
}

export function getDataByProductId(productId) {
  return data.find((item) => item.slug === productId);
}
