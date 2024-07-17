import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import DataObjectIcon from "@mui/icons-material/DataObject";
import { saveCanvas, toJSON } from "../../helpers";
import { Tooltip } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Mpopover from "../ReUsable/Mpopover";
import ConvertData from "../FlowComponents/ConverData";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { styled } from '@mui/material/styles';

const Layout = ({
  flowImageDownloadRef,
  children,
  jsonInput,
  setJsonInput,
  edges,
  nodes,
  convert,
  setEdges,
  setNodes,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorClrEl, setAnchorClrEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClrClick = (event) => {
    setAnchorClrEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClrClose = () => {
    setAnchorClrEl(null);
  };

  const handleRemoveAllNodes = () => {
    setEdges([]);
    setNodes([]);
    handleClrClose();
  };

  const AnimatedIcon = styled(AccountTreeIcon)(({ theme }) => ({
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translate(5px, -5px)',
    },
  }));

  const open = Boolean(anchorEl);
  const openToClear = Boolean(anchorClrEl);
  const id = open ? "simple-popover" : undefined;

  const renderPopover = () => {
    return (
      <Mpopover open={open} anchorEl={anchorEl} onClose={handleClose} id={id}>
        <ConvertData
          jsonInput={jsonInput}
          setJsonInput={setJsonInput}
          convert={convert}
        />
      </Mpopover>
    );
  };

  const renderClearPopover = () => {
    return (
      <Mpopover
        open={openToClear}
        anchorEl={anchorClrEl}
        onClose={handleClrClose}
        id={id}
      >
        <Box p="40px">
          <h1>Are you sure you want to clear the canvas?</h1>
          <Box mt="20px">
            <Button
              variant="outlined"
              onClick={handleRemoveAllNodes}
              color="error"
              style={{ marginRight: "10px" }}
            >
              Yes
            </Button>

            <Button
              variant="outlined"
              onClick={handleClrClose}
              color="error"
              style={{ marginRight: "10px" }}
            >
              No
            </Button>
          </Box>
        </Box>
      </Mpopover>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white", color: "black" }}>
        <Toolbar>
          {open && renderPopover()}
          {openToClear && renderClearPopover()}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, bgcolor: "rgba(133, 255, 51, 0.25)" }}
          >
            <AnimatedIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#333", // Dark gray color
              fontWeight: 'bold',
              fontFamily: 'Brush Script MT',
              fontSize: '2rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              // Add any other styles you prefer
            }}
          >
            Node Flow Automation
          </Typography>
          <Box mr="8px">
            <Tooltip
              title={`Download as an Image/png`}
              placement="bottom"
              arrow
            >
              <Button
                variant="outlined"
                onClick={() => saveCanvas(flowImageDownloadRef)}
                color="inherit"
                sx={{ bgcolor: "rgba(133, 255, 51, 0.25)" }}
              >
                <FileDownloadIcon />
              </Button>
            </Tooltip>
          </Box>
          <Box mr="8px">
            <Tooltip title={`Download as json`} placement="bottom" arrow>
              <Button
                variant="outlined"
                onClick={() => toJSON([...edges, ...nodes])}
                color="inherit"
                sx={{ bgcolor: "rgba(133, 255, 51, 0.25)" }}
              >
                <DataObjectIcon />
              </Button>
            </Tooltip>
          </Box>
          <Box mr="8px">
            <Tooltip
              title={`Paste your json to draw the diagram`}
              placement="bottom"
              arrow
            >
              <Button
                variant="outlined"
                onClick={handleClick}
                color="inherit"
                sx={{ bgcolor: "rgba(133, 255, 51, 0.25)" }}
              >
                <CloudUploadIcon />
              </Button>
            </Tooltip>
          </Box>
          <Box mr="8px">
            <Tooltip
              title={`Clear all data from the canvas`}
              placement="bottom"
              arrow
            >
              <Button
                variant="outlined"
                onClick={handleClrClick}
                color="inherit"
                sx={{ bgcolor: "rgba(133, 255, 51, 0.25)" }}
              >
                <ClearAllIcon />
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};

export default Layout;
