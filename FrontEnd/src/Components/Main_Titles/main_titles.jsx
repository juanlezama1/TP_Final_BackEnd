import './main_titles.css'

const Main_Titles = ({title, style}) => {

    if (style)

    return (
        <div className="pt-3 mb-0 row" style={{backgroundColor: '#5eb0df'}}>
            <div className="col-12">
                <h1 style={style} className='title_main_site'>{title}</h1>
            </div>
        </div>
    )

    else

    {
        return (
            <div className="pt-3 mb-0 row" style={{backgroundColor: '#5eb0df'}}>
                <div className="col-12">
                    <h1 style={style} className='title_main_site'>{title}</h1>
                </div>
            </div>
        )
    }
}

export default Main_Titles