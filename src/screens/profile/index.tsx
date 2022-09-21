import { useState, useEffect } from "react";
import { Linking } from "react-native";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { IThemeState } from "../../types/IThemeState";
import { IProfile } from "../../types";
import { profile_day, profile_night } from "../../constants/resources";
import BackGround from "../../components/backGround";
import ThemeSwitch from "../../components/themeSwitch";
import AppButton from "../../components/AppButton";
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
import { useDispatch } from "react-redux";
import {
  addFavorite,
  existsInFavorites,
  removeFavorite,
} from "../../store/modules/Favorites.store";
import { IFavoritesState } from "../../types/IFavoritesState";

interface IProfileProps {
  profile: IProfile;
}

export default function Profile(props) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );
  const { favorites, isFavorite } = useSelector(
    (state: IFavoritesState) => state.favoritesState
  );

  console.log("isFavorite", isFavorite);

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const { profile }: IProfileProps = props.route.params;
  const sourceImage = currentTheme == "light" ? profile_day : profile_night;
  const dispatch = useDispatch();

  const handlePressLinkedin = () => {
    Linking.openURL(profile.linkedinUrl);
  };

  const handlePressGithub = () => {
    Linking.openURL(profile.gitHubUrl);
  };

  const handlePressGoogle = () => {
    Linking.openURL(`mailto:${profile.email}`);
  };

  const handlePressResume = () => {
    setTitle("Resume");
    setText("Starting download now...");
    setShowModal(true);
  };

  const handlePressManageFavoriteProfiles = () => {
    //TODO: FAVORITAR DEV - REQUISITO BÁSICO!!!!

    if (isFavorite) {
      dispatch(removeFavorite(profile));
      console.log(`Dev ${profile.name} removido de favoritos!`);
      props.navigation.goBack();

      return;
    }

    dispatch(addFavorite(profile));
    props.navigation.goBack();
    return;
  };

  const handlePressInvite = () => {
    setTitle("Invite");
    setText("Invite sent with success");
    setShowModal(true);
  };

  //? aplicar um useEffect para ver se o dev é favorito ou não

  useEffect(() => {
    dispatch(existsInFavorites(profile));
  }, [profile]);

  return (
    <BackGround>
      <StyledImage source={sourceImage} />
      <ThemeSwitch />
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
      <DevNameText>{profile.fullName}</DevNameText>
      <DevInfoContainer>
        <DevInfo>{`Name: ${profile.name}`}</DevInfo>
        <DevInfo>{`Surname: ${profile.surname}`}</DevInfo>
        <DevInfo>{`Age: ${profile.age} yrs`}</DevInfo>
        <DevInfo>{`Stacks: ${profile.stack.label}`}</DevInfo>
        <DevInfo>{profile.experience}</DevInfo>
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
        <AppButton title="RESUME" onPress={handlePressResume} />
        <ButtonsInLineContainer>
          <ButtonContainer>
            <AppButton
              title={`${isFavorite ? "UNFAVORITE" : "FAVORITE"}`}
              onPress={handlePressManageFavoriteProfiles}
            />
          </ButtonContainer>
          <ButtonContainer>
            <AppButton title="INVITE" onPress={handlePressInvite} />
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
