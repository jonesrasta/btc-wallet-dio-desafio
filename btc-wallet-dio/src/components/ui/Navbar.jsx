import logobtc from "../../assets/logobitcoin.svg";

function Navbar() {
  return (
      <div className="flex mx-auto w-full items-center justify-center">
        <nav className="bg-[#07080ad7] z-20 border-gray-200 backdrop-blur-md">
          <div className="mx-auto p-4 max-w-7xl">
            <a
              href="https://bitcoin.org/pt_BR/"
              target="_blank"
              className="flex items-center"
            >
              <img src={logobtc} className="h-10 items-center mx-auto" alt="Flowbite Logo" />
            </a>
          </div>
        </nav>
      </div>
    
  );
}

export default Navbar;
