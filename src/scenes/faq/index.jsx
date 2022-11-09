import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import { tokens } from '../../Theme/theme';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Queation Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            1. An Important Question.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          quisquam fuga sint modi, exercitationem ex nihil voluptatum.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            2. An Important Question.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          quisquam fuga sint modi, exercitationem ex nihil voluptatum.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            3. An Important Question.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          quisquam fuga sint modi, exercitationem ex nihil voluptatum.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            4. An Important Question.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          quisquam fuga sint modi, exercitationem ex nihil voluptatum.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.greenAccent[500]}>
            5. An Important Question.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          quisquam fuga sint modi, exercitationem ex nihil voluptatum.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
