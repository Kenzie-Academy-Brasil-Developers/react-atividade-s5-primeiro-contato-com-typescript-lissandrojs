interface CardProps {
    name:string
    age:number
    hobby: string
}

const Card = ({name,age,hobby}:CardProps)=>{
    return(
        <div>
            <h3>{name}</h3>
            <span>{age}</span>
            <p>{hobby}</p>

        </div>
    )
}
export default Card