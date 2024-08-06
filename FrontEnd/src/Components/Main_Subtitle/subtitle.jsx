import './subtitle.css'

const Main_Subtitles = ({subtitle, style}) => {

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h2 style={style} className='subtitle_main'>{subtitle}</h2>
                </div>
            </div>
        </>
    )
}

export default Main_Subtitles