import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import withStyles from '@material-ui/styles/withStyles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './index.css';


// const styles = () => ({
//   heading: { fontSize: '1.7em', fontWeight: 500, color: '#555' },
//   root: {
//     flexGrow: 1, background: '#FBFBFB', width: '100%', height: '100%', padding: '3em',
//   },
//   org: {
//     background: '#EAEAEA', padding: '0.4em 1em', color: '#555', marginLeft: '1em', fontSize: '0.9em',
//   },
//   addUser: { marginLeft: '1em', marginTop: '3em' },
//   confirm: { marginLeft: '4em', width: '40%' },
//   normal: { width: '40%', marginBottom: '2em' },
//   assign: { width: '85%', marginBottom: '5em' },
//   button: { background: '#4A98F7', color: 'white' },
//   avatar: {
//     background: '#A4E2DF', color: '#555', marginRight: '1em', fontWeight: 'lighter',
//   },
//   flex: { display: 'flex' },
// });

const ExamPlanning = ({ classes }) => {

const [Class, setClass] = useState('');
const [Section, setSection] = useState('');
const [Term, setTerm] = useState('');
const [ExamName, setExamName] = useState('');
const [Subject, setSubject] = useState('');


  return (
    <>
    
    <div style={
      {  flexGrow: 1, 
      background: '#FBFBFB', 
      width: '100%', 
      height: '100%',
      padding: '3em',}}>

      <span style={
        {
          fontSize: '1.7em', 
          fontWeight: 500, 
          color: '#555'
        }
      }>Exam Planning</span>
      <div style={{marginLeft: '1em', marginTop: '3em'}}>
        <p style={{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '16px',
          lineHeight: '139.69%',
          letterSpacing: '0.04em',
          paddingLeft: '60px',
          color: '#555555'}}>Class</p>
        <Autocomplete
          options={['1','2','3','4','5','6']}
          getOptionLabel={(option) => option}
          style={{ marginLeft: '4em', width: '40%' }}
          value={Class}
          onChange={(event, newValue) => setClass(newValue)}
          //disabled={fetching}
          renderInput={(param) => <TextField {...param} size="small" variant="filled" label="Enter Class" />}
        />
        <br/>
        <br/>



        <p style={{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '16px',
          lineHeight: '139.69%',
          letterSpacing: '0.04em',
          paddingLeft: '60px',
          color: '#555555'}}>Section</p>
        <Autocomplete
          options={['A','B','C','D','E']}
          getOptionLabel={(option) => option}
          style={{ marginLeft: '4em', width: '40%',}}
          value={Section || ''}
          onChange={(event, newValue) => setSection(newValue)}
          //disabled={fetching}
          renderInput={(param) => <TextField {...param} size="small" variant="filled" label="Enter Section" />}
        />
        <br/>
        <br/>

        
        <p style={{
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '16px',
          lineHeight: '139.69%',
          letterSpacing: '0.04em',
          paddingLeft: '60px',
          color: '#555555'}}>Term</p>
        <Autocomplete
          options={['term 1','term 2','terma 3']}
          getOptionLabel={(option) => option}
          style={{ marginLeft: '4em', width: '40%' }}
          value={Term || ''}
          onChange={(event, newValue) => setTerm(newValue)}
          //disabled={fetching}
          renderInput={(param) => <TextField {...param} size="small" variant="filled" label="Enter Term" />}
        />
        <br/>
        <br/>


        {/* div after term*/}
        <div>
          {/* term condition....... */}
          {Term !==''?(
            // Exam name div....
            <div>
              <p style={{fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '300',
                fontSize: '16px',
                lineHeight: '139.69%',
                letterSpacing: '0.04em',
                paddingLeft: '60px',
                color: '#555555'}}>ExamName</p>
              <Autocomplete
                options={['Monthly test 1','Monthly test 2','Monthly test 3', 'Subject Enrichment', 'Notebook']}
                getOptionLabel={(option) => option}
                style={{ marginLeft: '4em', width: '40%' }}
                value={ExamName || ''}
                onChange={(event, newValue) => setExamName(newValue)}
                //disabled={fetching}
                renderInput={(param) => <TextField {...param} size="small" variant="filled" label="Enter Exam Name" />}
              />
              <br/>
              <br/>
              
              {/* div of subject to date picker */}
              <div>
                {/* exam name condition */}
                { ExamName !==''?(
                  <div>
                    <p style={{
                      fontFamily: 'Roboto',
                      fontStyle: 'normal',
                      fontWeight: '300',
                      fontSize: '16px',
                      lineHeight: '139.69%',
                      letterSpacing: '0.04em',
                      paddingLeft: '60px',
                      color: '#555555'}}>Subject</p>
                    <Autocomplete 
                      options={['English', 'Language II', 'Mathematics', 'EVS', 'Language III']}
                      getOptionLabel={(option) => option}
                      style={{ marginLeft: '4em', width: '40%' }}
                      value={Subject || ''}
                      onChange={(event, newValue) => setSubject(newValue)}
                      //disabled={fetching}
                      renderInput={(param) => <TextField {...param} size="small" variant="filled" label="Enter Subject" />}
                    />
                    <br/>
                    <br/>
                    
                                  
                  </div>
                
                ):null}
                {/* exam name condition ending */}
              
              </div>
              {/* ending of div of subject to date picker.... */}

            </div>
            // exam name div ending....
           
          ):null}
            {/* term condition ending.... */}
          
        </div>
        {/* after term div ending.... */}
      </div>
    </div>
    </>
  );
};


export default ExamPlanning;
