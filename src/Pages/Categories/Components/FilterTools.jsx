import '../style.scss';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsIcon from '@mui/icons-material/Apps';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterTools({displayDirection, setDisplayDirection, handleChange, filter}) {
    return (
        <div className='filterTools'>
            <div className="itemsDisplay">
                <AppsIcon onClick={() => setDisplayDirection(true)} className={`${displayDirection && 'activDisplay'}`} />
                <FormatListBulletedIcon onClick={() => setDisplayDirection(false)} className={`${!displayDirection && 'activDisplay'}`} />
            </div>
            <FormControl sx={{ width: 300 }} size={'small'}>
                <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                <Select
                    // defaultValue={'newest'}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="Sort by"
                    onChange={handleChange}
                >
                    <MenuItem value={'newest'}>Newest</MenuItem>
                    <MenuItem value={'popular'} >Most popular</MenuItem>
                    <MenuItem value={'A-Z'}>Name: A to Z</MenuItem>
                    <MenuItem value={'Z-A'}>Name: Z to A</MenuItem>
                    <MenuItem value={'low-high'}>Price: low to high</MenuItem>
                    <MenuItem value={'high-low'}>Price: high to low</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
