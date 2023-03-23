import { useState,useEffect } from 'react'; 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { } from '../Icon';
const Input = styled(MuiInput)`
  width: 42px;
`;
function Loadingbar() {
  
    const [value, setValue] = useState(JSON.parse(window.localStorage.getItem('value')));

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  useEffect(() => {
    setValue(JSON.parse(window.localStorage.getItem('value')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('value', value);
  }, [value]);
  return (
    <>
 <div><Box sx={{ width: 300 }}>
      <Typography id="input-slider" gutterBottom>
     
      </Typography>
      <Grid container spacing={2} alignItems="center">
      
        <Grid item xs>
          
          <Slider 
          
          style={{height:68}}
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            
          />
        
          
        </Grid>
        <Grid item>
          
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            
          />
        </Grid>
      </Grid>
    </Box></div>
    </>
  )
}

export default Loadingbar;