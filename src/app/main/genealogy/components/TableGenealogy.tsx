import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { personalModels } from 'src/app/models/models'

function TableGenealogy( props: {dataPersonal: personalModels[]}) {
    return (
        <div>
            <TableContainer
                component={Paper}
                className="bg-white flex-initial bg-opacity-[0.65] w-full maxsm:h-[700px] sm:h-[1200px] overflow-x-scroll overflow-scroll overflow-y-scroll"
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    borderRight: "0.25px solid #570D0C",
                                    borderBottom: "0.25px solid #570D0C",
                                }}
                                align="center"
                            >
                                STT
                            </TableCell>
                            <TableCell
                                sx={{
                                    borderRight: "0.25px solid #570D0C",
                                    borderBottom: "0.25px solid #570D0C",
                                }}
                                align="center"
                            >
                                MÃ
                            </TableCell>
                            <TableCell
                                sx={{
                                    borderRight: "0.25px solid #570D0C",
                                    borderBottom: "0.25px solid #570D0C",
                                }}
                                align="center"
                            >
                                MỐI QUAN HỆ
                            </TableCell>
                            <TableCell
                                sx={{
                                    borderRight: "0.25px solid #570D0C",
                                    borderBottom: "0.25px solid #570D0C",
                                }}
                                align="center"
                            >
                                HỌ VÀ TÊN
                            </TableCell>
                            <TableCell
                                sx={{
                                    borderRight: "0.25px solid #570D0C",
                                    borderBottom: "0.25px solid #570D0C",
                                }}
                                align="center"
                            >
                                NĂM SINH
                            </TableCell>
                            <TableCell
                                sx={{
                                    borderRight: "0.25px solid #570D0C",
                                    borderBottom: "0.25px solid #570D0C",
                                }}
                                align="center"
                            >
                                NĂM MẤT
                            </TableCell>
                            <TableCell
                                sx={{
                                    borderRight: "0.25px solid #570D0C",
                                    borderBottom: "0.25px solid #570D0C",
                                }}
                                align="center"
                            >
                                HƯỞNG THỌ
                            </TableCell>
                            <TableCell
                                sx={{
                                    borderRight: "0.25px solid #570D0C",
                                    borderBottom: "0.25px solid #570D0C",
                                }}
                                align="center"
                            >
                                NGUYÊN QUÁN
                            </TableCell>
                            <TableCell
                                sx={{ borderBottom: "0.25px solid #570D0C" }}
                                align="center"
                            >
                                GHI CHÚ
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.dataPersonal.map((row) => (
                            <TableRow
                                key={row.index}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        borderBottom: "0.25px solid #570D0C",
                                    },
                                }}
                            >
                                <TableCell
                                    sx={{
                                        borderRight: "0.25px solid #570D0C",
                                        borderBottom: "0.25px dashed #570D0C",
                                    }}
                                    component="th"
                                    scope="row"
                                >
                                    {row.index}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderLeft: "0.25px solid #570D0C",
                                        borderRight: "0.25px solid #570D0C",
                                        borderBottom: "0.25px dashed #570D0C",
                                    }}
                                    align="left"
                                >
                                    {row.code}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderLeft: "0.25px solid #570D0C",
                                        borderRight: "0.25px solid #570D0C",
                                        borderBottom: "0.25px dashed #570D0C",
                                    }}
                                    align="left"
                                >
                                    {row.relationshipToHeadOfHousehold}
                                </TableCell>
                                
                                <TableCell
                                    sx={{
                                        borderLeft: "0.25px solid #570D0C",
                                        borderRight: "0.25px solid #570D0C",
                                        borderBottom: "0.25px dashed #570D0C",
                                    }}
                                    align="left"
                                >
                                    {row.fullName}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderLeft: "0.25px solid #570D0C",
                                        borderRight: "0.25px solid #570D0C",
                                        borderBottom: "0.25px dashed #570D0C",
                                    }}
                                    align="left"
                                >
                                    {row.yearOfBirth}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderLeft: "0.25px solid #570D0C",
                                        borderRight: "0.25px solid #570D0C",
                                        borderBottom: "0.25px dashed #570D0C",
                                    }}
                                    align="left"
                                >
                                    {row.yearOfDeath}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderLeft: "0.25px solid #570D0C",
                                        borderRight: "0.25px solid #570D0C",
                                        borderBottom: "0.25px dashed #570D0C",
                                    }}
                                    align="left"
                                >
                                    {row.longevity}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderLeft: "0.25px solid #570D0C",
                                        borderRight: "0.25px solid #570D0C",
                                        borderBottom: "0.25px dashed #570D0C",
                                    }}
                                    align="left"
                                >
                                    {row.hometown}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderLeft: "0.25px solid #570D0C",
                                        borderBottom: "0.25px dashed #570D0C",
                                    }}
                                    align="left"
                                >
                                    {row.notes}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableGenealogy