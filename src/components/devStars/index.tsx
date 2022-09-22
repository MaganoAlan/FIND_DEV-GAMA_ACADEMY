import { MaterialIcons } from "@expo/vector-icons";

import { StarContainer } from "./styles";

interface IDevStarProps {
  stars: number;
}

export default function DevStars({ stars }: IDevStarProps) {
  return (
    <StarContainer>
      <MaterialIcons
        name="star"
        size={24}
        color={stars > 0 ? "#FFCA28" : "#fff"}
      />
      <MaterialIcons
        name="star"
        size={24}
        color={stars > 1 ? "#FFCA28" : "#fff"}
      />
      <MaterialIcons
        name="star"
        size={24}
        color={stars > 2 ? "#FFCA28" : "#fff"}
      />
      <MaterialIcons
        name="star"
        size={24}
        color={stars > 3 ? "#FFCA28" : "#fff"}
      />
      <MaterialIcons
        name="star"
        size={24}
        color={stars > 4 ? "#FFCA28" : "#fff"}
      />
    </StarContainer>
  );
}
