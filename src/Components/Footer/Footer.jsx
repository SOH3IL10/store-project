import './style.scss';
import FooterItem from './FooterItem'
import { Link } from 'react-router-dom';
import { useStateContext } from '../../Context/Context'
import Grid from '@mui/material/Grid';

export default function Footer() {
    const { theme } = useStateContext();

    return (
        <footer className={theme === 'dark' ? "backgroundDark" : undefined}>
            <Grid container spacing={2} className='footerContent'>
                <Grid item xs={12} sm={12} md={4} lg={2} className="footerList">
                    <Link to={'/'}>
                        <h1 className='logo'>LOGO</h1>
                    </Link>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga corporis ex neaque nulla labor</p>
                </Grid>
                <FooterItem title={'POLICY INFO'}
                    items={[
                        'Privacy Policy',
                        'Terms of Sale',
                        'Tersm of Use',
                        'Report About & Takedown Policy',
                        'CSR Policy'
                    ]}
                />

                <FooterItem title={'COMPANY'}
                    items={[
                        'About Us',
                        'Blog',
                        'Sitemap',
                        'FAQ',
                        'Contact Us'
                    ]}
                />

                <FooterItem title={'BUSINESS'}
                    items={[
                        'Sell on Shopio',
                        'Advertise on Shopio',
                        'Media Enquiries',
                        'Be an Afflliate',
                        'Deal of the Day'
                    ]}
                />

                <Grid item xs={12} sm={12} md={8} lg={4} className="footerList">
                    <h3 className="footerItemTitle">SUBSCRIBE</h3>
                    <div className={theme === 'dark' ? 'boxShadowDark subscribe' : 'subscribe'}>
                        <input type="email" placeholder='Your email Address' />
                        <button>Submit</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit volu</p>
                </Grid>
            </Grid>
        </footer>
    )
}
