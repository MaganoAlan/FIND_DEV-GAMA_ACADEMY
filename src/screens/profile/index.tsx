import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { IThemeState } from "../../types/IThemeState";
import { IProfile } from "../../types";
import { cityDay, cityNight } from "../../constants/resources";
import BackGround from "../../components/backGround";
import Button from "../../components/button";
import SocialIcons from "../../components/socialIcons";
import Footer from "../../components/footer";
import {
  StyledImage,
  AvatarImage,
  StarContainer,
  DevNameText,
  DevInfoContainer,
  DevInfo,
  SocialIconsContainer,
  ButtonsContainer,
  ButtonsInLineContainer,
  ButtonsInLineContainer2,
} from "./styles";

interface IProfileProps {
  profile: IProfile;
}

export default function Profile(props) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const { profile }: IProfileProps = props.route.params;
  const sourceImage = currentTheme == "light" ? cityDay : cityNight;

  const splitedName = profile.name.split(" ");

  const getName = (): string => splitedName[0];
  const getSurname = (): string => splitedName[splitedName.length - 1];

  const getRandomNumber = (min: number, max: number): number =>
    Math.floor(
      Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)
    );

  const getRandomExperience = (): string => {
    let experience = getRandomNumber(1, 20);

    if (experience === 1) return "Experience: 1 yr";

    return `Experience: ${experience >= 5 ? "5 yrs +" : `${experience} yrs`}`;
  };

  const handlePressLinkedin = () => {
    //TODO: Fazer alguma coisa
    console.log("Clicou icone linkedin");
  };

  const handlePressGithub = () => {
    //TODO: Fazer alguma coisa
    console.log("Clicou icone Github");
  };

  const handlePressGoogle = () => {
    //TODO: Fazer alguma coisa
    console.log("Clicou icone Google");
  };

  const handlePressResume = () => {
    //TODO: Fazer alguma coisa
    console.log("Clicou botão RESUME");
  };

  const handlePressFavorite = () => {
    //TODO: Fazer alguma coisa
    console.log("Clicou botão FAVORITE");
  };

  const handlePressInvite = () => {
    //TODO: Fazer alguma coisa
    console.log("Clicou botão INVITE");
  };

  return (
    <BackGround>
      <StyledImage source={sourceImage} />
      <AvatarImage source={{ uri: profile.photo }} />
      <StarContainer>
        <MaterialIcons
          name="star"
          size={24}
          color={profile?.stars > 0 ? "#FFCA28" : "#fff"}
        />
        <MaterialIcons
          name="star"
          size={24}
          color={profile?.stars > 1 ? "#FFCA28" : "#fff"}
        />
        <MaterialIcons
          name="star"
          size={24}
          color={profile?.stars > 2 ? "#FFCA28" : "#fff"}
        />
        <MaterialIcons
          name="star"
          size={24}
          color={profile?.stars > 3 ? "#FFCA28" : "#fff"}
        />
        <MaterialIcons
          name="star"
          size={24}
          color={profile?.stars > 4 ? "#FFCA28" : "#fff"}
        />
      </StarContainer>
      <DevNameText>{profile.name}</DevNameText>
      <DevInfoContainer>
        <DevInfo>{`Name: ${getName()}`}</DevInfo>
        <DevInfo>{`Surname: ${getSurname()}`}</DevInfo>
        <DevInfo>{`Age: ${getRandomNumber(18, 50)} yrs`}</DevInfo>
        <DevInfo>{`Stacks: ${profile.stack.label}`}</DevInfo>
        <DevInfo>{getRandomExperience()}</DevInfo>
      </DevInfoContainer>
      <SocialIconsContainer>
        <SocialIcons
          color={"#D3B81A"}
          onPressLinkedin={handlePressLinkedin}
          onPressGithub={handlePressGithub}
          onPressGoogle={handlePressGoogle}
        />
      </SocialIconsContainer>
      <ButtonsContainer>
        <Button title="RESUME" onPress={handlePressResume} />
        <ButtonsInLineContainer>
          <ButtonsInLineContainer2>
            <Button title="FAVORITE" onPress={handlePressFavorite} />
          </ButtonsInLineContainer2>
          <ButtonsInLineContainer2>
            <Button title="INVITE" onPress={handlePressInvite} />
          </ButtonsInLineContainer2>
        </ButtonsInLineContainer>
      </ButtonsContainer>

      <Footer />
    </BackGround>
  );
}
