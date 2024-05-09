import React from 'react';
import { useSelector } from "react-redux";
import DrawerAppBar from "../navbar/navbar";
import { Button, Container, Typography} from "@mui/material";
import { pdf } from 'pdfmake/build/pdfmake';
import { vfs } from 'pdfmake/build/vfs_fonts';
import Template1 from "../homepage/template1";
import Template2 from "../homepage/template2";
import Template3 from "../homepage/template3";
import Template4 from "../homepage/template4";
import { TEMPLATE_1, TEMPLATE_2, TEMPLATE_3, TEMPLATE_4 } from "../../constant/actiontype";

pdf.vfs = vfs;

function Previewpage() {
  const input = useSelector(state => state.updateinfos);
  const Template = useSelector(state => state.Sel_Temp);

  const generatePDF = () => {
    const docDefinition = {
      content: [
        { text: 'Resume Preview', style: 'header' },
        { 
          stack: [
            { 
              text: 'Content of Template 1',
              ...(Template === TEMPLATE_1 && { text: 'Content of Template 1' }),
              ...(Template === TEMPLATE_2 && { text: 'Content of Template 2' }),
              ...(Template === TEMPLATE_3 && { text: 'Content of Template 3' }),
              ...(Template === TEMPLATE_4 && { text: 'Content of Template 4' }),
            },
          ],
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10], // [left, top, right, bottom]
        },
      },
    };

    pdf.makeDocument(docDefinition).download('Resume.pdf');
  };

  return (
    <>
      <DrawerAppBar />
      <Container
        sx={{
          padding: {
            xs: "40px 20px",
            md: "60px 80px",
          },
        }}
        className="preview-container"
      >
        <Typography variant='h2'>Resume Preview</Typography>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: 2 }}>
          <Typography variant='h5'>Download your resume</Typography>
          <Button variant="contained" size="large" onClick={generatePDF}>Download</Button>
        </div>
      </Container>
    </>
  );
}

export default Previewpage;
