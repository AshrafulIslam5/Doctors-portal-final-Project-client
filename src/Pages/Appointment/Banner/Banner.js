import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Banner.css';

const Banner = ({date, setDate}) => {
    return (
        <div>
            <div className="hero min-h-screen Myoverlay">
                <div className="hero-content flex-col lg:flex-row-reverse px-5 md:px-10">
                    <img src={chair} className="max-w-xs md:max-w-md rounded-lg shadow-2xl" alt='' />
                    <div className='md:mr-20'>
                        <DayPicker
                            className='bg-base-100 p-6 rounded-lg shadow-lg'
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;