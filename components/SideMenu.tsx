"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BiRightArrow } from "react-icons/bi";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function SideMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 150,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        TabIndicatorProps={{
          sx: {
            left: 0,
            backgroundColor: "gray",
          },
        }}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderLeft: 1, borderColor: "divider", width: "400px" }}
      >
        <Tab
          className={`${value === 0 ? "bg-gray-100" : null}`}
          sx={{
            "&.Mui-selected": {
              color: "black",
            },
            fontSize: 10,
            textTransform: "capitalize",
          }}
          label="Fecundity"
          {...a11yProps(0)}
        />
        <Tab
          className={`${value === 1 ? "bg-gray-100" : null}`}
          sx={{
            "&.Mui-selected": {
              color: "black",
            },
            fontSize: 10,
            textTransform: "capitalize",
          }}
          label="Prixite"
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="ml-0">
          <span className=" text-gray-500 text-[16px] ">
            Frontend Developer
          </span>
          <span className="text-[16px]">@Fecundity</span>
          <p className=" text-gray-500 text-xs">March 2021 - April 2022</p>
          <div className="flex  mt-2 ">
            <span className="mt-1">
              <BiRightArrow size={8} />
            </span>
            <span className="text-[10px]  text-gray-500 pl-2">
              Led the development of a complex e-commerce platform using
              React.js, transforming wireframes and mockups into a fully
              functional and visually appealing user interface. Employed React
              Router for seamless navigation and Redux for efficient state
              management, resulting in a smooth and intuitive shopping
              experience for users.
            </span>
          </div>
          <div className="flex  mt-2">
            <span className="mt-1">
              <BiRightArrow size={8} />
            </span>
            <span className="text-[10px]  text-gray-500 pl-2">
              Integrated RESTful APIs to handle data retrieval and updates
              efficiently. Implemented asynchronous request handling using
              React's lifecycle methods and modern JavaScript features like
              async/await, resulting in optimized data flow and improved
              application performance.
            </span>
          </div>
          <div className="flex  mt-2">
            <span className="mt-1">
              <BiRightArrow size={8} />
            </span>
            <span className="text-[10px]  text-gray-500 pl-2">
              Implemented advanced features such as real-time notifications and
              interactive chat functionality using React and WebSocket
              technology. Leveraged Redux to manage real-time data updates and
              ensure a seamless and interactive user experience.
            </span>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="ml-0">
          <span className=" text-gray-500 text-[16px] ">
            Frontend Developer
          </span>
          <span className="text-[16px]">@Prixite</span>
          <p className=" text-gray-500 text-xs">Oct 2022 - Present</p>
          <div className="flex  mt-2">
            <span className="mt-1">
              <BiRightArrow size={8} />
            </span>
            <span className="text-[10px]  text-gray-500 pl-2">
              Developed and maintained highly responsive and user-friendly web
              applications using React.js, HTML5, CSS3, and JavaScript.
              Collaborated closely with the UI/UX team to transform wireframes
              and design concepts into functional components, ensuring a
              seamless user experience.
            </span>
          </div>
          <div className="flex  mt-2">
            <span className="mt-1">
              <BiRightArrow size={8} />
            </span>
            <span className="text-[10px]  text-gray-500 pl-2">
              Proactively identified and resolved performance bottlenecks by
              analyzing and optimizing React components, reducing rendering
              times and improving overall application speed. Implemented code
              refactoring and optimization techniques to enhance application
              performance.
            </span>
          </div>
          <div className="flex  mt-2">
            <span className="mt-1">
              <BiRightArrow size={8} />
            </span>
            <span className="text-[10px]  text-gray-500 pl-2">
              Stayed updated with the latest React.js trends, libraries, and
              tools, continuously improving technical skills and adopting best
              practices. Actively contributed to knowledge sharing sessions
              within the team, promoting a culture of learning and innovation.
            </span>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
