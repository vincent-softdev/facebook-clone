const Close = (props) => {
    const url = "https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/D15K5HtLH2o.png"
    return (
        <i dataVisualcompletion="css-img" className={props.className} style={{backgroundImage: `url(${url})`, backgroundSize: `25px 835px`, backgroundRepeat: `no-repeat`, display: `inline-block`, backgroundPosition: `0px -427px`}}></i>
    )
}

export const IconImages = {
    Close
}