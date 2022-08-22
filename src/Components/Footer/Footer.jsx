import './style.scss';
import FooterItem from './FooterItem'
import { Link } from 'react-router-dom';
import { useStateContext } from '../../Context/Context'

export default function Footer() {
    const { theme } = useStateContext();

    return (
        <footer className={theme === 'dark' ? "backgroundDark" : undefined}>
            <div className='footerContent'>
                <div className="footerList">
                    <Link to={'/'}>
                        <h1 className='logo'>LOGO</h1>
                    </Link>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga corporis ex neaque nulla labor</p>
                </div>
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

                <div className="footerList">
                    <h3 className="footerItemTitle">SUBSCRIBE</h3>
                    <div className={theme === 'dark' ? 'boxShadowDark subscribe' : 'subscribe'}>
                        <input type="email" placeholder='Your email Address' />
                        <button>Submit</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit volu</p>
                </div>
            </div>
        </footer>
    )
}
