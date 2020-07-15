import React from 'react'

const Image = ({ src, alt, title, width, height}) => {
    return(
        <img
            src={src}
            alt={alt}
            title={title}
            width={width}
            height={height} />
    )
}

export default Image