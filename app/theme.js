import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
    overrides: {
        MUIDataTableToolbar: {
            actions: {
                flex: '0 0 70%',
            },
        },
        MUIDataTableHeadRow: {
            root: {
                textTransform: 'capitalize',
            },
        },
        MUIDataTableBodyRow: {
            root: {
                '&:nth-of-type(odd)': {
                    backgroundColor: 'lightgray',
                },
            },
        },
        MuiTableCell: {
            root: {
                padding: 5,
                border: 'solid 1px #7d7d7d9e !important',
                textAlign: 'center',
                position: 'relative',
            },
        },
        MUIDataTableSelectCell: {
            fixedHeader: {
                position: 'unset',
            },
            // fixedHeader: {
            //     position: 'relative'
            //     },
            //     headerCell: {
            //     position: 'sticky'
            //     }
        },
        MUIDataTable: {
            paper: {
                display: 'flex',
                flex: 1,
                flexDirection: 'column',
                height: '100%',
            },
            responsiveScroll: {
                maxHeight: 'none',
            },
        },
        // MuiDrawer: {
        //     root: {
        //         zIndex: 1250,
        //     },
        // },
    },
    // palette: {
    //     type: 'dark',
    // },
});

export default muiTheme;
