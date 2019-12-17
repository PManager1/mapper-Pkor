/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Playground() {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: option => option.provider+' '+option.year,
  };

  const flatProps = {
    options: top100Films.map(option => option.provider),
  };

  const [value, setValue] = React.useState(null);

  return (
    <div style={{ width: 800 }}>
      <Autocomplete
        {...defaultProps}
        id="disable-open-on-focus"
        disableOpenOnFocus
        renderInput={params => (
          <TextField {...params} label="Type Mapper/company/provider/Client/paygroup name" margin="normal" fullWidth />
        )}
      />
     
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { provider: 'BlackBaud', year: 1994 },
  { provider: 'Shawshank Redemption', year: 1972 },
  { provider: 'The Godfather: Part II', year: 1974 },
  { provider: 'The Dark Knight', year: 2008 },
  { provider: '12 Angry Men', year: 1957 },
  { provider: "Schindler's List", year: 1993 },
  { provider: 'Pulp Fiction', year: 1994 },
  { provider: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { provider: 'The Good, the Bad and the Ugly', year: 1966 },
  { provider: 'Fight Club', year: 1999 },
  { provider: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { provider: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { provider: 'Forrest Gump', year: 1994 },
  { provider: 'Inception', year: 2010 },
  { provider: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { provider: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { provider: 'Goodfellas', year: 1990 },
  { provider: 'The Matrix', year: 1999 },
  { provider: 'Seven Samurai', year: 1954 },
];
