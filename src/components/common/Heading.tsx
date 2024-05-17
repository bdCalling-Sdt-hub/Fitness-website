const Heading = ({title, style}: {title: string, style: string}) => {
    return (
        <h1 className={`text-[#3F2700] font-semibold text-5xl leading-[65px] ${style}`}>{title}</h1>
    )
}

export default Heading