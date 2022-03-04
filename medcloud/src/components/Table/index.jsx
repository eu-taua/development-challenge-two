import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import del from "../../assets/delete.svg";
import edit from "../../assets/edit.svg";
import { CustomTableCell } from "../CustomTableCell";
import useData from "../../hooks/useData";
import useRequests from "../../hooks/useRequests";

export default function TableComponent() {
  const { changed, setOpenPopUp, setPopUpMode, formatedDate, setOpenModal } =
    useData();
  const { getPatients, setPatientId, setPatientInEditing } = useRequests();
  const [rows, setRows] = useState([]);

  useEffect(async () => {
    setRows(await getPatients());
  }, [changed]);

  const handleDelete = (id) => {
    setPatientId(id);
    setPopUpMode("delete");
    setOpenPopUp(true);
  };

  const handleEdit = (patient) => {
    setPatientInEditing(patient);
    setOpenModal(true);

    //abrir modal com os dados do paciente clicado
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: "2rem", maxHeight: "50rem" }}
    >
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: "1.6rem" }} align="left">
              <Box display="flex" alignItems="center">
                ID
              </Box>
            </TableCell>
            <TableCell style={{ fontSize: "1.6rem" }} align="left">
              <Box display="flex" alignItems="center">
                Paciente
              </Box>
            </TableCell>
            <TableCell style={{ fontSize: "1.6rem" }} align="left">
              <Box display="flex" alignItems="center">
                Data de Nasc.
              </Box>
            </TableCell>
            <TableCell style={{ fontSize: "1.6rem" }} align="left">
              Email
            </TableCell>
            <TableCell style={{ fontSize: "1.6rem" }} align="left">
              Endereço
            </TableCell>
            <TableCell style={{ fontSize: "1.6rem" }} align="left" />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 &&
            rows.map((row) => (
              <TableRow key={row.id} sx={{ fontSize: "1.2rem" }}>
                <CustomTableCell align="left">{row.id}</CustomTableCell>
                <CustomTableCell align="left">{row.name}</CustomTableCell>
                <CustomTableCell align="left">
                  {formatedDate(row.birthdate)}
                </CustomTableCell>
                <CustomTableCell align="left">{row.email}</CustomTableCell>
                <CustomTableCell align="left">{row.address}</CustomTableCell>

                <CustomTableCell align="left">
                  <Box display="flex">
                    <IconButton disableRipple onClick={() => handleEdit(row)}>
                      <img src={edit} alt="editar" />
                    </IconButton>
                    <IconButton
                      disableRipple
                      onClick={() => handleDelete(row.id)}
                    >
                      <img src={del} alt="excluir" />
                    </IconButton>
                  </Box>
                </CustomTableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
