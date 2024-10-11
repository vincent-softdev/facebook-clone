const Close = (props) => {
    const url = "https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/D15K5HtLH2o.png"
    return (
        <i className={props.className} style={{backgroundImage: `url(${url})`, backgroundSize: `25px 835px`, backgroundRepeat: `no-repeat`, display: `inline-block`, backgroundPosition: `0px -427px`}}></i>
    )
}

const SmillingEmogi = (props) => {
    const url = "https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/9nFPWhKId_-.png"

    return (
        <i className={props.className} style={{backgroundImage: `url(${url})`, backgroundSize: `33px 214px`, backgroundRepeat: `no-repeat`, display: `inline-block`, backgroundPosition: `0px -33px`}}>

        </i>
    )
}

const ListMoreIcon = (props) => {
    const url = "https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/fpVKgQEDiS0.png"

    return (
        <i className={props.className} style={{backgroundImage: `url(${url})`, backgroundSize: `83px 208px`, backgroundRepeat: `no-repeat`, display: `inline-block`, backgroundPosition: `-25px -120px`}}>

        </i>
    )
}

const ImageIcon = (props) => {
    const url = "	https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/74AG-EvEtBm.png"

    return (
        <img src={url} alt="Image Icon" className={props.className}/>
    )
}

const TagPeopleIcon = (props) => {
    const url = "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/bvcq83GzJ4T.png"

    return (
        <img src={url} alt="Tag people Icon" className={props.className}/>
    )
}

const ColorfulTextIcon = (props) => {
    const url = "https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"

    return (
        <img src={url} alt="Colorful Text Icon" className={props.className}/>
    )
}

const AddEmotionIcon = (props) => {
    const url = "https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/_RWOIsUgWGL.png"

    return (
        <img src={url} alt="Add Emotion Icon" className={props.className}/>
    )
}

const AddLocationTagIcon = (props) => {
    const url = "https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/tzrCzWCsjtm.png"

    return (
        <img src={url} alt="Add Location Icon" className={props.className}/>
    )
}

const AddGifIcon = (props) => {
    const url = "https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/hQQ_G4cnSLu.png"

    return (
        <img src={url} alt="Add Gif Icon" className={props.className}/>
    )
}

const AddImageIcon = (props) => {
    const url = "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/V_plvjywlv_.png"

    return (
        <i className={props.className} style={{backgroundImage: `url(${url})`, backgroundSize: `83px 225px`, backgroundRepeat: `no-repeat`, display: `inline-block`, backgroundPosition: `-21px -187px`}}>

        </i>
    )
}

export const IconImages = {
    Close,
    ColorfulTextIcon,
    SmillingEmogi,
    ImageIcon,
    TagPeopleIcon,
    AddEmotionIcon,
    AddLocationTagIcon,
    AddGifIcon,
    ListMoreIcon,
    AddImageIcon
}