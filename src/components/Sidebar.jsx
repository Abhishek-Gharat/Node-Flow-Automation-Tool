import "../index";
import { useState } from "react";
import { Box } from "@mui/system";
import { Divider, Tooltip } from "@mui/material";
import { flowData } from "../assets/FlowData";

const Sidebar = () => {
  const onDragStart = (event, nodeType, label, color) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("application/reactflow/label", label);
    event.dataTransfer.setData("application/reactflow/color", color);
    event.dataTransfer.effectAllowed = "move";
  };

  const [item, setItem] = useState(flowData);

  return (
    <Box className="static">
      <Divider />
      <Box
        mt={2}
        display="flex"
        justifyContent={`center`}
        flexDirection="column"
        alignItems={`center`}
      >
        {item.map((object, key) => (
          <Tooltip key={key} title={object?.title} placement="right" arrow>
            <Box
              draggable
              className={object.style}
              onDragStart={(event) =>
                onDragStart(event, object.type, object.text, object.color)
              }
            >
              <Box 
                key={key} 
                className={`text-center ${object.textStyle} ${object.type === 'decision' ? 'transform -rotate-45' : ''}`}
              >
                {object.text}
              </Box>
            </Box>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;