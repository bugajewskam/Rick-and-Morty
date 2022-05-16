import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

export default function TabsLabel({currentTab}: {currentTab: string}) {
  let navigate = useNavigate();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(`../${newValue}`)
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", align: "center" }}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        variant="fullWidth"
      >
        <Tab
          value="favourite"
          label="Favourite characters"
        />
        <Tab value="characters" label="All characters" />

      </Tabs>
    </Box>
  );
}


