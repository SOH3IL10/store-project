import './style.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Copyright() {
    return (
        <div className={'copyright'}>
            <p>Copyright 2022. All Rights Reserved</p>
            <ul>
                <li><a href="https://github.com/SOH3IL10" target={'_blank'} ><GitHubIcon /></a></li>
                <li><a href="https://www.linkedin.com/in/soheil-rashno" target={'_blank'} ><LinkedInIcon color={'primary'} /></a></li>
            </ul>
        </div>
    )
}
