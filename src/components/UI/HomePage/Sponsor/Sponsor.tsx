import shefinds from "@/assets/shefinds.png";
import yahoo1 from "@/assets/yahoo-1.png";
import yahoo2 from "@/assets/yahoo-2.png";
import yahoo3 from "@/assets/yahoo-3.png";
import healthline from "@/assets/healthline.png";
import yahoo from "@/assets/yahoo.png";
import msn from "@/assets/msn.png";
import Image from "next/image";
import { Box } from "@mui/material";
const Sponsor = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        py: 5,
      }}
    >
      <Image src={shefinds} alt="shefinds" />
      <Image src={yahoo1} alt="shefinds" />
      <Image src={healthline} alt="shefinds" />
      <Image src={yahoo2} alt="shefinds" />
      <Image src={yahoo} alt="shefinds" />
      <Image src={msn} alt="shefinds" />
      <Image src={yahoo3} alt="shefinds" />
    </Box>
  );
};

export default Sponsor;
