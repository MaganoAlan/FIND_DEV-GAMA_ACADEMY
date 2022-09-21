import { Text,Dimensions} from "react-native";
import { useSelector } from "react-redux";
import { IThemeState } from "../../types/IThemeState";

import {
  rating_day,
  rating_night,
  logo_footer,
} from "../../constants/resources";

import { PieChart } from "react-native-chart-kit";

import BackGround from "../../components/backGround";
import AppButton from "../../components/AppButton";

import { FooterLogo, StyledImage,Title, Promo,Perks, Label, ButtonsContainer } from "./styles";
import { ChartLineUp } from "phosphor-react-native";

export default function Rating(props) {
  const screenWidth = Dimensions.get("window").width;
  const randomNumber = Array.from({length: 5}, () => Math.floor(Math.random() *20));
  const PerksValue = Math.floor(Math.random() * 80) + 1
  const data = [
    {
      name: "⭐⭐⭐⭐⭐",
      total: randomNumber[0],
      color: "#cf0a48",
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
    {
      name: "⭐⭐⭐⭐",
      total: randomNumber[1],
      color: "#0f4cb4",
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
    {
      name: "⭐⭐⭐",
      total: randomNumber[2],
      color: "#36d824",
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
    {
      name: "⭐⭐",
      total: randomNumber[3],
      color: "#AEC215",
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
    {
      name: "⭐",
      total: randomNumber[4],
      color: "rgb(239, 125, 18)",
      legendFontColor: "#fff",
      legendFontSize: 15,
    },
  ];
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  
  const { currentTheme } = useSelector(
    (state: IThemeState) => state.themeState
  );

  const sourceImage = currentTheme == "light" ? rating_day : rating_night;

  return (
    <BackGround>
      <StyledImage source={sourceImage} />
      <Title>
      <Text style={{color:'white',fontSize:18}}>
        Avaliações
      </Text>
      <ChartLineUp  color="#fff" weight="light" size={24} />
      </Title>
      <Promo>
      <Text style={{color:'white',fontSize:16}}>
      Aqui suas avaliações são convertidas em cash. 
      Compartilhe essa ideia - Find Dev!
      </Text>
      </Promo>
      <PieChart
        data={data}
        width={screenWidth}
        height={180}
        chartConfig={chartConfig}
        accessor={"total"}
        backgroundColor={"transparent"}
        paddingLeft={"-1"}
        center={[10, 10]}
        absolute
      />
      <Perks>
      <Text style={{color:'white',fontSize:18}}>
        Recompensa:
      </Text>
      <Label >
      Douglas - Sua nova recompensa acaba de ser desbloqueada. Receba agora mesmo o valor de: R$ {PerksValue}
      </Label>
      <ButtonsContainer>
        <AppButton title="TRANSFERIR AGORA" onPress={()=>{alert("Transferido com sucesso")}}/>
        
      </ButtonsContainer>
      </Perks>
      <FooterLogo source={logo_footer} /> 
    </BackGround>
  );
}

