import './subtitle.css'

const Main_Subtitles = ({subtitle}) => {

    return (
        <>
            <div className="mt-0 mb-3 row">
                <div className="col-12">
                    <h2 className='subtitle_main'>{subtitle}</h2>
                </div>
            </div>
        </>
    )
}

export default Main_Subtitles