const ItemImage = (props: { image: string ; index: number}) => {
    return (
        <div className='lg:h-[300px] sm:h-[200px] maxsm:h-[100px]'>
            <img src={props.image} className={(props.index % 2) != 0 ? `mt-[10%] h-full object-cover` : `cover h-full object-cover`}></img>
        </div>
    )
}

export default ItemImage