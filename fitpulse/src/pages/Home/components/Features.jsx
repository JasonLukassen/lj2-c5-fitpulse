import PropTypes from 'prop-types';

export default function Features( { images, title, par } ) {

    return (
        <div className="flex ">
            <div id="img">
                <img src={images} alt="responsiveness img" />
            </div>

            <div id="title">
                <h2>{title}</h2>
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