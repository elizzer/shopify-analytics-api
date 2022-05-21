import ShuffleIcon from '@mui/icons-material/Shuffle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

import './TopBar.css'

function TopBar({profile}){
    return(
        <div className='TopBar'>
            <div className='left' >
                <div className='c-p iconBack'>
                    <ShuffleIcon fontSize='large' className='c-p' />
                </div>
                <div className='c-p iconBack navs'>
                    Home
                </div>
                <div className='c-p iconBack navs'>
                    Home
                </div>
            </div>
            <div className='icons'>
                <div  className='c-p iconBack'>
                    <MessageIcon/>
                </div>
                <div  className='c-p iconBack'>
                    <NotificationsActiveIcon />
                </div>
                <div  className='c-p iconBack'>
                    <SettingsIcon />
                </div>
                <div  className='c-p iconBack'>
                    <HelpIcon/>
                </div>
                <div className='profile'>
                    <div className='c-p iconBack'>
                        {profile}
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default TopBar;