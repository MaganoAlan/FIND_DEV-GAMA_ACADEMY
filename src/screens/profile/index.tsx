import { useState } from "react";
import { Linking } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { IThemeState } from "../../types/IThemeState";
import { IProfile } from "../../types";
import { getRandomNumber } from "../../utils";
import { cityDay, cityNight } from "../../constants/resources";
import BackGround from "../../components/backGround";
import Button from "../../components/button";
import SocialIcons from "../../components/socialIcons";
import Footer from "../../components/footer";
import OkModal from "../../components/okModal";
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
  ButtonContainer,
} from "./styles";

interface IProfileProps {
  profile: IProfile;
}

export default function Profile(props) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const { profile }: IProfileProps = props.route.params;
  const sourceImage = currentTheme == "light" ? cityDay : cityNight;

  const splitedName = profile.name.split(" ");

  const getName = (): string => splitedName[0];
  const getSurname = (): string => splitedName[splitedName.length - 1];

  const getRandomExperience = (): string => {
    let experience = getRandomNumber(1, 20);

    if (experience === 1) return "Experience: 1 yr";

    return `Experience: ${experience >= 5 ? "5 yrs +" : `${experience} yrs`}`;
  };

  const handlePressLinkedin = () => {
    Linking.openURL("https://www.linkedin.com/");
  };

  const handlePressGithub = () => {
    Linking.openURL("https://github.com/");
  };

  const handlePressGoogle = () => {
    Linking.openURL(
      `mailto:${getName().toLocaleLowerCase()}.${getSurname().toLocaleLowerCase()}@gmail.com`
    );
  };

  const handlePressResume = () => {
    setTitle("Resume");
    setText("Starting download now...");
    setShowModal(true);
  };

  const handlePressManageFavoriteProfiles = () => {
    //TODO: FAVORITAR DEV - REQUISITO BÁSICO!!!!

    if (!profile.isFavorite) {
      //dispatch(favoriteDev(profile));
      return;
    }

    //dispatch(unFavoriteDev(profile.id));
    return;
  };

  const handlePressInvite = () => {
    setTitle("Invite");
    setText("Invite sent with success");
    setShowModal(true);
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
          <ButtonContainer>
            <Button
              title={`${profile.isFavorite ? "UNFAVORITE" : "FAVORITE"}`}
              onPress={handlePressManageFavoriteProfiles}
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button title="INVITE" onPress={handlePressInvite} />
          </ButtonContainer>
        </ButtonsInLineContainer>
      </ButtonsContainer>
      <Footer />
      <OkModal
        showModal={showModal}
        title={title}
        text={text}
        setShowModal={setShowModal}
      />
    </BackGround>
  );
}
