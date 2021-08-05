import React, { Component } from "react";
import {Button,Grid,Box, Paper, Typography}  from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { TextField } from "@material-ui/core";
import { RadioGroup, Radio } from "@material-ui/core";
import { FormControlLabel, FormGroup } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: "NULL", gender:"NULL", checkedA:true, checkedB:true}
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleSubmit1 = this.handleSubmit1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this);
      this.handleSubmit2 = this.handleSubmit2.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('You have selected: '+ this.state.value);
    }
    handleChange1(event) {
        this.setState({gender: event.target.value});
      }
    handleSubmit1(event) {
        alert('You have selected: '+ this.state.gender);
      }
    handleChange2(event) {
        this.setState({checkedA: !this.state.checkedA});
      }
    handleChange3(event) {
        this.setState({checkedB: !this.state.checkedB});
      }
    handleSubmit2(event) {
        alert('You have selected Internship: '+ this.state.checkedA + ' and Placement: '+this.state.checkedB);
      }
    render() {
      return (
        <div classs="position">
            <Grid container spacing={2} alignContent="center">
                <Grid item lg={4}>
                        <Box boxShadow={3}  height={300} p={2} bgcolor="#82E0AA ">
                             <Typography variant="h5">Select</Typography>
                             <form onSubmit={this.handleSubmit}>
                             <select onChange={this.handleChange}>
                             <option>Select Courses</option>
                             <option value="HTML">HTML</option> 
                             <option value="CSS">CSS</option> 
                             <option value="JavaScript">JavaScript</option> 
                             <option value="ReactJs">ReactJs</option> 
                             <option value="NodeJs">NodeJs</option> 
                             <option value="AngularJs">AngularJs</option> 
                             <option value="Data Structure">Data Structure</option>
                             <option value="Algorithms">Algorithms</option> 
                             </select>
                             <div>
                             <Button color="#ABB2B9" size="small" variant="contained" type="submit">Click me</Button> 
                             </div>
                             </form>
                        </Box>
                </Grid>
                <Grid item lg={4} alignContent="center">
                    <Paper>
                        <Box boxShadow={3}  height={300} p={2} bgcolor="#ABB2B9">
                        <Typography variant="h5">Radio</Typography>
                        <form onSubmit={this.handleSubmit1}>
                        <RadioGroup onChange={this.handleChange1}>
                            <Typography align="left" variant="h6">Select Gender</Typography>
                            <FormControlLabel value="Male" control ={<Radio/>} label="Male" />
                            <FormControlLabel value="Female" control ={<Radio/>} label="Female" />
                        </RadioGroup>
                        <Button color="#ABB2B9" size="small" variant="contained" type="submit">Click me</Button>
                        </form>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item lg={4}>
                    <Paper>
                        <Box boxShadow={3}  height={300} p={2} bgcolor="#F8C471">
                        <Typography variant="h6">CheckBox</Typography>
                        <form onSubmit={this.handleSubmit2}>
                           <FormGroup>
                            <Typography align="left" variant="h6">MyHashCode</Typography>
                            <FormControlLabel  control={<Checkbox checked={this.state.checkedA} onChange={this.handleChange2} name="checkedA" />} label="Internship" />
                            <FormControlLabel  control={<Checkbox checked={this.state.checkedB} onChange={this.handleChange3} name="checkedB" />}label="Placement" />
                            </FormGroup>
                           <Button color="#ABB2B9" size="small" variant="contained" type="submit">Click me</Button>
                        </form>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
      );
    }
}
export default NameForm