import PropTypes from 'prop-types';

export default function Features( { images, title, par } ) {

    return (
        <div className="w-1/4 text-center space-y-5 min-w-44">
            <div id="img" className='flex justify-center pt-[5vh]'>
                <img src={images} alt="responsiveness img" />
            </div>

            <div id="title">
                <h2 className='text-2xl '>{title}</h2>
            </div>

            <div id="paragraph">
                <p>{par}</p>
            </div>
        </div>
    )

}

Features.propType = {
    images: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    par: PropTypes.string.isRequired
}