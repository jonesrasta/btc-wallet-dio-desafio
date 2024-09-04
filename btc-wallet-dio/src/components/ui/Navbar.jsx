import logobtc from "../../assets/logobtc.png";

function Navbar() {
  return (
      <div className="flex mx-auto w-full items-center justify-center">
        <nav className="bg-[#07080ad7] z-20 border-gray-200 backdrop-blur-md">
          <div className="mx-auto p-4 max-w-7xl">
            <a
              href="https://bitcoin.org/pt_BR/"
              target="_blank"
              className="flex items-center space-x-3"
            >
              <img src={logobtc} className="h-10" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                BTC Wallet
              </span>
            </a>
          </div>
        </nav>
      </div>
    
  );
}

export default Navbar;
