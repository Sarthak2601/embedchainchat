interface TitleProps{
    title: string
}

const Title = ({title}: TitleProps) => {
    return (
        <div className="py-8">
            <h1 className="title">{title}</h1>
        </div>
    ); 
}

export default Title;