import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

export default function NativeSelects() {
    const [state, setState] = React.useState({
      age: '',
      name: 'hai',
    });
  
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
  
    const handleChange = name => event => {
      setState({
        ...state,
        [name]: event.target.value,
      });
    };
  
    return (
        <div style={{margin: 30,
                    display: `flex`,
                    justifyContent: `flex-end`}}
        >
            <FormControl variant="outlined" className="sorter">
                <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
                Sorteer
                </InputLabel>
                <Select
                native
                value={state.age}
                onChange={handleChange('age')}
                labelWidth={labelWidth}
                inputProps={{
                    name: 'sorteer',
                    id: 'outlined-age-native-simple',
                }}
                >
                <option value="" />
                <option value={10}>prijs aflopend</option>
                <option value={20}>prijs oplopend</option>
                <option value={30}>naam A-Z</option>
                <option value={30}>naam Z-A</option>
                </Select>
            </FormControl>
        </div>
  );
}