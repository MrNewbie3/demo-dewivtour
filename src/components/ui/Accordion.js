import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
const AccordionComps = (props) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreRoundedIcon fontSize="large" className="text-black" />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography
          sx={{
            fontWeight: "700",
            fontFamily: "poppins",
            fontSize: 24,
          }}
        >
          {props.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            fontFamily: "poppins",
          }}
        >
          {props.content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
export default AccordionComps;
