import { Typography } from '@mui/material';
const Experience = () => {
  return (<div >
    <Typography 
    style = {{  
        textAlign: 'left', 
        fontFamily: 'monospace',
        marginLeft: 250,
        marginTop: 100,
        fontSize: 30,
        fontWeight: 'bold'
    }}>WORK EXPERIENCE</Typography>

    <Typography 
    style = {{  
        textAlign: 'left', 
        fontFamily: 'monospace',
        marginLeft: 250,
        fontSize: 20,
        fontWeight: 'bold'
    }}>Junior Developer</Typography>

<Typography 
    style = {{  
        textAlign: 'left', 
        fontFamily: 'monospace',
        marginLeft: 250,
        fontSize: 20,
    }}>ShoreCloud Corp., Part of Thermofisher (2020-present)</Typography>


    <Typography  
    id='body'
    style = {{  
        textAlign: 'left', 
        fontFamily: 'monospace',
        marginLeft: 300,
        fontSize: 20,
        marginTop: 30
    }}><ul>
        <li>Member of the Production Team. <br/></li>
        <li>Doing database updates, table creation and deletion. <br/></li>
        <li>Jquery script maintenance and creation. <br/></li>
        <li>Troubleshooting front-end and back-end issues. <br/></li>
        <li>Doing Development for new projects using React.js and Laravel. <br/></li>
        <li>Have worked also using Python for data transformations. <br/></li>
        <li>Worked in AWS services for the current project (data quality). <br/></li>
    </ul>
    
    </Typography>
</div>);
};
export default Experience;
