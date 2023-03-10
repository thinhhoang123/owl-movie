import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './BasicTabs.module.scss';
import { IBasicTabsProps, TabPanelProps } from './BasicTabsModel';

export default function BasicTabs({
  defaultValue,
  tabs,
  onChange,
}: IBasicTabsProps) {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    onChange(newValue);
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs?.map((tab) => {
            return (
              <Tab label={tab.label} {...a11yProps(tab.id)} key={tab.id} />
            );
          })}
        </Tabs>
      </Box>
      {tabs?.map((tab, index) => {
        if (!tab.describe) return;
        return (
          <TabPanel value={value} index={index}>
            {tab.describe}
          </TabPanel>
        );
      })}
    </Box>
  );
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
