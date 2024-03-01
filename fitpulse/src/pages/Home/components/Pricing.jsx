import lightCheckmark from '../../../assets/lightCheckmark.svg'
import darkCheckmark from '../../../assets/darkCheckmark.svg'
import PropTypes from 'prop-types'

export default function Pricing({ info }) {

    return (
        <div className={`w-1/4 text-center  b-solid b-white border-2 rounded-xl min-h-96 ${(info.bestDeal) === true ? 'bg-pricing text-white' : 'bg-white text-pricing'}`}>
            <div className='w-full p-10 pb-5 '>
                <h1 className='text-3xl'>{info.title}</h1>
            </div>
            <div>
                <p>&euro;{info.price} / monthly</p>
            </div>
            <div className='flex justify-center'>
                <hr className='w-3/4 my-5 '/>
            </div>
            <div className=''>
                <div className="w-full flex justify-start align-center pl-10 py-5">
                    <img src={info.bestDeal === true ? lightCheckmark : darkCheckmark} alt="" /><p className='pl-5'>{info.features.one}</p>
                </div>
                <div className='w-full flex justify-start align-center pl-10 py-5'>
                    <img src={info.bestDeal === true ? lightCheckmark : darkCheckmark} alt="" /><p className='pl-5'>{info.features.two}</p>
                </div>
                <div className='w-full flex justify-start align-center pl-10 py-5'>
                    <img src={info.bestDeal === true ? lightCheckmark : darkCheckmark} alt="" /><p className='pl-5'>{info.features.three}</p>
                </div>
                <div className='py-8'>
                    <button className='w-1/2 h-14  b-solid b-gold border-1 bg-gold text-white rounded-xl' onClick={() => alert('alert')}>Buy Now!</button>
                </div>
            </div>
        </div>
    )
}