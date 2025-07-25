import React from "react";

function Product() {
  const product = [
    {
      price: "$44",title: "Gaming Handle", 'img':'product_1.png'},
    { price: "$50", title: "Headphones" ,'img':'product_2.png'},
    { price: "$90", title: "T-Shirts" ,'img':'product_3.png'},
  ];
  return (
    <>
      <main className="text-white bg-black flex justify-center items-center min-h-[850px] flex-col pt-[5px] pb-4">
        <h1 className="font-bold text-3xl">Explore Our Products</h1>
        <div className="flex justify-center items-center mt-5 mb-8">
          <div className="h-[1px] w-[60px] mr-4 bg-white"></div>
          <img src="logo.png" alt="Logo" className="w-[50px] h-[60px]" />
          <div className="h-[1px] w-[60px] ml-4 bg-white"></div>
        </div>
        <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
        {product.map((items,index)=>(
            <div className="bg-orange-500 w-[230px] h-[260px] md:h-[420px] md:w-[340px] flex justify-center items-center flex-col hover:border-orange-500 hover:border-4 hover:bg-transparent" key={index}>
                <div><img src={items.img} alt="" className="w-[120px] md:w-[180px]" /></div>
                <h1>{items.price}</h1>
                <h5>{items.title}</h5>
            </div>
        ))}
        </div>
      </main>
    </>
  );
}

export default Product;
