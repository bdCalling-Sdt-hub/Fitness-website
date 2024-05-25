interface IProps{
    title: string;
    style?: string
}
const Heading:React.FC<IProps> = ({title, style}) => {
    return (
        <h1 className={`text-secondary font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[65px] ${style}`}>{title}</h1>
    )
}

export default Heading