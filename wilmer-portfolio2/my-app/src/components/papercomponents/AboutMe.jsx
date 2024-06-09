import * as React from 'react';
import { Typography } from '@mui/material';

const AboutMe = ({aboutmestatus}) => {

    return(<div >
            <Typography 
            style = {{  
                textAlign: 'left', 
                fontFamily: 'monospace',
                marginLeft: 250,
                marginTop: 50,
                fontSize: 30,
                fontWeight: 'bold'
            }}>WILMER MENDEZ</Typography>

            <Typography 
            style = {{  
                textAlign: 'left', 
                fontFamily: 'monospace',
                marginLeft: 250,
                fontSize: 20,
            }}>Developer</Typography>

            <Typography  
            id='body'
            style = {{  
                textAlign: 'left', 
                fontFamily: 'monospace',
                marginLeft: 250,
                fontSize: 20,
                marginTop: 30
            }}>Hi, I am a passionate programmer with four years of experience in the industry, <br/>
            I graduated in Mechatronics but chose programming as my career because I love coding. <br/>
            My strengths include being a fast learner and highly adaptable to new technologies. <br/>
            My main programming languages are JavaScript, PHP, and MySQL. <br/>
            In addition to programming, my hobbies include writing, gaming, and watching movies. <br/>
            </Typography>

            <Typography 
            style = {{  
                textAlign: 'left', 
                fontFamily: 'monospace',
                marginLeft: 250,
                fontSize: 25,
                marginTop: 30,
                fontWeight: 'bold'
            }}>Education</Typography>

            <Typography 
            style = {{  
                textAlign: 'left', 
                fontFamily: 'monospace',
                marginLeft: 250,
                fontSize: 20,
            }}>Bachelor of Technology Major in Mechatronics Technology (2013-2019)<br/>
            Technological University of the Philippines Visayas
            </Typography>

            <Typography 
            style = {{  
                textAlign: 'left', 
                fontFamily: 'monospace',
                marginLeft: 250,
                fontSize: 25,
                marginTop: 30,
                fontWeight: 'bold'
            }}>Languages</Typography>

            <Typography 
            style = {{  
                textAlign: 'left', 
                fontFamily: 'monospace',
                marginLeft: 250,
                fontSize: 20,
            }}>English, Tagalog<br/>

            </Typography>

        </div>
    )
}
export default AboutMe;