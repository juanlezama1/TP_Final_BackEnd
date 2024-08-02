import './main_titles.css'

const Main_Titles = ({title}) => {

    return (
        <div className="mt-3 mb-0 row">
            <div className="col-12">
                <h1 className='title_main'>{title}</h1>
            </div>
        </div>
    )
}

export default Main_Titles