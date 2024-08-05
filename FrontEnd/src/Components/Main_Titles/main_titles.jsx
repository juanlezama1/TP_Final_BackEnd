import './main_titles.css'

const Main_Titles = ({title}) => {

    return (
        <div className="pt-3 mb-0 row" style={{backgroundColor: '#5eb0df'}}>
            <div className="col-12">
                <h1 className='title_main_site'>{title}</h1>
            </div>
        </div>
    )
}

export default Main_Titles