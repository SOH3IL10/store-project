import './style.scss';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link } from 'react-router-dom';

export default function CustomSeparator({ steps, currentStep }) {

    return (
        <Breadcrumbs className='breadcrumbs'
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
        >
            {
                steps?.map((step, index) => {
                    return (
                        <Link key={index + 1} color="inherit" to={step.href}>
                            {step.title}
                        </Link>
                    )
                })
            }
            <Typography key={steps?.length + 1} color="text.primary">
                {currentStep}
            </Typography>
        </Breadcrumbs>
    )
}
