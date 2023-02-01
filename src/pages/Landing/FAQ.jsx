import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const question = ["Apakah tersedia pembelian tiket secara online", "Jika dari luar kota wajib pakai travel?", "Jam berapa desa wisata ini mulai buka?", "Apakah bisa membeli tiket di lokasi?"];
  return (
    <section>
      <div className="header justify-between mt-16 mb-8 flex flex-row">
        <h1 className="font-semibold text-lg">Pertanyaan Yang Sering Diajukan</h1>
      </div>
      <div className="accordion">
        {question.map((res) => {
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
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                <Typography sx={{ fontFamily: "poppins", fontWeight: 500 }}>{res}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: "poppins" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
};
export default FAQ;
