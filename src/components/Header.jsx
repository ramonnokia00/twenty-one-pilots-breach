import logoclancy from "../assets/logoclancy.png"
const Header = () => {
    return (<>
        <div className=" text-red-600 w-full h-[250px] flex">
            <h2 className="text-3xl">Albuns</h2>
            <h2 ></h2>
            <div>
                <img src={logoclancy} alt="" className="w-[50px]"/>
                <img src={logoclancy} alt="" className="w-[50px]"/>
            </div>


        </div>
    </>);
}

export default Header;