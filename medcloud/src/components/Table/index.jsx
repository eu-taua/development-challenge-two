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
import Toastify from "../../helpers/Toastify";
import { CustomTableCell } from "../CustomTableCell";

export default function TableComponent({ changed, setChanged }) {
  const [rows, setRows] = useState([]);

  useEffect(async () => {
    try {
      const result = await fetch(
        "https://kklmlkcau0.execute-api.sa-east-1.amazonaws.com/prod/patients"
      );
      const patients = await result.json();
      setRows(patients.body);
    } catch (error) {
      Toastify(error.message);
    }
  }, [changed]);

  const user = {
    name: "mario",
    birthdate: "2000-12-20",
    email: "mail@mail.com",
    address: "adress",
  };

  const handleDelete = async (id) => {
    const result = await fetch(
      "https://kklmlkcau0.execute-api.sa-east-1.amazonaws.com/prod/patients",
      {
        method: "DELETE",
        body: JSON.stringify({ id }),
      }
    );
    setChanged(result);
    Toastify("Paciente Excluido");
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
                  {row.birthdate.substring(0, row.birthdate.indexOf("T"))}
                </CustomTableCell>
                <CustomTableCell align="left">{row.email}</CustomTableCell>
                <CustomTableCell align="left">{row.address}</CustomTableCell>

                <CustomTableCell align="left">
                  <Box display="flex">
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
