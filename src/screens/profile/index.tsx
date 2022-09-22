import { useState, useEffect } from "react";
import { Linking } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import {
  addFavorite,
  existsInFavorites,
  removeFavorite,
} from "../../store/modules/Favorites.store";

import { IFavoritesState } from "../../types/IFavoritesState";
import { IThemeState } from "../../types/IThemeState";
import { IProfile } from "../../types";

import BackGround from "../../components/backGround";
import ThemeSwitch from "../../components/themeSwitch";
import AppButton from "../../components/AppButton";
import DevStars from "../../components/devStars";
import SocialIcons from "../../components/socialIcons";
import OkModal from "../../components/okModal";
import BackButton from "../../components/BackButton";

import {
  profile_day,
  profile_night,
  logo_footer,
} from "../../constants/resources";

import {
  StyledImage,
  AvatarImage,
  DevNameText,
  DevInfoContainer,
  DevInfo,
  SocialIconsContainer,
  ButtonsContainer,
  ButtonsInLineContainer,
  ButtonContainer,
  FooterLogo,
} from "./styles";

interface IProfileProps {
  profile: IProfile;
}

export default function Profile(props) {
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );
  const { isFavorite } = useSelector(
    (state: IFavoritesState) => state.favoritesState
  );

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
    setTitle("Currículo");
    setText("Iniciando download agora...");
    setShowModal(true);
  };

  const handlePressManageFavoriteProfiles = () => {
    if (isFavorite) {
      dispatch(removeFavorite(profile));
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

  useEffect(() => {
    dispatch(existsInFavorites(profile));
  }, [profile]);

  return (
    <BackGround>
      <BackButton navigation={() => props.navigation.goBack()} />
      <StyledImage source={sourceImage} />
      <ThemeSwitch />
      <AvatarImage source={{ uri: profile.photo }} />
      <DevStars stars={profile?.stars ?? 0} />
      <DevNameText>{profile.fullName}</DevNameText>
      <DevInfoContainer>
        <DevInfo>{`Nome: ${profile.name}`}</DevInfo>
        <DevInfo>{`Sobrenome: ${profile.surname}`}</DevInfo>
        <DevInfo>{`Idade: ${profile.age} anos`}</DevInfo>
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
        <AppButton title="CURRÍCULO" onPress={handlePressResume} />
        <ButtonsInLineContainer>
          <ButtonContainer>
            <AppButton
              title={`${isFavorite ? "DESFAVORITAR" : "FAVORITAR"}`}
              onPress={handlePressManageFavoriteProfiles}
            />
          </ButtonContainer>
          <ButtonContainer>
            <AppButton title="CONVIDAR" onPress={handlePressInvite} />
          </ButtonContainer>
        </ButtonsInLineContainer>
      </ButtonsContainer>
      <FooterLogo source={logo_footer} alt="logo" />
      <OkModal
        showModal={showModal}
        title={title}
        text={text}
        setShowModal={setShowModal}
      />
    </BackGround>
  );
}
