function Product({ id, image_url, name , description }) {
    return (
        <div className="relative flex flex-col m-5 bg-white  z-30 p-5 shadow hover:bg-gray-50 cursor-pointer rounded-xl">
            <div className="flex ">

            <img src={image_url} height={202} width={53}
            objectFit="contain" alt=""/>

            <div className="ml-6">
            <h4 className="my-3">{ name }</h4>
            <p className="text-xs my-2 line-clamp-2 ">{description}</p>

            </div>
            </div>
            
            
        </div>
    )
}

export default Product
