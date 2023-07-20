import Car from './Car'
import Apple from './Apple';
import Gun from './Gun';

function Garage() {
    const isDoorOpened = false;
    // const brand = 'Ferrari';
    // const color = 'Black';
    const carInfo = { brand: "Ferrari", color: "Black" }
    // const carInfo = {};
    const appleInfo = { type:"Fuji", color:"Red" };
    const carList = [
        { brand: "BMW" , color: "Red"},
        { brand: "Ford" , color: "Green"},
        { brand: "Tesla" , color: "Black"},
    ];

    const showCarInfo = carInfo.brand !== undefined && carInfo.color !== undefined;
    return (
      <>
        <h1>Who lives inside my Garage?</h1>
        {/* <Car brand={brand} color="Red" /> */}
        { showCarInfo && <Car carInfo={carInfo} /> }
        <Apple appleInfo={appleInfo} />
        <Gun/>
        {isDoorOpened?<h2>Garage door is open</h2>:<h2>Garage door is Closed</h2>}
        <ul>
            { carList.map((carInfo) => <li ><Car carInfo={carInfo} /></li>) }
        </ul>
      </>
    )
}

export default Garage;