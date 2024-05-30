import logoblanco from "../assets/logos/Logo blanco.svg";

export default function Footer() {
    return (
        <>
            <footer
                className="bg-[#333333] text-white text-[10px] h-[488px] p-10 flex flex-col justify-center">
                <div>
                    <img src={logoblanco} alt="logo" className="mb-5" />
                    <p className="text-[20] font-roboto">FOLLOW US ON OUR SOCIAL MEDIA CHANNELS </p>
                </div>


                <ul className="bg-[#333333] flex md:flex-row items-center h-20">
                    <li>
                        <a class="facebook" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i class="ri-facebook-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a class="twitter" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i class="ri-twitter-x-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a class="instagram" href="https://www.instagram.com/gevstack/">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i class="ri-instagram-fill"></i>
                        </a>
                    </li>
                    <li>
                        <a class="google" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i class="ri-google-fill"></i>
                        </a>
                    </li>
                </ul>



                <hr className="border-t border-white w-full mb-5" />

                <div className="grid grid-cols-5 ">

                    <div className="flex flex-col h-full justify-between">
                        <div >
                            <p className="text-[20] font-roboto mb-1"> PRIVACY NOTICE </p>
                            <p className="text-[20] font-roboto mb-1">DATA PROTECTION POLICY</p>
                            <p className="text-[20] font-roboto mb-1">COPYRIGHT</p>
                            
                        </div>
                        <p className="text-[20] font-roboto font-bold">COLOMBIA</p>
                    </div>



                    <div >
                        <p className="text-[20px] font-roboto font-bold mb-3">GENERAL</p>
                        <p className="text-[20] font-roboto mb-1">HOME </p>
                        <p className="text-[20] font-roboto mb-1">MUSCLE GROUPS</p>
                        <p className="text-[20] font-roboto mb-1">DISCOVER</p>
                        <p className="text-[20] font-roboto mb-1">REPORT</p>
                        <p className="text-[20] font-roboto mb-1">CONTACT</p>
                    </div>
                    <div >
                        <p className="text-[20px] font-roboto font-bold mb-3">LEGAL</p>
                        <p className="text-[20] font-roboto mb-1"> TERMS AND CONDITIONS OF USE </p>
                    </div>
                    <div >
                        <p className="text-[20px] font-roboto font-bold mb-3">KNOW US</p>
                        <p className="text-[20] font-roboto mb-1"> HISTORY </p>
                        <p className="text-[20] font-roboto mb-1">CONTACT US</p>
                        <p className="text-[20] font-roboto mb-1">WORK WITH US</p>
                    </div>
                </div>




            </footer>
        </>
    )
}