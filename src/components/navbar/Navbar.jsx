import Links from './links/Links'

const Navbar = () => {
  return (
    <div className='flex h-24 items-center justify-between'>
      <div className='text-3xl font-bold'>Rafat</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;