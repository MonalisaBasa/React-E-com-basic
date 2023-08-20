import React, {useState,useEffect} from 'react'

const Shop = (props) => {

  const [id,idchange]=useState("");
  const[price,pricechange]=useState("");
  const[name,namechange]=useState("");
  const[category,categorychange]=useState("");
  const[formvalue,setformvalue] = useState([]);

  const idvalue = (event) => {
    idchange(event.target.value);
    console.log(id);
  };

  const pricevalue = (event) => {
    pricechange(event.target.value);
  };

  const namevalue=(event)=>{
    namechange(event.target.value);
  };

  const categoryvalue=(event)=>{
    categorychange(event.target.value);
  }

  const submithandler = (event) =>{
  event.preventDefault();
    const PId=id;
    const PPrice=price;
    const PName=name;
    const PCategory=category;
    
    let obj={
      PId,
      PPrice,
      PName,
      PCategory,
    };
    setformvalue([...formvalue, obj]);

    props.onSaveData(PId,PPrice,PName,PCategory);

    idchange("");
    pricechange("");
    namechange("");
    categorychange("");

  };

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify());
  },[id],formvalue);
  return (
    <div>
      <form onSubmit={submithandler} value={formvalue}>
        <div>
        <label htmlFor="productid">Product ID</label>
        <input
          type="number"
          id="productid"
          required
          onChange={idvalue}
          value={id}
        />
        <label htmlFor="sellingprice">Selling Price</label>
        <input
          type="number"
          id="sellingprice"
          min="0" 
          requied
          onChange={pricevalue}
          value={price}
        />
        <label htmlFor="productname">Product Name</label>
        <input
          type="text"
          id="productname"
          onChange={namevalue}
          value={name}
        />
        <label htmlFor="productcategory">Product category</label>
        <select
        id="productcategory"
        onChange={categoryvalue}
        value={category}
        >


          <option value='electronics'>
            Electronics Item
          </option>
          <option value='food'>Food</option>
          <option value='skin'>Skin </option>
        </select>
        </div>
        
          <button type="submit" >
            Add product
           
          </button>
        
      </form>

    </div>
  );
};

export default Shop;
