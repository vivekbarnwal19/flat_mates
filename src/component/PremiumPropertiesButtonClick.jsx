import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DelhiProperty from './DelhiProperty';
import GurgaonProperty from './GurgaonProperty';
import PuneProperty from './PuneProperty';
import BangloreProperty from './BangloreProperty';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function PremiumPropertiesButtonClick() {
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Delhi" {...a11yProps(0)} />
          <Tab label="Gurgaon" {...a11yProps(1)} />
          <Tab label="Pune" {...a11yProps(2)} />
          <Tab label="Banglore" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DelhiProperty />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <GurgaonProperty />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <PuneProperty />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <BangloreProperty />
      </CustomTabPanel>
    </Box>
    
  )
}

export default PremiumPropertiesButtonClick