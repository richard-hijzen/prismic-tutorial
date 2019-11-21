import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function NativeSelects({sortField, handleChange}) {
  
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
  
  
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
                value={sortField}
                onChange={handleChange('sortField')}
                labelWidth={labelWidth}
                inputProps={{
                    name: 'sortField',
                    id: 'outlined-age-native-simple',
                }}
                >
                <option value="" />
                <option value={1}>prijs oplopend</option>
                <option value={2}>prijs aflopend</option>
                <option value={3}>naam A-Z</option>
                <option value={4}>naam Z-A</option>
                </Select>
            </FormControl>
        </div>
  );
}