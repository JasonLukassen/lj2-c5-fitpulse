import locationIcon from '../../assets/location.svg';
import avatarIcon from '../../assets/Avatar.svg';
export default function accountDashboard() {

    return (

        <div className="absolute top-0 right-0 bg-neutral-900 w-2/12 h-screen flex justify-end">
            <div className="profile-class m-10 p-10 pt-1">
                <img src={avatarIcon} alt="" className='absolute left-8 w-14 h-14 top-10 ' />
                <h1 className="font-poppins text-white font-semibold">Diego Loomans</h1>
                <h2 className="font-poppins text-gray-400 text-center">
                    <img src={locationIcon} alt="" className='absolute left-24' />Maastricht, The Netherlands
                </h2>
            </div>
        </div>
    );
}