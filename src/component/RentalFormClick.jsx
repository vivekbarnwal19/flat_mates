import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import Typography from '@mui/material/Typography';
import OwnerDetail from '../component/OwnerDetail';
import TenantDetails from './TenantDetails';
import PropertyDetail from './PropertyDetail';
import AgreementTerms from './AgreementTerms';
import Annexures from './Annexures';

function TabPanel(props) {
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
          <Box sx={{ p: 3 }}>
            
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Box>
            <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' , height: 224}}>
                <Tabs orientation="vertical" value={value} onChange={handleChange} aria-label="Vertical tabs example"
                >
                    <Tab icon={<Box> <CheckCircleTwoToneIcon /> Owner Details </Box>}  {...a11yProps(0)} />
                    <Tab icon={<Box> <CheckCircleTwoToneIcon /> Tenant Details </Box>} {...a11yProps(1)} />
                    <Tab icon={<Box> <CheckCircleTwoToneIcon /> Property Details </Box>} {...a11yProps(2)} />
                    <Tab icon={<Box> <CheckCircleTwoToneIcon /> Agreement Terms </Box>} {...a11yProps(3)} />
                    <Tab icon={<Box> <CheckCircleTwoToneIcon /> Annexures </Box>} {...a11yProps(4)} />
                </Tabs>
            </Box>


            <TabPanel value={value} index={0}>
                <OwnerDetail/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TenantDetails />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <PropertyDetail />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <AgreementTerms />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Annexures />
            </TabPanel>

        </Box>
    );
}
